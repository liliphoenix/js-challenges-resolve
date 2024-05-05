import { PromiseAll } from './promiseAll'
import { promiseAllSettled } from './promiseAllsettled'
import { promiseRace } from './promiseRace'
import { promiseResolve } from './promiseResolve'
import { promise, reject, resolve } from './types'
const FailedStatus = 'failed'
const PendingStatus = 'pending'
const SuccessStatus = 'resolved'
class MyPromise {
  status: 'failed' | 'pending' | 'resolved'
  result: any
  reason: any
  onFailedFun: any
  onSuccessFun: any
  constructor(callback: promise) {
    this.status = 'pending'
    this.result = null
    this.reason = null
    this.onSuccessFun = []
    this.onFailedFun = []
    try {
      callback(this.resolve.bind(this), this.reject.bind(this))
    } catch (error: any) {
      this.reject.call(this, error)
    }
  }
  resolve(res: resolve) {
    if (this.status == PendingStatus) {
      this.status = SuccessStatus
      this.result = res
      while (this.onSuccessFun.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onSuccessFun.shift()(res)
      }
    }
  }
  reject(reason: reject) {
    if (this.status == PendingStatus) {
      this.status = FailedStatus
      this.result = reason
      while (this.onFailedFun.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFailedFun.shift()(reason)
      }
    }
  }
  then(resolveCallback: resolve, failedCallback?: reject) {
    resolveCallback =
      typeof resolveCallback === 'function' ? resolveCallback : (value) => value
    failedCallback =
      typeof failedCallback === 'function' ? failedCallback : (reason) => reason
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === PendingStatus) {
        this.onSuccessFun.push(() => {
          queueMicrotask(() => {
            try {
              let x = resolveCallback(this.result)
              resolvePromise(x, promise2, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onFailedFun.push(() => {
          queueMicrotask(() => {
            try {
              let x = failedCallback && failedCallback(this.result)
              resolvePromise(x, promise2, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
      if (this.status === SuccessStatus) {
        queueMicrotask(() => {
          try {
            let x = resolveCallback(this.result)
            resolvePromise(x, promise2, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.status === FailedStatus) {
        queueMicrotask(() => {
          try {
            let x = failedCallback && failedCallback(this.result)
            resolvePromise(x, promise2, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
    return promise2
  }
  static resolve(res: any) {
    if (res instanceof MyPromise) {
      return res
    }
    return new MyPromise((resolve, reject) => {
      resolve(res)
    })
  }
  static reject(reason: any) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
  static all(promiseArr: any) {
    return PromiseAll(promiseArr)
  }
  static allSettled(promiseArr: any) {
    return promiseAllSettled(promiseArr)
  }
  static race(promiseArr: any) {
    return promiseRace(promiseArr)
  }
  static resolveFn(promise: any) {
    return promiseResolve(promise)
  }
}
function resolvePromise(x: any, promise2: any, resolve: any, reject: any) {
  if (x === promise2) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    )
  }
  // 目的是将当前then返回的promise状态改成resolve或者reject
  if (typeof x === 'object' || typeof x === 'function') {
    // x 为 null 直接返回，走后面的逻辑会报错
    if (x === null) {
      return resolve(x)
    }

    let then
    try {
      // 把 x.then 赋值给 then
      then = x.then
    } catch (error) {
      // 如果取 x.then 的值时抛出错误 error ，则以 error 为据因拒绝 promise
      return reject(error)
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      let called = false
      try {
        then.call(
          x, // this 指向 x
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          (y: any) => {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量 called
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          (r: any) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (error) {
        // 如果调用 then 方法抛出了异常 error：
        // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
        if (called) return

        // 否则以 error 为据因拒绝 promise
        reject(error)
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x)
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x)
  }
}
export { MyPromise }
