import { createContext } from 'react'

export type MessageType = 'info' | 'warn' | 'error' | 'success'
export type fn = () => void

export type MessengerMessageType =
  | {
      title: string
      message: string
      type: MessageType
      callbackConfirm?: fn
      callbackCancel?: fn
    }
  | undefined

export interface MessengerMessage {
  sendMessage: (values: MessengerMessageType) => void
  sendInfo: (message: string, callbackConfirm?: fn, callbackCancel?: fn) => void
  sendWarning: (message: string, callbackConfirm?: fn, callbackCancel?: fn) => void
  sendError: (message: string, callbackConfirm?: fn, callbackCancel?: fn) => void
  sendSuccess: (message: string, callbackConfirm?: fn, callbackCancel?: fn) => void
}

export const MessengerContext = createContext<MessengerMessage>({} as MessengerMessage)
