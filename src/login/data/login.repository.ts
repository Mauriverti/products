import axios from 'axios'
import iLogin from '../domain/models/Login'
import APIUser from '../../user/domain/models/apiUser'

export default class LoginRepository {
  static async login(login: iLogin): Promise<APIUser[]> {
    const api = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/user'

    let response: APIUser[]
    try {
      response = (await axios.get(`${api}?email=${login.email}`)).data
      return response
    } catch (e: any) {
      throw Error('Email ou senha incorretos!')
    }
  }
}
