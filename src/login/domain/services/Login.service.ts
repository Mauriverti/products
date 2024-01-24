import { useNavigate } from 'react-router-dom'
import { routes } from '../../../Routes'
import emailValidator from '../../../user/domain/email.validator'
import User from '../../../user/domain/models/user'
import loginGateway from '../../data/login.gateway'
import iLogin from '../models/Login'

export default class LoginService {
  static toApp() {
    const navigate = useNavigate()
    navigate(routes.APP)
  }

  static async doLogin(login: iLogin) {
    this.validateUser(login)
    const user = await loginGateway(login)
    this.checkCredentials(login, user)
    return user
  }

  static checkCredentials(login: iLogin, user: User) {
    if (login.email === user.email && login.password === user.password) {
      return true
    }
    throw Error('Usuário ou senha inválidos!')
  }

  static validateUser(login: iLogin) {
    if (!emailValidator(login.email)) {
      throw Error('Email inválido!')
    }
    if (!login.password) {
      throw Error('Senha é obrigatório!')
    }
  }
}
