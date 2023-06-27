import {isArray} from "./judgment";

export const percentage = (a, b, precision) => (a / b * 100).toFixed(precision)
export const avg = (array) => {
  if (!isArray(array)) return NaN;
  const length = array.length;
  return length > 0 ? array.reduce((a, b) => a + b) / length : NaN
}