//https://www.hackerrank.com/challenges/array-left-rotation/problem
/*A left rotation operation on an array of size shifts each of the array's elements unit to the left. Given an integer, 
rotate the array that many steps left and return the result.  */
const arr = [1,2,3,4,5]

function arrayLeftRotation (arr: number[], d: number) {
for(let i = 1; i <= d; i++){
  const fromIndex = 0
  const toIndex = arr.length - 1
  const element = arr.splice(fromIndex, 1)[0]
  arr.splice(toIndex, 0, element)  
}
return arr
}
console.log('arr: ' + arrayLeftRotation(arr,4))
//[LOG]: "arr: 5,1,2,3,4" 