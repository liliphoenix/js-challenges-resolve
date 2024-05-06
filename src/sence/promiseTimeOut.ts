export const promiseTimeOut = () => {
  let api3 = () => {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        console.log('3')
        resolve('api3')
      }, 3890)
    })
  }

  class Requesting {
    requesting: boolean
    constructor() {
      this.requesting = false
    }
    async request(req: any) {
      new Promise((resolve: any, reject: any) => {
        if (this.requesting) {
          console.log(this.requesting)
          reject()
        }
        this.requesting = true
        req().then(
          (res: any) => {
            return res
          },
          () => {
            throw new Error('is Requesting')
          }
        )
      })
    }
  }
  const Req = new Requesting()
  Req.request(api3)
  Req.request(api3)
}
