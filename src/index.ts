import chalk from 'chalk'
import { MyPromise } from './promise'
import { catchFn } from './catch'
import { trafficLight } from './sence/trafficLight'
import { myRepeat } from './sence/repeat'
import { OneSecond } from './sence/oneSec12345'
import { mySettimeOut } from './sence/mySettimeout'
import { myInternal } from './sence/timeOutInterval'
import { thirdTimeAjax } from './sence/3timeAjax'
import { abortPromise } from './sence/abortPromise'
import { fastestApi } from './sence/fastestApi'
import { multiFetch } from './sence/asyncMultiFetch'
import { promiseFloat } from './sence/promiseFloat'
import { concurrently } from './sence/concurrently'
import { testQueue } from './sence/134'
import { Scheduler } from './sence/promiseScedule'
import { myPromiseAllSchedule } from './sence/schedulePromiseAll'
import { promiseTimeOut } from './sence/promiseTimeOut'
import { logTime } from './sence/3SecLogTime'
async function main() {
  const test = [
    new Promise((resolve, reject) => {
      resolve('test')
    }),
    new Promise((resolve, reject) => {
      reject('test')
    }),
    1
  ]
  console.log('------------ all ----------------')

  await MyPromise.all(test)?.then(
    (res) => {
      console.log(res)
    },
    () => {
      console.log(123)
    }
  )
  console.log('------------ allSettled ----------------')

  await MyPromise.allSettled(test)?.then(
    (res) => {
      console.log(res)
    },
    () => {
      console.log('allSettled:fail')
    }
  )
  console.log('------------ race ----------------')
  await MyPromise.race(test)?.then(
    (res) => {
      console.log(res)
    },
    () => {
      console.log('allSettled:fail')
    }
  )
  console.log('------------ catch ----------------')
  catchFn()
  console.log('------------ resolve ----------------')
  await MyPromise.resolveFn(test)?.then(
    (res) => {
      console.log(res)
    },
    () => {
      console.log('allSettled:fail')
    }
  )
  // console.log('------------ traffic Light ----------------')
  // trafficLight()

  // console.log('------------ repeat ----------------')
  // const fn = myRepeat(console.log, 12, 200)
  // fn('123')

  // console.log('------------ 12345 ----------------')
  // OneSecond()

  // console.log('------------ timeOut->interval ----------------')
  // const clearF = mySettimeOut(() => {
  //   console.log(123)
  // }, 1000)
  // setTimeout(() => {
  //   clearF()
  // }, 1499)

  // console.log('------------ interval->timeOut ----------------')
  // myInternal(() => {
  //   console.log(123)
  // }, 1000)

  // console.log('------------ 3timeAjax ----------------')
  // thirdTimeAjax()

  // console.log('------------ abort promise ----------------')
  // abortPromise()

  // console.log('------------ fastest Api ----------------')
  // fastestApi()

  // console.log('------------  multiFetch ----------------')
  // multiFetch()

  // console.log('------------  promise float ----------------')
  // promiseFloat()

  // console.log('------------ concurrently  ----------------')
  // concurrently()

  // console.log('------------ promise queue  ----------------')
  // testQueue()

  // console.log('------------ Scheduler  ----------------')
  // const sleep = (time: any) =>
  //   new Promise((resolve) => setTimeout(resolve, time))

  // // 同时进行的任务最多2个
  // const scheduler = new Scheduler(2)

  // // 添加异步任务
  // // time: 任务执行的时间
  // // val: 参数
  // const addTask = (time: any, val: any) => {
  //   scheduler.add(() => {
  //     return sleep(time).then(() => console.log(val))
  //   })
  // }

  // addTask(1000, '1')
  // addTask(500, '2')
  // addTask(300, '3')
  // addTask(400, '4')`

  // console.log('------------ promise->schedule  ----------------')
  // myPromiseAllSchedule()

  // console.log('------------promiseTimeOut  ----------------')
  // promiseTimeOut()

  // console.log('------------logTime  ----------------')
  // logTime()
}
export { main }
