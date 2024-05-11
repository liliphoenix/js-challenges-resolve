export const stringCount = () => {
  const arr = ['ab', 'c', 'ab', 'd', 'c']
  for (let i = 0; i < arr.length; i++) {
    let count = 1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++
        arr[j] = `${arr[i]}${count}`
      }
    }
    if (count !== 1) {
      arr[i] = `${arr[i]}1`
    }
  }
  console.log(arr)
}
