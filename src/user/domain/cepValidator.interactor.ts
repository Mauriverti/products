export default function cpfValidator(cpf?: string): boolean {
  const allButNumberPattern = /\D/g
  return !!cpf && cpf.length === 8 && !cpf.match(allButNumberPattern)
}
