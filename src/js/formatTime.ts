export const formatTime = (time: any, format: any) => {
  const date = time
  const pad = (r: any) => (r >= 10 ? r : `0${r}`)
  const dateFormat: any = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  }
  const resTime = format.replace(
    /(YYYY|MM|DD|HH|mm|ss)/g,
    (matched: any) => dateFormat[matched]
  )
  console.log(resTime)
}
