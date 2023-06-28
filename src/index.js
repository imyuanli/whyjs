export * from './array'
export * from './judgment'
export * from './math'
export * from './regexp'


import * as array from './array'
import * as judgment from './judgment'
import * as math from './math'
import * as regexp from './regexp'


export const y = {
  ...array,
  ...judgment,
  ...math,
  ...regexp,
}
