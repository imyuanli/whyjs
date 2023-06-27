const  typeVerification= (value,type) => Object.prototype.toString.call(value) === `[object ${type}]`;

//基础类型判断
export const isString = value => typeVerification(value,'String')
export const isNumber = value => typeVerification(value,'Number')
export const isBoolean = value => typeVerification(value,'Boolean')
export const isUndefined = value => typeVerification(value,'Undefined')
export const isNull = value => typeVerification(value,'Null')
export const isSymbol = value => typeVerification(value,'Symbol')
export const isObject = value => typeVerification(value,'Object')
export const isFunction = value => typeVerification(value,'Function')
export const isArray = value => typeVerification(value,'Array')


//特殊类型判断
export const isArguments = value => typeVerification(value,'Arguments')
export const isPromise = value => typeVerification(value,'Promise')
export const isSet = value => typeVerification(value,'Set')
export const isMap = value => typeVerification(value,'Map')
export const isRegExp = value => typeVerification(value,'RegExp')
export const isDate = value => typeVerification(value,'Date')
export const isError = value => typeVerification(value,'Error')
export const isMath = value => typeVerification(value,'Math')
export const isJSON = value => typeVerification(value,'JSON')
export const isGlobal = value => typeVerification(value,'global')
export const isWindow = value => typeVerification(value,'Window')
export const isDocument = value => typeVerification(value,'Document')
export const isElement = value => typeVerification(value,'Element')
export const isHTMLElement = value => typeVerification(value,'HTML')
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
