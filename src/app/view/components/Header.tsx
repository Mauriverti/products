import { Avatar, IconButton, Tooltip } from '@mui/material'
import styles from './Header.module.sass'
import MenuIcon from '@mui/icons-material/Menu'
import PowerIcon from '@mui/icons-material/PowerSettingsNew'
import { useProtectedRoutes } from '../../../shared/contexts/ProtectedRoutes.provider'

export interface HeaderProps {
  onMenuClick: () => void
  onLogoutClick: () => void
}

export default function Header({ ...props }: HeaderProps) {
  const { getUser } = useProtectedRoutes()

  const fullName = `${getUser()?.firstName} ${getUser()?.lastName}`

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <IconButton aria-label='Menu' className={styles.icon} onClick={props.onMenuClick}>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={styles.container}>
        <Avatar alt={fullName} src={getUser()?.avatar} />
        <span>{fullName}</span>
        <Tooltip title='Sair'>
          <IconButton aria-label='Sair' className={styles.icon} onClick={props.onLogoutClick}>
            <PowerIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
