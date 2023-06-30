import {isFunction} from "./judgment";

export const after = (times, func) => {
  if (!isFunction(func)) throw new TypeError('Expected a function')
  return function (...args) {
    if (--times < 1) func(...args)
  }
}
export const before = (times, func) => {
  if (!isFunction(func)) throw new TypeError('Expected a function')
  return function (...args) {
    if (times-- > 1) func(...args)
  }
}
export const debounce = (func, wait = 0) => {
  if (!isFunction(func)) throw new TypeError('Expected a function')
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.call(this);
    }, wait)
  }
}
export const throttle = (func, wait = 0) => {
  if (!isFunction(func)) throw new TypeError('Expected a function')
  let preTime = 0, timer = null;
  return function () {
    let nowTime = +new Date();
    let remaining = wait - (nowTime - preTime);
    if (remaining <= 0) {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      preTime = nowTime;
      func.call(this);
    } else if (!timer) {
      timer = setTimeout(() => {
        preTime = +new Date();
        timer = null;
        func.call(this);
      }, remaining)
    }
  }
}
