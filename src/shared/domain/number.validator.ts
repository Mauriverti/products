export default function numberValidator(number: string = ''): boolean {
  const justNumberPattern = /(([0-9]*))(\.?)[0-9]+/g
  return justNumberPattern.test(number)
}
