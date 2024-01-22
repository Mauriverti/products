import { Button, Card } from '@mui/material';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../Routes';
import { MessengerContext } from '../../../shared/contexts/Messenger.context';
import FieldInteractor from '../../../shared/domain/field.interactor';
import Field from '../../../shared/view/components/Field';
import PasswordField from '../../../shared/view/components/PasswordField';
import iLogin from '../../domain/models/Login';
import LoginService from '../../domain/services/Login.service';
import styles from './Login.module.sass';

export default function Login() {
  const navigate = useNavigate();

  const defaultValues: iLogin = {
    email: '',
    password: '',
  }

  const [data, setData] = useState<iLogin>(defaultValues);

  const { sendError } = useContext(MessengerContext)

  const handleCreateUser = () => {
    return navigate(routes.USER_CREATE)
  }

  const handleLogin = async () => {
    try {
      await LoginService.doLogin(data);
    } catch(e: unknown) {
      sendError(`${e}`)
    }
  }

  const useFakeCredentials = () => {
    const fakeUser: iLogin = {
      email: 'Ola92@gmail.com',
      password: 'nFRb2uF4jGqRC6y'
    }
    LoginService.doLogin(fakeUser);
  }

  return (
    <div className={styles.container}>
      <Card className={styles.login}>
        <Field handleChange={(v) => FieldInteractor.toState(setData, 'email', v)} label='Email' />
        <PasswordField label='Senha' handleChange={(v) => FieldInteractor.toState(setData, 'password', v)} />
        <Button variant='contained' onClick={handleLogin}>Login</Button>
        <Button variant='contained' onClick={handleCreateUser}>Criar Usuário</Button>
        <Button onClick={useFakeCredentials}>Use Fake Credentials</Button>
      </Card>
    </div>
  )
}
