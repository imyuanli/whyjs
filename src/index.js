export * from './array'
export * from './judgment'
export * from './math'


import * as array from './array'
import * as judgment from './judgment'
import * as math from './math'


export const y = {
  ...array,
  ...judgment,
  ...math
}
