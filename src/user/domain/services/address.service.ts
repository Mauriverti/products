import cpfValidator from '../cepValidator.interactor'
import Address from '../models/address'

export default class AddressService {
  static validateAddress(address: Address) {
    if (!cpfValidator(address.zipCode)) {
      throw Error('CEP inválido!')
    }
    if (!address.city) {
      throw Error('Cidade é obrigatório!')
    }
    if (!address.state) {
      throw Error('Estado é obrigatório!')
    }
    if (!address.addressLine1) {
      throw Error('Rua é obrigatório!')
    }
    if (!address.addressLine2) {
      throw Error('Complemento é obrigatório!')
    }
    if (!address.neighborhood) {
      throw Error('Bairro é obrigatório!')
    }
  }
}
