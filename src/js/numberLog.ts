export const numberLog = () => {
  let str = '50a6we8y20x'
  let count = ''
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(Number(str[i]))) {
      count += str[i]
    } else {
      for (let j = 0; j < Number(count); j++) {
        console.log(str[i])
      }
      count = ''
    }
  }
}
