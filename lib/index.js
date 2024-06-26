const PromiseAll = (promiseArr) => {
  if (promiseArr.length == 0) {
    return;
  }
  return new Promise((resolve, reject) => {
    let resArr = [];
    let count = 0;
    let settledCount = 0;
    for (const prom of promiseArr) {
      let i = count;
      count++;
      if (prom instanceof Promise) {
        Promise.resolve(prom).then((res) => {
          settledCount++;
          resArr[i] = res;
          if (settledCount === promiseArr.length) {
            console.log("\u5168\u90E8\u5B8C\u6210");
            resolve(resArr);
          }
        }).catch((err) => reject(err));
      }
    }
  });
};

const promiseAllSettled = (promArr) => {
  if (promArr.length == 0) {
    return;
  }
  return new Promise((resolve, reject) => {
    let count = 0;
    let settledCount = 0;
    const resArr = [];
    for (const prom of promArr) {
      const i = count;
      count++;
      Promise.resolve(prom).then(
        (res) => {
          settledCount++;
          console.log(i);
          resArr[i] = {
            value: res,
            status: "fulfilled"
          };
        },
        (err) => {
          settledCount++;
          resArr[i] = {
            value: err,
            status: "rejected"
          };
        }
      ).finally(() => {
        if (settledCount == promArr.length) {
          console.log("\u5168\u90E8\u5B8C\u6210");
          resolve(resArr);
        }
      });
    }
  });
};

const promiseRace = (promiseArr) => {
  if (promiseArr.length == 0) {
    return;
  }
  return new Promise((resolve, reject) => {
    for (const prom of promiseArr) {
      Promise.resolve(prom).then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

const promiseResolve = (promise) => {
  if (promise instanceof Promise) {
    return promise;
  }
  return new Promise((resolve, reject) => {
    promise.then(
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const FailedStatus = "failed";
const PendingStatus = "pending";
const SuccessStatus = "resolved";
class MyPromise {
  constructor(callback) {
    __publicField$1(this, "status");
    __publicField$1(this, "result");
    __publicField$1(this, "reason");
    __publicField$1(this, "onFailedFun");
    __publicField$1(this, "onSuccessFun");
    this.status = "pending";
    this.result = null;
    this.reason = null;
    this.onSuccessFun = [];
    this.onFailedFun = [];
    try {
      callback(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject.call(this, error);
    }
  }
  resolve(res) {
    if (this.status == PendingStatus) {
      this.status = SuccessStatus;
      this.result = res;
      while (this.onSuccessFun.length) {
        this.onSuccessFun.shift()(res);
      }
    }
  }
  reject(reason) {
    if (this.status == PendingStatus) {
      this.status = FailedStatus;
      this.result = reason;
      while (this.onFailedFun.length) {
        this.onFailedFun.shift()(reason);
      }
    }
  }
  then(resolveCallback, failedCallback) {
    resolveCallback = typeof resolveCallback === "function" ? resolveCallback : (value) => value;
    failedCallback = typeof failedCallback === "function" ? failedCallback : (reason) => reason;
    let promise2 = new MyPromise((resolve2, reject2) => {
      if (this.status === PendingStatus) {
        this.onSuccessFun.push(() => {
          queueMicrotask(() => {
            try {
              let x = resolveCallback(this.result);
              resolvePromise(x, promise2, resolve2, reject2);
            } catch (error) {
              reject2(error);
            }
          });
        });
        this.onFailedFun.push(() => {
          queueMicrotask(() => {
            try {
              let x = failedCallback && failedCallback(this.result);
              resolvePromise(x, promise2, resolve2, reject2);
            } catch (error) {
              reject2(error);
            }
          });
        });
      }
      if (this.status === SuccessStatus) {
        queueMicrotask(() => {
          try {
            let x = resolveCallback(this.result);
            resolvePromise(x, promise2, resolve2, reject2);
          } catch (error) {
            reject2(error);
          }
        });
      }
      if (this.status === FailedStatus) {
        queueMicrotask(() => {
          try {
            let x = failedCallback && failedCallback(this.result);
            resolvePromise(x, promise2, resolve2, reject2);
          } catch (error) {
            reject2(error);
          }
        });
      }
    });
    return promise2;
  }
  static resolve(res) {
    if (res instanceof MyPromise) {
      return res;
    }
    return new MyPromise((resolve2, reject2) => {
      resolve2(res);
    });
  }
  static reject(reason) {
    return new MyPromise((resolve2, reject2) => {
      reject2(reason);
    });
  }
  static all(promiseArr) {
    return PromiseAll(promiseArr);
  }
  static allSettled(promiseArr) {
    return promiseAllSettled(promiseArr);
  }
  static race(promiseArr) {
    return promiseRace(promiseArr);
  }
  static resolveFn(promise2) {
    return promiseResolve(promise2);
  }
}
function resolvePromise(x, promise2, resolve2, reject2) {
  if (x === promise2) {
    return reject2(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  if (typeof x === "object" || typeof x === "function") {
    if (x === null) {
      return resolve2(x);
    }
    let then;
    try {
      then = x.then;
    } catch (error) {
      return reject2(error);
    }
    if (typeof then === "function") {
      let called = false;
      try {
        then.call(
          x,
          // this 指向 x
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          (y) => {
            if (called)
              return;
            called = true;
            resolvePromise(promise2, y, resolve2, reject2);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          (r) => {
            if (called)
              return;
            called = true;
            reject2(r);
          }
        );
      } catch (error) {
        if (called)
          return;
        reject2(error);
      }
    } else {
      resolve2(x);
    }
  } else {
    resolve2(x);
  }
}

const catchFn = () => {
  const test = new Promise((res, rej) => {
    throw new Error("123");
  });
  Promise.prototype.catch = function(fn) {
    return this.then(
      () => {
      },
      (err) => {
        fn(err);
      }
    );
  };
  test.catch((err) => {
    console.log(err.message);
  });
};

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const LazyMan = () => {
  class LazyMan2 {
    constructor(name) {
      __publicField(this, "name");
      __publicField(this, "queue");
      __publicField(this, "sleepTime");
      this.name = name;
      this.queue = [];
      this.sleepTime = 0;
      this.queue.push(() => {
        this.sayHi(name);
      });
      setTimeout(() => {
        this.next();
      });
    }
    next() {
      console.log(this.sleepTime);
      if (this.sleepTime) {
        Promise.resolve(
          setTimeout(() => {
            console.log("Wake up after");
          }, this.sleepTime)
        ).then(() => {
          this.sleepTime = 0;
          const task2 = this.queue.shift();
          task2 && task2();
        });
      }
      const task = this.queue.shift();
      task && task();
    }
    sayHi(name) {
      this.queue.push(console.log(name));
    }
    sleep(time) {
      this.queue.push(() => {
        setTimeout(() => {
          console.log("Wake up after");
          this.next();
        }, time * 1e3);
      });
      return this;
    }
    eat(food) {
      this.queue.push(() => {
        console.log(`Eat ${food}~`);
      });
      this.next();
      return this;
    }
    sleepFirst(time) {
      this.queue.unshift(() => {
        this.sleepTime = time * 1e3;
      });
      return this;
    }
  }
  new LazyMan2("Hank").sleepFirst(100).eat("dinner");
};

async function main() {
  const test = [
    new Promise((resolve, reject) => {
      resolve("test");
    }),
    new Promise((resolve, reject) => {
      reject("test");
    }),
    1
  ];
  console.log("------------ all ----------------");
  await MyPromise.all(test)?.then(
    (res) => {
      console.log(res);
    },
    () => {
      console.log(123);
    }
  );
  console.log("------------ allSettled ----------------");
  await MyPromise.allSettled(test)?.then(
    (res) => {
      console.log(res);
    },
    () => {
      console.log("allSettled:fail");
    }
  );
  console.log("------------ race ----------------");
  await MyPromise.race(test)?.then(
    (res) => {
      console.log(res);
    },
    () => {
      console.log("allSettled:fail");
    }
  );
  console.log("------------ catch ----------------");
  catchFn();
  console.log("------------ resolve ----------------");
  await MyPromise.resolveFn(test)?.then(
    (res) => {
      console.log(res);
    },
    () => {
      console.log("allSettled:fail");
    }
  );
  LazyMan();
}

export { main };
