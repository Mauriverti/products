import Address from '../domain/models/address'
import brZipCodeRepository from './br-zip-code.repository'
import brAddress2AddressConverter from './helper/brAddress2Address.interactor'

export default async function brAddressGateway(zipCode: string): Promise<Address> {
  return brAddress2AddressConverter(await brZipCodeRepository(zipCode))
}
