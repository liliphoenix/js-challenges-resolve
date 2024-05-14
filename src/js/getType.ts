export const getType = () => {
  const type = Object.prototype.toString().slice(8, -1)
  console.log(type)
}
