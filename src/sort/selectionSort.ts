export const selectionSort = (arr: any[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i]
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j]
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr)
}
