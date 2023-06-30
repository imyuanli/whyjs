export * from './array'
export * from './judgment'
export * from './math'
export * from './regexp'
export * from './func'


import * as array from './array'
import * as judgment from './judgment'
import * as math from './math'
import * as regexp from './regexp'
import * as func from './func'


const y = {
  ...array,
  ...judgment,
  ...math,
  ...regexp,
  ...func,
}

export default y
