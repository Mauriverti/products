import UserRepository from '../../data/user.repository'
import CPFValidator from '../cpf.validator'
import birthDateValidator from '../birthDate.validator'
import emailValidator from '../email.validator'
import User from '../models/user'
import AddressService from './address.service'

export default class UserService {
  static async create(user: User) {
    this.validateUser(user)
    return await UserRepository.create(user)
  }

  static validateUser(user: User) {
    if (!user.firstName) {
      throw Error('Nome do usuário é obrigatório!')
    }
    if (!user.lastName) {
      throw Error('Sobrenome do usuário é obrigatório!')
    }
    if (!CPFValidator(user.idNumber)) {
      throw Error('CPF inválido!')
    }
    if (!emailValidator(user.email)) {
      throw Error('Email inválido!')
    }
    if (!user.password) {
      throw Error('Senha é obrigatório!')
    }
    if (!birthDateValidator(user.birthDate)) {
      throw Error('Data de nascimento não pode ser depois de hoje!')
    }
    AddressService.validateAddress(user.address)
  }
}
