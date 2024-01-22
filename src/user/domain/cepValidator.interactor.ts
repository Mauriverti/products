export default function cpfValidator(cpf?: string): boolean {
  const allButNumberPattern: RegExp = /\D/g
  return !!cpf && cpf.length === 8 && !cpf.match(allButNumberPattern)
}
