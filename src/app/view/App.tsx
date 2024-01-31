import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/components/Header'
import SideNav from '../../shared/components/SideNav'
import styles from './App.module.sass'

export default function App() {
  const [isSideNavOpened, setIsSideNavOpened] = useState<boolean>(true)

  const toggleDrawer = () => {
    setIsSideNavOpened((oldValue) => !oldValue)
  }

  return (
    <div className={styles.container}>
      <Header onMenuClick={toggleDrawer} />
      <div className={styles.row}>
        <SideNav isOpened={isSideNavOpened} />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
