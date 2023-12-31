export const isEmail = (str) => /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(str)
export const isPhone = (str) => /^1[3456789]\d{9}$/.test(str)
export const isIdCard = (str) => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
export const isUrl = (str) => /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/.test(str)
export const isChinese = (str) => /^[\u4e00-\u9fa5]+$/.test(str)
export const isEnglish = (str) => /^[a-zA-Z]+$/.test(str)
export const isLowerCase = (str) => /^[a-z]+$/.test(str)
export const isUpperCase = (str) => /^[A-Z]+$/.test(str)
export const isHTML = (str) => /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
export const isColor = (str) => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str)
export const specialConv = (str, character) => str.replace(/[^a-zA-Z0-9]/g, character)