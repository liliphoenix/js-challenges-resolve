export const responseArr = async (urls: any) => {
  let promises: any[] = []
  urls.forEach((url: any) => {
    promises.push(fetch(url))
  })
  Promise.race(promises).then((res) => {
    return res
  })
}
