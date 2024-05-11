export const judgeObjectEquals = (objOne: any, objSec: any) => {
  let flag = true
  const judgeFun = (obj1: any, obj2: any) => {
    for (let [key, value] of Object.entries(obj1)) {
      if (Object.hasOwn(obj2, key)) {
        console.log(obj1[key], obj2[key])

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
          judgeFun(obj1[key], obj2[key])
        } else if (obj1[key] !== obj2[key]) {
          flag = false
        }
      }
    }
  }

  judgeFun(objOne, objSec)
  console.log(flag)
}
