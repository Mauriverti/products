import CPFField from '../../../shared/view/components/CPFField'
import DatePickerField from '../../../shared/view/components/DatePickerField'
import EmailField from '../../../shared/view/components/EmailField'
import Field from '../../../shared/view/components/Field'
import GenderSelect from '../../../shared/view/components/GenderSelect'
import PasswordField from '../../../shared/view/components/PasswordField'
import User from '../../domain/models/user'
import AddressForm from './AddressForm'
import styles from './UserForm.module.sass'

interface UserFormProps {
  handleChange: (value: User) => void
  value: User
}

export default function UserForm({ ...props }: UserFormProps) {
  const handleChange = (field: keyof User, value: unknown) => {
    const newValue: User = {
      ...props.value,
      [field]: value,
    }
    props.handleChange(newValue)
  }

  return (
    <>
      <div className={styles.fieldLine}>
        <Field label='Nome' value={props.value.firstName} handleChange={(v) => handleChange('firstName', v)} required />
        <Field
          label='Sobrenome'
          value={props.value.surname}
          handleChange={(v) => handleChange('surname', v)}
          required
        />
        <CPFField label='CPF' value={props.value.idNumber} handleChange={(v) => handleChange('idNumber', v)} required />
        <EmailField label='Email' value={props.value.email} handleChange={(v) => handleChange('email', v)} required />
      </div>
      <div className={styles.fieldLine}>
        <PasswordField
          label='Senha'
          value={props.value.password}
          handleChange={(v) => handleChange('password', v)}
          required
        />
        <GenderSelect label='Sexo' value={props.value.gender} handleChange={(v) => handleChange('gender', v)} />
        <DatePickerField value={props.value.birthDate} handleChange={(v) => handleChange('birthDate', v)} />
      </div>
      <AddressForm handleChange={(v) => handleChange('address', v)} value={props.value.address} />
    </>
  )
}
