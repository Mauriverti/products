export default function emailValidator(email: string): boolean {
  if (!email) return false
  const emailPatter = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  return !!email.match(emailPatter)
}
