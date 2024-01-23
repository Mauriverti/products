import { Button, Card } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../Routes'
import User from '../../domain/models/user'
import { defaultAddressValues } from '../components/AddressForm'
import UserForm from '../components/UserForm'
import styles from './UserCreate.module.sass'
import UserService from '../../domain/services/user.service'
import { MessengerContext } from '../../../shared/contexts/Messenger.context'

export default function UserCreate() {
  const defaultUserValue: User = {
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    password: '',
    gender: 'Feminino',
    birthDate: new Date(),
    address: defaultAddressValues,
  }

  const [user, setUser] = useState<User>(defaultUserValue)

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(routes.LOGIN)
  }

  const { sendError, sendSuccess } = useContext(MessengerContext)

  const handleData = async (_user: User) => {
    try {
      await UserService.create(_user)
      sendSuccess('Usuário criado com sucesso!')
    } catch (e) {
      sendError(`${e}`)
    }
  }

  return (
    <Card className={styles.container}>
      <h2>Criar Usuário</h2>
      <UserForm handleChange={setUser} value={user} />
      <div className={styles.spacer}>
        <Button variant='contained' onClick={handleGoBack}>
          Voltar
        </Button>
        <Button variant='contained' onClick={() => handleData(user)}>
          Criar Usuário
        </Button>
      </div>
    </Card>
  )
}
