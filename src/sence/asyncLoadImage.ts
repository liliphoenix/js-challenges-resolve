export const asyncLoadImage = (url: any) => {
  const image = new Image()
  return new Promise((resolve, reject) => {
    image.onload = function () {
      resolve(image)
    }
    image.onerror = function () {
      reject('error: Error Load Image')
    }
    image.src = url
  })
}
// asyncLoadImage('123').then(() => {})
