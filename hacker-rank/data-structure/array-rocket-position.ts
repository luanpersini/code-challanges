const rocket_pos = [3, 11, 4]
const rocket_speed = [5, 1, 4]

const rocket_pos2 = [6, 7, 8]
const rocket_speed2 = [5, 7, 3]

const rocket_pos3 = [900, 90]
const rocket_speed3 = [1, 10]

function getResult(rocketPos, rocketSpeed) {
  const actualPosition = []
  const actualSpeed = []
  
  for (let i = 0; i <= 1000; i++) {
    if (i === 0) {
      rocketPos.forEach((height, index) => {
        if (i === 0) {
          actualPosition.push(rocketPos[index] + rocketSpeed[index])
          actualSpeed.push(rocketSpeed[index])
        } else {
          actualPosition[index] = actualPosition[index] + actualSpeed[index]
        }
      })
    } else {
      actualPosition.forEach((height, index) => {
        actualPosition[index] = actualPosition[index] + actualSpeed[index]
      })
    }

    for (let i = 0; i < actualPosition.length; i++) {
      for (let j = 0; j < actualPosition.length; j++) {
        if (i !== j) {
          if (actualPosition[i] === actualPosition[j]) {
            actualPosition[i] = actualPosition[i]
            actualPosition.splice(j, j)
            actualSpeed[i] = actualSpeed[i] + actualSpeed[j]
            actualSpeed.splice(j, j)
          }
        }
      }
    }

    if (Math.max(...actualPosition) > 1000) break
  } // end for

  return actualPosition.length
}

// console.log(getResult(rocket_pos, rocket_speed))
console.log(getResult(rocket_pos2, rocket_speed2))
// console.log(getResult(rocket_pos3, rocket_speed3))
