import Address from './address';

export default interface User {
  firstName: string;
  surname: string;
  idNumber: string;
  email: string;
  password: string;
  gender: string;
  birthDate?: Date;
  address: Address;
  token?: string;
}
