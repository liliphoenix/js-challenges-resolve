export const objectFlat = () => {
  let testObj: any = {
    'a.b.c': 1,
    'd.e': [2, 3]
  }
  let res: any = {}
  for (let key in testObj) {
    const keys = key.split('.')
    keys.reduce((pre: any, next: any, index: any) => {
      if (index == keys.length - 1) {
        return (pre[next] = testObj[key])
      } else {
        pre[next] = {}
      }
      return pre[next]
    }, res)
  }
  console.log(res)
}
