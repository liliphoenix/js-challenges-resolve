export const mySetItem = (key: any, value: any, time: any) => {
  const timeNow = new Date().getTime()
  const expiration = time * 60 * 1000
  localStorage.setItem(
    key,
    JSON.stringify({
      value,
      expiration: timeNow + expiration
    })
  )
}
export const myGetItem = (key: any) => {
  const obj = JSON.parse(localStorage.getItem(key) || '')
  if (obj.expiration >= new Date().getTime()) {
    return obj.value
  } else {
    localStorage.removeItem(key)
    return null
  }
}
