import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

interface DatePickerFieldProps /*extends DatePickerComponent*/ {
  value?: Date
  handleChange: (value?: Date) => void
}

export default function DatePickerField({ ...props }: DatePickerFieldProps) {
  const customHandleChange = (value: dayjs.Dayjs | null) => {
    const date = value ? new Date(value.toISOString()) : undefined
    props.handleChange(date)
  }

  return <DatePicker {...props} label='Nascimento' value={dayjs(props.value)} onChange={customHandleChange} />
}
