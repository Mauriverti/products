import Address from '../../../user/domain/models/address'
import APIUser from '../../../user/domain/models/apiUser'
import User from '../../../user/domain/models/user'

export default function apiUser2UserInteractor(apiUser: APIUser): User {
  const address: Address = {
    zipCode: apiUser.cep,
    city: apiUser.cidade,
    state: apiUser.estado,
    addressLine1: apiUser.logradouro,
    addressLine2: `${apiUser.complemento}`,
    neighborhood: apiUser.bairro,
  }

  const user: User = {
    firstName: apiUser.nome,
    surname: apiUser.sobrenome,
    idNumber: `${apiUser.cpf}`,
    email: apiUser.email,
    password: apiUser.senha,
    gender: apiUser.sexo,
    birthDate: new Date(apiUser.dt_nascimento),
    token: apiUser.token,
    address,
  }

  return user
}
