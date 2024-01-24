import Field from '../../../shared/components/Field'
import NumberField from '../../../shared/components/NumberField'
import Address from '../../domain/models/address'
import searchAddrByZipCode from '../../domain/search-addr-by-zipCode.interactor'
import styles from './UserForm.module.sass'

interface AddressFormProps {
  handleChange: (value: Address) => void
  value: Address
  validate?: () => void
}

export const defaultAddressValues: Address = {
  zipCode: '',
  city: '',
  state: '',
  addressLine1: '',
  addressLine2: '',
  neighborhood: '',
}

export default function AddressForm({ ...props }: AddressFormProps) {
  const handleChange = (field: keyof Address, value: unknown) => {
    const newValue: Address = {
      ...props.value,
      [field]: value,
    }
    props.handleChange(newValue)
  }

  const handleZipCode = async (zipCode: string) => {
    const brazilianZipCodeLength = 8

    let newData: Address = {}

    if (zipCode.length === brazilianZipCodeLength) {
      const addr = await searchAddrByZipCode(zipCode)
      newData = {
        ...props.value,
        ...addr,
        zipCode,
      }
    } else {
      newData = {
        ...props.value,
        zipCode,
      }
    }
    props.handleChange(newData)
  }

  return (
    <div className={styles.fieldLine}>
      <NumberField
        label='CEP'
        inputProps={{ maxLength: 8 }}
        value={props.value.zipCode}
        handleChange={handleZipCode}
        required
      />
      <Field label='Cidade' value={props.value.city} handleChange={(v) => handleChange('city', v)} required />
      <Field label='Estado' value={props.value.state} handleChange={(v) => handleChange('state', v)} required />
      <Field
        label='Rua'
        value={props.value.addressLine1}
        handleChange={(v) => handleChange('addressLine1', v)}
        required
      />
      <Field
        label='Complemento'
        value={props.value.addressLine2}
        handleChange={(v) => handleChange('addressLine2', v)}
        required
      />
      <Field
        label='Bairro'
        value={props.value.neighborhood}
        handleChange={(v) => handleChange('neighborhood', v)}
        required
      />
    </div>
  )
}
