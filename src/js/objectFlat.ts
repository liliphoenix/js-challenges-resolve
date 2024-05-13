export const objectFlat2 = () => {
  const obj: any = { a: { b: { c: 1 } }, d: { e: 2 } }
  let resObj: any = {}
  const getKeys = (obj1: any, prefix = '', res: any) => {
    for (let key in obj1) {
      const newKey = prefix !== '' ? `${prefix}.${key}` : key
      if (typeof obj1[key] === 'object') {
        getKeys(obj1[key], newKey, res)
      } else {
        resObj[newKey] = obj1[key]
      }
    }
  }
  getKeys(obj, '', resObj)
  console.log(resObj)
}
