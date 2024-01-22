import Address from '../../domain/models/address'
import BRAddress from '../../domain/models/brAddress'
import sanityzeZipCode from './sanitizeZipCode.interactor'

export default function brAddress2AddressConverter(address: BRAddress | undefined): Address {
  let addr: Address = {
    zipCode: sanityzeZipCode(address?.cep) || '',
    city: address?.localidade || '',
    state: address?.uf || '',
    addressLine1: address?.logradouro || '',
    addressLine2: address?.complemento || '',
    neighborhood: address?.bairro || ''
  }
  return addr
}
