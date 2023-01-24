const ground = [2, 3, 2, 1, 1]
const ground2 = [6, 2, 8, 1]
const ground3 = [100, 1, 1]

function getResult(ground: number[]) { 
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



// const rocket_pos = [2, 3, 4]
// const rocket_speed = [1, 2, 4]

// const rocket_pos2 = [3, 11]
// const rocket_speed2 = [5, 1]

// const rocket_pos3 = [3, 11, 1]
// const rocket_speed3 = [5, 1, 1]

// function getResult(rocketPos, rocketSpeed) {
//   const rocket1_pos = rocketPos[0]
//   const rocket1_speed = rocketSpeed[0]
//   const rocket2_pos = rocketPos[1]
//   const rocket2_speed = rocketSpeed[1]

 
//   const farterRocketPos = (rocket2_pos > rocket1_pos) ? rocket2_pos : rocket1_pos
//   const farterRocketSpeed = (rocket2_pos > rocket1_pos) ? rocket2_speed : rocket1_speed
//   const catchUpRocketPos = (rocket2_pos > rocket1_pos) ? rocket1_pos : rocket2_pos
//   const catchUpRocketSpeed = (rocket2_pos > rocket1_pos) ? rocket1_speed : rocket2_speed 


//   let fartherRocketActualPosition = farterRocketPos
//   let catchUpRocketActualPosition = catchUpRocketPos

//   for(let i = 0; fartherRocketActualPosition <= 1000; i++){
   
//     fartherRocketActualPosition = fartherRocketActualPosition + farterRocketSpeed
//     catchUpRocketActualPosition = catchUpRocketActualPosition + catchUpRocketSpeed 
//     if(catchUpRocketActualPosition >= fartherRocketActualPosition) return 1
//   }
//   return 2