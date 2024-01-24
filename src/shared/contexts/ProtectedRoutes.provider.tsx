import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { routes } from '../../Routes'
import User from '../../user/domain/models/user'
import useLocalStorage from '../domain/useStore.hook'
import { ProtectedRoutesContext } from './ProtectedRoutes.context'

export function useProtectedRoutes() {
  return useContext(ProtectedRoutesContext)
}

const storeKey = 'user'

export default function ProtectedRoutesProvider() {
  const navigate = useNavigate()
  const {
    stored: sessionUser,
    setStored: setSessionUser,
    removeStored: removeSessionUser,
  } = useLocalStorage<User>(storeKey)

  const signOut = () => {
    removeSessionUser()
    navigate(routes.LOGIN)
  }

  const signIn = (_user: User) => {
    setSessionUser(_user)
  }

  useEffect(() => {
    if (!sessionUser) {
      signOut()
    }
  }, [])

  return (
    <ProtectedRoutesContext.Provider value={{ signIn, signOut, user: sessionUser }}>
      <Outlet />
    </ProtectedRoutesContext.Provider>
  )
}
