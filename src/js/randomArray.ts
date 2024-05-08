export const randomArr = (max: any, min: any, length: any) => {
  const arr: any = []
  while (arr.length < length) {
    const ran: any = Math.random() * max

    if (arr.indexOf(ran) !== -1) {
      continue
    } else {
      arr.push(ran)
    }
  }
  console.log(arr)
}
