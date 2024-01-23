import { createContext } from 'react'
import User from '../../user/domain/models/user'

export interface ProtectedRoutesMethods {
  signIn: (user: User) => void
  signOut: () => void
  getUser: () => User | undefined
}

export const ProtectedRoutesContext = createContext<ProtectedRoutesMethods>({} as ProtectedRoutesMethods)
