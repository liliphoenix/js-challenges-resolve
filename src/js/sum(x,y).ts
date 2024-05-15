export const getSum = (x: any, y?: any) => {
  if (y) {
    return x + y
  } else {
    return (z: any) => {
      return x + z
    }
  }
}
