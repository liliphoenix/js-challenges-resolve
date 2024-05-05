export type promise = (
  resolve: (res: any) => void,
  reject: (reason: any) => void
) => void

export type resolve = (res: any) => void
export type reject = (reason: any) => void
