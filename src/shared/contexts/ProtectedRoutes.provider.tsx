import { ReactNode, useContext, useState } from 'react'
import User from '../../user/domain/models/user'
import { ProtectedRoutesContext } from './ProtectedRoutes.context'

interface ProtectedRoutesProviderProps {
  children: ReactNode
}

export function useProtectedRoutes() {
  return useContext(ProtectedRoutesContext)
}

export default function ProtectedRoutesProvider({ ...props }: ProtectedRoutesProviderProps) {
  const [user, setUser] = useState<User>()

  const signIn = (_user: User) => {
    setUser(_user)
  }

  const signOut = () => {
    setUser(undefined)
  }

  const getUser = () => {
    return user
  }

  return (
    <ProtectedRoutesContext.Provider value={{ signIn, signOut, getUser }}>
      {props.children}
    </ProtectedRoutesContext.Provider>
  )
}
