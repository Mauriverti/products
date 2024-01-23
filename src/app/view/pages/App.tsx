import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { routes } from '../../../Routes'
import { useProtectedRoutes } from '../../../shared/contexts/ProtectedRoutes.provider'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import styles from './App.module.sass'

export default function App() {
  const { signOut, getUser } = useProtectedRoutes()
  const navigate = useNavigate()
  const [isSideNavOpened, setIsSideNavOpened] = useState<boolean>(true)

  const toLogin = () => {
    navigate(routes.LOGIN)
  }

  // console.log('user?', getUser())
  if (!getUser()) {
    toLogin()
  }

  const onSignOut = () => {
    signOut()
    toLogin()
  }

  const toggleDrawer = () => {
    setIsSideNavOpened((oldValue) => !oldValue)
  }

  return (
    <div className={styles.container}>
      <Header onLogoutClick={onSignOut} onMenuClick={toggleDrawer} />
      <div>
        <SideNav isOpened={isSideNavOpened} />
        <Outlet />
      </div>
    </div>
  )
}
