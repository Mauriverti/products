import { Card } from '@mui/material'
import { ReactNode } from 'react'
import styles from './PageWrapper.module.sass'

interface PageWrapperProps {
  children: ReactNode
}

export default function PageWrapper({ ...props }: PageWrapperProps) {
  return <Card className={styles.container}>{props.children}</Card>
}
