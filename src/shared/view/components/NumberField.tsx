import Field, { FieldProps } from './Field'

export default function NumberField({ handleChange, ...props }: FieldProps) {
  const filterNumbers = (value: string) => {
    const allButNumberPattern = /\D/g
    const sanitized = value.replace(allButNumberPattern, '')
    handleChange(sanitized)
  }

  return <Field handleChange={filterNumbers} {...props} />
}
