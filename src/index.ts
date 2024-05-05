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
  multiFetch()
}
export { main }
