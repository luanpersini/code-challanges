const rocket_pos = [3, 11, 4] //2
const rocket_speed = [5, 1, 4]

const rocket_pos2 = [6, 7, 8] //1
const rocket_speed2 = [5, 7, 3]

const rocket_pos3 = [900, 90] //1
const rocket_speed3 = [1, 10]

const rocket_pos4 = [2, 2, 2, 3, 2]
const rocket_speed4 = [2, 2, 3, 1, 2]

type ActualPosition = {
  id: number
  pos: number
  speed: number
}

function getResult(rocketPos, rocketSpeed) {
  let actualPosition: ActualPosition[] = []
  const limitPosition = 1000

  for (let i = 0; i <= limitPosition; i++) {
    if (i === 0) {
      rocketPos.forEach((height, index) => {
        actualPosition.push({
          id: index,
          pos: height,
          speed: rocketSpeed[index]
        })
      })
    }

    // Move to the next step
    actualPosition.forEach((obj, index) => {
      actualPosition[index].pos = obj.pos + obj.speed
    })
    // console.log('actualPosition: After moving', actualPosition)

    // Find element in the same position.
    // If yes, Sum speed > remove the element found     
    actualPosition.every((obj, index) => {
      const notInPosition = actualPosition.filter((item) => item.pos !== obj.pos && item.id !== obj.id)
      // console.log('notInPosition: ', notInPosition)

      const inTheSamePosition = actualPosition.filter((item) => item.pos === obj.pos && item.id !== obj.id)
      // console.log('x: ', x)

    if(inTheSamePosition?.length > 0){
      actualPosition[index].speed =
        actualPosition[index].speed + inTheSamePosition.reduce((accumulator, element) => accumulator + element.speed, 0)

      actualPosition = [actualPosition[index], ...notInPosition]
      const  toBreak = true
      if (toBreak) return false                
    }        
    })
  }
  
  const limitPositionReached = actualPosition.find((obj) => obj.pos > limitPosition)
 
  if(limitPositionReached || actualPosition.length === 1) return actualPosition.length  
}

console.log("A: " + getResult(rocket_pos, rocket_speed))
console.log("B: " + getResult(rocket_pos2, rocket_speed2))
// console.log("C: " + getResult(rocket_pos3, rocket_speed3))
// console.log('D: ' + getResult(rocket_pos4, rocket_speed4))