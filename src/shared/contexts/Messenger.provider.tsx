import React, { useContext, useState } from 'react';
import MessageModal from '../view/components/MessageModal';
import { MessengerContext, MessengerMessageType } from './Messenger.context';

interface MessageProviderProps {
  children: React.ReactNode
}

export function useMessenger() {
  return useContext(MessengerContext);
}

export default function MessageProvider({ ...props }: MessageProviderProps) {

  const [message, setMessage] = useState<MessengerMessageType>();
  const callBackError = () => setMessage(undefined)

  const sendMessage = ({...values}: MessengerMessageType) => {
    setMessage(values);
  }

  const sendInfo = (message: string) => {
    const infoMessage: MessengerMessageType = {
      type: 'info',
      message,
      title: 'Info'
    }
    sendMessage(infoMessage);
  }

  const sendWarning = (message: string) => {
    const warningMessage: MessengerMessageType = {
      type: 'warn',
      message,
      title: 'Aviso'
    }
    sendMessage(warningMessage);
  }

  const sendError = (message: string) => {
    const errorMessage: MessengerMessageType = {
      type: 'error',
      message,
      title: 'Erro'
    }
    sendMessage(errorMessage);
  }

  const sendSuccess = (message: string) => {
    const errorMessage: MessengerMessageType = {
      type: 'success',
      message,
      title: 'Sucesso!'
    }
    sendMessage(errorMessage);
  }

  return (
    <MessengerContext.Provider value={{sendMessage, sendError, sendInfo, sendWarning, sendSuccess}}>
      {message && <MessageModal type={message.type} title={message?.title} message={message?.message} onOkAction={callBackError} />}
      {props.children}
    </MessengerContext.Provider>
  )
}
