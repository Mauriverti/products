import { StandardTextFieldProps, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

export interface FieldProps extends StandardTextFieldProps {
  handleChange: (value: string) => void
}

export default function Field({ handleChange, ...props }: FieldProps) {
  const customHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched(true)
    handleChange(e.currentTarget.value)
  }

  const [touched, setTouched] = useState<boolean>(false)

  const error = touched && props.required && props.value === ''

  return (
    <TextField
      variant='outlined'
      onChange={customHandleChange}
      error={error}
      helperText={error ? 'Campo Obrigatório' : ''}
      {...props}
    />
  )
}
