import {isArray} from "./judgment";

export const chunk = (array, size = 1) => {
  if (!isArray(array)) return [];
  const length = array.length;
  const result = [];
  let index = 0;
  while (index < length) {
    result.push(array.slice(index, index += size))
  }
  return result;
}
export const compact = array => isArray(array) ? array.filter(Boolean) : []
export const concat = (array, ...values) => isArray(array) ? [...array, ...values] : []
export const pull = (array, ...values) => {
  if (!isArray(array)) return [];
  for (let i = 0; i < array.length; i++) {
    if (values.includes(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
}
export const without = (array, ...values) => isArray(array) ? array.filter(item => !values.includes(item)) : []
export const uniq = array => isArray(array) ? [...new Set(array)] : []