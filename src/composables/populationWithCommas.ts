export function getStringWithCommasFromNumber(num: number): string {
  return `${num}`.split('').reverse().map((item, index) => {
    if (index%3 === 2) {
      return `,${item}`
    }
    return item
  }).reverse().join('')
}