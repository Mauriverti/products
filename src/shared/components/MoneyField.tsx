import { InputAdornment, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import numberValidator from '../domain/number.validator'

interface MoneyFieldProps extends OutlinedInputProps {
  handleChange: (num: string) => void
}

export default function MoneyField(props: MoneyFieldProps) {
  const [touched, setTouched] = useState<boolean>(false)

  const error = touched && !numberValidator(`${props.value}`) //|| (touched && props.required && props.value === '')
  console.log('error', error)
  console.log('touched', touched)
  console.log('required', props.required && props.value === '')
  console.log('!validator', props.value, !numberValidator(`${props.value}`))

  const customHandleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTouched(true)
    props.handleChange(event.currentTarget.value)
  }

  return (
    <OutlinedInput
      {...props}
      type='number'
      inputProps={{ min: 0 }}
      startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
      error={error}
      onChange={customHandleChange}
    />
  )
}
