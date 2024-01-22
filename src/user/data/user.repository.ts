import axios from 'axios'
import User from '../domain/models/user'

export default class UserRepository {
  static async create(user: User) {
    const api = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/user'
    try {
      await axios.post(api, user)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      const message = e?.response?.data || 'Erro ao criar usuário'
      throw Error(message)
    }
  }
}
