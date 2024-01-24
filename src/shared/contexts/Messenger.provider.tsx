import { ReactNode, useContext, useState } from 'react'
import MessageModal from '../view/components/MessageModal'
import { MessengerContext, MessengerMessageType } from './Messenger.context'

interface MessageProviderProps {
  children: ReactNode
}

export function useMessenger() {
  return useContext(MessengerContext)
}

export default function MessageProvider({ ...props }: MessageProviderProps) {
  const [message, setMessage] = useState<MessengerMessageType>()

  const closeDialog = () => {
    setMessage(undefined)
  }

  const onOkAction = () => {
    closeDialog()
    if (message && message.callbackConfirm) {
      message?.callbackConfirm()
    }
  }

  const onCancelAction = () => {
    closeDialog()
    if (message && message.callbackCancel) {
      message?.callbackCancel()
    }
  }

  const sendMessage = ({ ...values }: MessengerMessageType) => {
    setMessage(values)
  }

  const sendInfo = (_message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => {
    const infoMessage: MessengerMessageType = {
      type: 'info',
      message: _message,
      title: 'Info',
      callbackConfirm,
      callbackCancel,
    }
    sendMessage(infoMessage)
  }

  const sendWarning = (_message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => {
    const warningMessage: MessengerMessageType = {
      type: 'warn',
      message: _message,
      title: 'Aviso',
      callbackConfirm,
      callbackCancel,
    }
    sendMessage(warningMessage)
  }

  const sendError = (_message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => {
    const errorMessage: MessengerMessageType = {
      type: 'error',
      message: _message,
      title: 'Erro',
      callbackConfirm,
      callbackCancel,
    }
    sendMessage(errorMessage)
  }

  const sendSuccess = (_message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => {
    const errorMessage: MessengerMessageType = {
      type: 'success',
      message: _message,
      title: 'Sucesso!',
      callbackConfirm,
      callbackCancel,
    }
    sendMessage(errorMessage)
  }

  return (
    <MessengerContext.Provider value={{ sendMessage, sendError, sendInfo, sendWarning, sendSuccess }}>
      {message && (
        <MessageModal
          type={message.type}
          title={message?.title}
          message={message?.message}
          onOkAction={onOkAction}
          onCancelAction={onCancelAction}
        />
      )}
      {props.children}
    </MessengerContext.Provider>
  )
}
