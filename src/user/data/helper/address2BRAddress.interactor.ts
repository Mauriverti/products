import Address from '../../domain/models/address'
import BRAddress from '../../domain/models/brAddress'
import sanityzeZipCode from './sanitizeZipCode.interactor'

export default function address2BRAddressConverter(address: Address | undefined): BRAddress {
  let addr: BRAddress = {
    cep: sanityzeZipCode(address?.zipCode) || '',
    localidade: address?.city || '',
    uf: address?.state || '',
    logradouro: address?.addressLine1 || '',
    complemento: address?.addressLine2 || '',
    bairro: address?.neighborhood || '',
  }
  return addr
}
