import { createContext } from 'react'

export type MessageType = 'info' | 'warn' | 'error' | 'success'

export type MessengerMessageType = {
  title: string
  message: string
  type: MessageType
} | undefined


export interface MessengerMessage {
  sendMessage: (values: MessengerMessageType) => void
  sendInfo: (message: string) => void
  sendWarning: (message: string) => void
  sendError: (message: string) => void
  sendSuccess: (message: string) => void
}

export const MessengerContext = createContext<MessengerMessage>({} as MessengerMessage)
