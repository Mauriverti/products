import { useState } from 'react'
import Field, { FieldProps } from './Field'
import emailValidator from '../../user/domain/email.validator'

interface EmailFieldProps extends FieldProps {}

export default function EmailField({ ...props }: EmailFieldProps) {
  const [invalid, setInvalid] = useState<string>('')

  const customHandleChange = (value: string) => {
    if (!emailValidator(value)) {
      setInvalid('Email Inválido')
    } else {
      setInvalid('')
    }
    props.handleChange(value)
  }

  return <Field {...props} error={invalid !== '' && !!invalid} helperText={invalid} handleChange={customHandleChange} />
}
