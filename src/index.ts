const BASE62_CHARSET: string[] =
  `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``)
const BASE62_RADIX = BigInt(62)

const decode = (str: string): string => {
  let result = BigInt(0)

  for (const chr of str) {
    const index = BigInt(BASE62_CHARSET.indexOf(chr))
    result = BASE62_RADIX * result + index
  }

  return result.toString()
}

const encode = (number: string): string => {
  let result = ``
  let convertedNumber = BigInt(number)

  while (convertedNumber > 0) {
    const mod = convertedNumber % BASE62_RADIX
    result = BASE62_CHARSET[Number(mod)] + result
    convertedNumber = (convertedNumber - mod) / BASE62_RADIX
  }

  return result || `0`
}

exports.decode = decode
exports.encode = encode
