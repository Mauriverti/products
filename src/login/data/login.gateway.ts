import APIUser from '../../user/domain/models/apiUser';
import iLogin from '../domain/models/Login';
import apiUser2UserInteractor from './helper/apiUser2user.interactor';
import LoginRepository from './login.repository';

export default async function loginGateway(login: iLogin) {
  const user: APIUser = (await LoginRepository.login(login))[0];
  return apiUser2UserInteractor(user);
}
