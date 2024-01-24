import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Avatar, CircularProgress, IconButton, Tooltip, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'
import { useMessenger } from '../../shared/contexts/Messenger.provider'
import PageWrapper from '../../shared/view/components/PageWrapper'
import useProductAPI from '../data/useProductAPI.hook'
import styles from './ProductView.module.sass'

const formatCurrency = (value?: string) => {
  if (!value) return ''
  const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  return formatter.format(+value)
}

const dateFormatter = (value?: Date) => {
  if (!value) return ''
  return dayjs(value).format('DD/MM/YYYY HH:mm')
}

export default function ProductView() {
  const { id } = useParams()
  const { products, loading } = useProductAPI({ id })
  const { sendWarning } = useMessenger()

  if (loading) return <CircularProgress />

  const onDelete = () => {
    sendWarning('Tem certeza que deseja deletar esse registro?', () => console.log('confirmou'))
  }

  const onEdit = () => {
    console.log('edit')
  }

  return (
    <PageWrapper>
      <div className={styles.header}>
        <Tooltip title='Editar'>
          <IconButton aria-label='edit' onClick={onEdit}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title='Apagar'>
          <IconButton aria-label='edit' onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className={`${styles.container} ${styles.padding}`}>
        <div className={styles.container}>
          <Avatar className={styles.avatar} src={products[0]?.avatar} />
          <Typography variant='h4' gutterBottom>
            {products[0]?.name}
          </Typography>
        </div>
        <div className={styles.container}>
          <Typography variant='body1' gutterBottom>{`Id: ${products[0]?.id}`}</Typography>
          <Typography variant='body1' gutterBottom>{`Marca: ${products[0]?.brand}`}</Typography>
          <Typography variant='body1' gutterBottom>{`Preço: ${formatCurrency(products[0]?.price)}`}</Typography>
          <Typography variant='body1' gutterBottom>{`Quantidade em Estoque: ${products[0]?.stored}`}</Typography>
          <Typography variant='body1' gutterBottom>{`Quantidade Vendida: ${products[0]?.sold}`}</Typography>
          <Typography
            variant='body1'
            gutterBottom
          >{`Data de Criação: ${dateFormatter(products[0]?.createdAt)}`}</Typography>
        </div>
      </div>
    </PageWrapper>
  )
}
