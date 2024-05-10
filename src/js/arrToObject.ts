export const arrToObject = () => {
  let arr = ['zm', 'za', 'b', 'lm', 'ln', 'k']
  let map = new Map()
  arr.forEach((item) => {
    if (map.has(item[0])) {
      map.get(item[0]).push(item)
    } else {
      map.set(item[0], [item])
    }
  })
  const res: any = {}
  for (let value of map) {
    res[value[0]] = value[1]
  }
  console.log(res)
}
