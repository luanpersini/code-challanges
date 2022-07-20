export { }
const arr: number[][] = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

function diagonalSumDifference(arr: number[][]) {
  // the array is always a square (3x3, 4x4)
  const lastIndex = arr[0].length - 1
  const diagonal1 = []
  const diagonal2 = []
  for (let i = 0; i <= lastIndex; i++) {
    diagonal1.push(arr[i][i])
    diagonal2.push(arr[i][lastIndex-i])
}
  const sumDiagonall = diagonal1.reduce((previous, current) => previous + current, 0)
  const sumDiagonal2 = diagonal2.reduce((previous, current) => previous + current, 0)
  const difference = Math.max(sumDiagonall, sumDiagonal2) - Math.min(sumDiagonall, sumDiagonal2)
  return difference
}

console.log(diagonalSumDifference(arr))
// result = 15
//[ 11, 5, -12 ] = 4
// [ 4, 5, 10 ] = 19
// Max(19,4) - Min(19,4) = 19-4 = 15

const arr2: number[][] = [
  [11, 2, 4, 2],
  [4, 5, 6, 2],
  [10, 8, -12, 5],
  [4, 5, 7, 12]
]
console.log(diagonalSumDifference(arr2))
// result = 4
// [ 11, 5, -12, 12 ] = 16
// [ 2, 6, 8, 4 ] = 20
