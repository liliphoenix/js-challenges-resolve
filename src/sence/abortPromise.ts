// 中断promise请求

export const abortPromise = () => {
  let isRequestCancelled = false

  const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isRequestCancelled) {
        resolve('Data fetched successfully')
      } else {
        reject('Request cancelled')
      }
    }, 2000)
  })

  fetchData
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })

  // Simulate cancelling the request
  isRequestCancelled = true
}
