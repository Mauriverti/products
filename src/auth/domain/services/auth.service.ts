import User from '../../../user/domain/models/user';

export default class AuthService {
  static signIn(user: User) {
    console.log('logado', user)
  }
}
