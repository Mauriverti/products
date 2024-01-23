import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RouterProvider } from 'react-router-dom'
import styles from './Main.module.sass'
import { router } from './Routes'
import MessageProvider from './shared/contexts/Messenger.provider'
import ProtectedRoutesProvider from './shared/contexts/ProtectedRoutes.provider'

export default function Main() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.container}>
        <MessageProvider>
          <ProtectedRoutesProvider>
            <RouterProvider router={router} />
          </ProtectedRoutesProvider>
        </MessageProvider>
      </div>
    </LocalizationProvider>
  )
}
