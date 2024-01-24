import { createContext } from 'react'

export type MessageType = 'info' | 'warn' | 'error' | 'success'

export type MessengerMessageType =
  | {
      title: string
      message: string
      type: MessageType
      callbackConfirm?: () => void
      callbackCancel?: () => void
    }
  | undefined

export interface MessengerMessage {
  sendMessage: (values: MessengerMessageType) => void
  sendInfo: (message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => void
  sendWarning: (message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => void
  sendError: (message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => void
  sendSuccess: (message: string, callbackConfirm?: () => void, callbackCancel?: () => void) => void
}

export const MessengerContext = createContext<MessengerMessage>({} as MessengerMessage)
