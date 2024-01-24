export default function birthDateValidator(date?: Date): boolean {
  if (!date) return false
  const now = new Date()
  if (date > now) return false
  return true
}
