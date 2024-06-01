// Hàm tạo một mảng số nguyên từ 0 đến n - 1
function createNumberArray(min, max) {
  var arr = []
  for (let i = min; i <= max; i++) {
    arr.push(i)
  }
  return arr
}

// Hàm random không trùng lặp
export function randomNonRepeating(min, max, count) {
  const arr = createNumberArray(min, max)
  const result = []
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * arr.length)
    result.push(arr[index])
    arr.splice(index, 1)
  }
  return result
}