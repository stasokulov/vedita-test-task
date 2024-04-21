export function getStringWithCommasFromNumber(num: number): string {
  return `${num}`
    .split('')
    .reverse()
    .map((item, index) => {
      if (index % 3 === 0 && index !== 0) {
        return `${item},`
      }
      return item
    })
    .reverse()
    .join('')
}
