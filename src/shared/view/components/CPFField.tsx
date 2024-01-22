import { useState } from 'react'
import Field, { FieldProps } from './Field'
import CPFValidator from '../../../user/domain/CPFValidator.interactor'

interface CPFFieldProps extends FieldProps { }

export default function CPFField({ ...props }: CPFFieldProps) {

  const [invalid, setInvalid] = useState<string>('')

  const customHandleChange = (value: string) => {
    const cpfValid = CPFValidator(value)
    if (!cpfValid) {
      setInvalid('CPF Inválido')
    } else {
      setInvalid('')
    }
    props.handleChange(value)
  }

  return (
    <Field
      { ...props }
      error={invalid !== '' && !!invalid}
      helperText={invalid}
      inputProps={{ maxLength: 11 }}
      handleChange={customHandleChange}
    />
  )
}
