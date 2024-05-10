export const tenToTwo = () => {
  const a = 100
  let res = '' + (a % 2)
  let remainder = a / 2
  for (let index = 0; index < 6; index++) {}
  while (remainder > 1) {
    res += remainder % 2
    remainder = Math.trunc(remainder / 2)
  }
  res += remainder
  console.log(res.split('').reverse().join(''))
}
