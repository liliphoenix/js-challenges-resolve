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
import { mySetInterval } from './sence/aa+b2a+b'
import { randomArr } from './js/randomArray'
import { hundred } from './js/1-100'
import { isSymmetryNum } from './js/isSymmetryNum'
import { myAsyncAwait } from './js/myAsyncAwait'
import { proxyArr } from './js/proxyArr'
import { getAllArrEle } from './js/arrAllEquals'
import { arrMax } from './js/arrMax'
import { feiBerNac } from './js/feiberNatchi'
import { myGetItem, mySetItem } from './js/LocalStorageGetItem'
import { PalindromeNum } from './js/palindromNum'
import { randomStr } from './js/randomStr'
import { judgeCamelCase } from './js/judgeCamelCase'
import { zipStr } from './js/zipStr'
import { MapSense } from './js/mapScence'
import { numberLog } from './js/numberLog'
import { replaceABC } from './js/abc'
import { judgeString } from './js/stringJudge'
import { bubbleSort } from './sort/bubbleSort'
import { selectionSort } from './sort/selectionSort'
import { tenToTwo } from './js/10->2'
import { chartCount } from './js/charactorCount'
import { isoscelesTriangle } from './js/isoscelesTriangle'
import { closest } from './js/closest'
import { noCycleGetSum } from './js/noCycleGetSum'
import { chainedAssignment } from './js/chainedAssignment'
import { tenOne } from './js/count10And1'
import { arrToObject } from './js/arrToObject'
import { chainedArr } from './js/chainedArr'
import { stringCount } from './js/stringCount'
import { removeEmptyProperties } from './js/emptyProperty'
import { judgeObjectEquals } from './js/judgeObjectEquals'
import { primeNum } from './js/primeNumber'
import { format } from 'path'
import { formatTime } from './js/formatTime'
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

  // console.log('------------mySetInterval  ----------------')
  // mySetInterval(1000, 1000)

  // console.log('------------randomArr  ----------------')
  // randomArr(10, 2, 10)

  // console.log('------------1-100 递归  ----------------')
  // hundred()

  // console.log('------------1-10000 对衬数  ----------------')
  // isSymmetryNum()

  // console.log('------------async await 源码  ----------------')
  // myAsyncAwait()

  // console.log('------------proxy arr----------------')
  // let arr = [1, 2, 3, 4, 5]
  // console.log(proxyArr(arr)[-1])

  // console.log('------------get Arr equals Element ----------------')
  // let arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]
  // getAllArrEle(arr)

  // console.log('------------Arr max----------------')
  // console.log(arrMax([11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]))

  // console.log('------------斐波那契----------------')
  // console.log(feiBerNac(32))

  // console.log('------------ myGetItem mySetItem ----------------')
  // mySetItem('num', '123', 1)
  // console.log(myGetItem('num'))

  // console.log('------------ PalindromeNum ----------------')
  // PalindromeNum()

  // console.log('------------ random String ----------------')
  // randomStr(13)

  // console.log('------------ Camel Case ----------------')
  // judgeCamelCase('ByteDance', 'BD')

  // console.log('------------ zipStr ----------------')
  // zipStr('aaaabbcc')

  // console.log('------------ MapSense ----------------')
  // MapSense()

  //  console.log('------------ 50a6we8y20x ----------------')
  // numberLog()

  //  console.log('------------ 去除b ac ----------------')
  // replaceABC('aacbd')

  //  console.log('------------ 去除b ac ----------------')
  // judgeString(['1', new String(123)])

  // console.log('------------ 十进制转二进制 ----------------')
  // tenToTwo()

  // console.log('------------ 计算字符出现次数 ----------------')
  // chartCount('132123125444hhhhh666')

  // console.log('------------ 等腰三角形 ----------------')
  // isoscelesTriangle(5)

  // console.log('------------ 求最接近的值  ----------------')
  // closest()

  // console.log('------------ 不用循环求和  ----------------')
  // noCycleGetSum()
  //console.log('------------ 连等赋值c  ----------------')
  // chainedAssignment()
  //console.log('------------ 10个1  ----------------')
  // tenOne()
  //console.log('------------  ['zm', 'za', 'b', 'lm', 'ln', 'k']  ----------------')
  // arrToObject()
  // console.log('------------  ["0->2", "4->5", "7", "13", "15->16"]  ----------------')
  // chainedArr()
  // console.log('------------  ['ab', 'c', 'ab', 'd', 'c']  ----------------')
  // stringCount()
  // console.log('------------ 移除空属性  ----------------')
  // removeEmptyProperties({ a: { a: null }, b: '哈哈哈' })
  // console.log('------------ 判断两个对象是否相等  ----------------')
  // judgeObjectEquals({ a: '11', b: { c: '22' } }, { a: '11', b: { c: '22' } })
  // console.log('------------ 素数  ----------------')
  // console.log(primeNum(201))
  // console.log('------------ 实现日期格式化函数  ----------------')
  formatTime(new Date(), 'YYYY-MM-DD HH:mm:ss')

  // console.log('------------ 冒泡 ----------------')
  // bubbleSort([4, 51, 2, 4, 56, 56, 7, 43, 55])
  // console.log('------------ 选择 ----------------')
  // selectionSort([4, 51, 2, 4, 56, 56, 7, 43, 55])
}
export { main }
