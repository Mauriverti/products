import { MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material'

interface GenderFieldProps extends SelectProps {
  handleChange: (value: string) => void
}

export default function GenderSelect({ ...props }: GenderFieldProps) {
  const options = [
    {
      label: 'Feminino',
      value: 'Feminino',
    },
    {
      label: 'Masculino',
      value: 'Masculino',
    },
  ]

  const customHandleChange = (e: SelectChangeEvent<unknown>) => {
    props.handleChange(e.target.value as string)
  }

  return (
    <Select variant='outlined' onChange={customHandleChange} value={props.value} label={props.label}>
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  )
}
