import React from 'react';
import styles from './MessageModal.module.sass'
import { Button } from '@mui/material';
import { MessageType } from '../../contexts/Messenger.context';

export interface MessageModalProps {
  type: MessageType,
  title?: string;
  message?: string;
  onOkAction?: () => void;
}

export default function MessageModal({type='info', ...props}: MessageModalProps) {

  let modalType;
  switch(type) {
    case 'warn':
      modalType = styles.warn
      break;
    case 'error':
      modalType = styles.error
      break;
    case 'success':
      modalType = styles.success
      break;
    default:
      modalType = styles.info
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header
          className={`${styles.header} ${modalType}`}
        >
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>
            {props.message}
          </p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onOkAction}>OK!</Button>
        </footer>
      </div>
    </div>
  )
}
