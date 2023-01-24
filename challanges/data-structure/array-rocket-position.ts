const rocket_pos = [3, 11, 4]
const rocket_speed = [5, 1, 4]

const rocket_pos2 = [3, 11]
const rocket_speed2 = [5, 1]

const rocket_pos3 = [7, 4, 10]
const rocket_speed3 = [3, 4, 2]

function getResult(rocketPos, rocketSpeed) {
  const stepByStepPosition = []

  for(let i = 0; i <= 100; i++){
    const previousPos = stepByStepPosition

    rocketPos.forEach((height, index)=>{
      if(i === 0){  
      stepByStepPosition.push(rocketPos[index] + rocketSpeed[index])       
      }else{ 
        stepByStepPosition[index] = previousPos[index] + rocketSpeed[index]      
      }
    })    
    
    const removeDuplicates =  stepByStepPosition.filter((item, 
      index) => stepByStepPosition.indexOf(item) === index)
    
    if(removeDuplicates.length < stepByStepPosition.length) {
      return removeDuplicates.length
    }    
    
  }
 
  return stepByStepPosition.length
 
}

console.log(getResult(rocket_pos, rocket_speed))
// console.log(getResult(rocket_pos2, rocket_speed2))
// console.log(getResult(rocket_pos3, rocket_speed3))
