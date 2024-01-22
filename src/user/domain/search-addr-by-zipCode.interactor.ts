import brAddressGateway from '../data/br-address.gateway';
import Address from './models/address';

export default async function searchAddrByZipCode(zipCode: string): Promise<Address> {
  return brAddressGateway(zipCode);
}
