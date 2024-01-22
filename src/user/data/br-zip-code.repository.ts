import BRAddress from '../domain/models/brAddress'
import axios from 'axios'

interface BRZipCodeAPIError {
  erro: string
}

export default async function brZipCodeRepository(zipCode: string): Promise<BRAddress | undefined> {
  const api = `https://viacep.com.br/ws/${zipCode}/json`
  let response: BRAddress | BRZipCodeAPIError
  try {
    response = (await axios.get<BRAddress | BRZipCodeAPIError>(api)).data
  } catch {
    return undefined
  }

  if ('erro' in response) {
    return undefined
  }
  return response
}
