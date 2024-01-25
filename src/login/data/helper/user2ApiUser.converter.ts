import Address from '../../../user/domain/models/address'
import APIUser from '../../../user/domain/models/apiUser'
import User from '../../../user/domain/models/user'

export default function user2ApiConverter(user: User): APIUser {
  const address: Address = user.address
  const apiUser: APIUser = {
    cep: address.zipCode,
    cidade: address.city,
    estado: address.state,
    logradouro: address.addressLine1,
    complemento: address.addressLine2 ? +address.addressLine2 : undefined,
    bairro: address.neighborhood,
    nome: user.firstName,
    sobrenome: user.lastName,
    cpf: user.idNumber ? +user.idNumber : undefined,
    email: user.email,
    senha: user.password,
    sexo: user.gender,
    // eslint-disable-next-line camelcase
    dt_nascimento: user.birthDate?.getMilliseconds(),
    token: user.token,
    image: user.avatar,
  }
  return apiUser
}
