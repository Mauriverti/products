import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RouterProvider } from 'react-router-dom'
import styles from './Main.module.sass'
import { router } from './Routes'
import MessageProvider from './shared/contexts/Messenger.provider'

export default function Main() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <MessageProvider>
          <RouterProvider router={router} />
        </MessageProvider>
      </div>
    </LocalizationProvider>
  )
}
