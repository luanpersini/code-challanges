const ground = [2, 3, 2, 1, 1]
const ground2 = [6, 2, 8, 1]
const ground3 = [100, 1, 1]

function getResult(ground) { 
  const nonUniques = []
  ground.forEach((height) => {    
    const count = ground.filter((x) => x == height).length
    if (count > 1) {      
      nonUniques.push(height)
    }
  })
  
  let targetLevel = 0  
  
  if (nonUniques.length > 1) {
    targetLevel = Math.max(...nonUniques)
  } else {
    const sum = ground.reduce((sum, num) => sum + num)   
    targetLevel = Math.trunc(sum / ground.length)   
  }

  const leveledGround = []
  let iterations = 0
  let correctHeight = 0

  ground.forEach((height) => {
    correctHeight = height

    while (correctHeight < targetLevel) {
      correctHeight = correctHeight + 1
      iterations++     
    }

    while (correctHeight > targetLevel) {
      correctHeight = correctHeight - 1
      iterations++      
    }

    if (correctHeight === targetLevel) {
      leveledGround.push(targetLevel)     
    }
  })
  
  return iterations
}

// console.log(getResult(ground))
// console.log(getResult(ground2))
console.log(getResult(ground3))