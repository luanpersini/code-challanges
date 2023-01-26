export { }
const arr: number[][] = [
  [-9, -9, -9,  1, 1, 1],
  [ 0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [ 0,  0,  8,  6, 6, 0],
  [ 0,  0,  0, -2, 0, 0],
  [ 0,  0,  1,  2, 4, 0]
]

function hourglassSum(arr: number[][]) { 
  const lastRow = arr.length - 1
  const lastCol = arr[0].length - 1
  const lastStartRow = lastRow - 2
  const lastStartCol = lastCol - 2

  const sums = []
  for (let r = 0; r <= lastStartRow; r++) {
    const row1 = arr[r]
    const row2 = arr[r + 1]
    const row3 = arr[r + 2]

    for (let i = 0; i <= lastStartCol; i++) {
      const row1Cols = [row1[i], row1[i + 1], row1[i + 2]]
      const row2Cols = [row2[i + 1]]
      const row3Cols = [row3[i], row3[i + 1], row3[i + 2]]
      const numbersToSum = row1Cols.concat(row2Cols, row3Cols)
      const sum = numbersToSum.reduce((previous, current) => previous + current, 0)
      sums.push(sum)
    }
  }

  const max = sums.reduce((previous, current) => {
    return Math.max(previous, current)
  }, -Infinity)
  return max
}

console.log(hourglassSum(arr))
//28
// The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2