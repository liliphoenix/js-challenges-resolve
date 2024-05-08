// Promise.prototype.retry = (fn: any) => {
//   let time: any
//   return new Promise((resolve: any, reject: any) => {
//     const retry = () => {
//       fn().then(
//         (res) => {
//           resolve()
//         },
//         (error) => {
//           if (time <= 3) {
//             retry()
//           } else {
//             reject(new Error('do not do that again!'))
//           }
//         }
//       )
//     }
//   })
// }
