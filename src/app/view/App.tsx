import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/view/components/Header'
import SideNav from '../../shared/view/components/SideNav'
import styles from './App.module.sass'

export default function App() {
  const [isSideNavOpened, setIsSideNavOpened] = useState<boolean>(true)

  const toggleDrawer = () => {
    setIsSideNavOpened((oldValue) => !oldValue)
  }

  return (
    <div className={styles.container}>
      <Header onMenuClick={toggleDrawer} />
      <div>
        <SideNav isOpened={isSideNavOpened} />
        <Outlet />
      </div>
    </div>
  )
}
