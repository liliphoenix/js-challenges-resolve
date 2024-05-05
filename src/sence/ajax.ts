export const myAjax = (url: string) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    // 第三个参数是true表示用异步函数
    xhr.open('Get', url, true)
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return
      if (this.status >= 200 && this.status < 400) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function () {
      reject(new Error(this.statusText))
    }
    //设置响应数据类型
    xhr.setRequestHeader('Accept', 'application/json')
    //发送http请求
    xhr.send(null)
  })
}
