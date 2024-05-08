export const proxyArr = (arr: any) => {
  return new Proxy(arr, {
    get(target: any, propKey: any, receiver: any) {
      if (propKey < 0) {
        return target[target.length - Math.abs(propKey)]
      }
      return target[propKey]
    }
  })
}
