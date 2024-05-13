export const generateFun = () => {
  const color16 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
  console.log(color16)

  return `rgb(${Math.trunc(Math.random() * 256)},${Math.trunc(Math.random() * 256)},${Math.trunc(Math.random() * 256)})`
}
