import Field, { FieldProps } from './Field';

interface NumberFieldProps extends FieldProps { }

export default function NumberField({ handleChange, ...props }: NumberFieldProps) {
  const filterNumbers = (value: string) => {
    const allButNumberPattern: RegExp = /\D/g
    const sanitized = value.replace(allButNumberPattern, '');
    handleChange(sanitized);
  }

  return <Field handleChange={filterNumbers} { ...props } />
}
