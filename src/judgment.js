//获取数据类型
export const typeOf = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase()

//基础类型判断
export const isString = value => typeOf(value) === 'string'
export const isNumber = value => typeOf(value) === 'number'
export const isBoolean = value => typeOf(value) === 'boolean'
export const isUndefined = value => typeOf(value) === 'undefined'
export const isNull = value => typeOf(value) === 'null'
export const isSymbol = value => typeOf(value) === 'symbol'
export const isObject = value => typeOf(value) === 'object'
export const isFunction = value => typeOf(value) === 'function'
export const isArray = value => typeOf(value) === 'array'

//特殊类型判断
export const isArguments = value => typeOf(value) === 'arguments'
export const isPromise = value => typeOf(value) === 'promise'
export const isSet = value => typeOf(value) === 'set'
export const isMap = value => typeOf(value) === 'map'
export const isRegExp = value => typeOf(value) === 'regexp'
export const isDate = value => typeOf(value) === 'date'
export const isError = value => typeOf(value) === 'error'
export const isMath = value => typeOf(value) === 'math'
export const isJSON = value => typeOf(value) === 'json'
export const isGlobal = value => typeOf(value) === 'global'
export const isWindow = value => typeOf(value) === 'window'
export const isDocument = value => typeOf(value) === 'document'
export const isElement = value => typeOf(value) === 'element'
export const isHTMLElement = value => typeOf(value) === 'htmlelement'
export const isEmpty = value => {
  if (isString(value) || isArray(value)) {
    return value.length === 0
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }
  return false
}
export const isNaN = value => {
  if (isNumber(value)) {
    return value !== value
  }
  return false
}
export const isInteger = value => {
  if (isNumber(value)) {
    return value % 1 === 0
  }
  return false
}
export const isFloat = value => {
  if (isNumber(value)) {
    return value % 1 !== 0
  }
  return false
}

//其他的判断
export const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0