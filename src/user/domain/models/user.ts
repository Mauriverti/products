import Address from './address'

export default interface User {
  firstName?: string
  lastName?: string
  idNumber?: string
  email?: string
  password?: string
  gender?: string
  birthDate?: Date
  address: Address
  token?: string
  avatar?: string
}
