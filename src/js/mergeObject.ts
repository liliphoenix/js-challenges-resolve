export const mergeObject = () => {
  let obj1: any = {
    a: 1,
    b: {
      c: 2,
      d: 3
    },
    e: 4,
    h: {
      i: 5
    }
  }
  let obj2: any = {
    a: 111,
    b: {
      c: 222,
      f: 333
    },
    g: 444,
    h: 666
  }
  const merge = (obj: any, objNow: any) => {
    for (let key in obj) {
      if (objNow[key]) {
        if (typeof objNow[key] === 'object') {
          merge(obj1[key], objNow[key])
        } else {
        }
      } else {
        objNow[key] = obj[key]
      }
    }
  }
  merge(obj1, obj2)
  console.log(obj2)
}
