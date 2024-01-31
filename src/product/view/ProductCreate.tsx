import { ArrowBack, Save } from '@mui/icons-material'
import { Button, IconButton, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../shared/components/PageWrapper'
import { useMessenger } from '../../shared/contexts/Messenger.provider'
import ProductForm from '../components/ProductForm'
import Product from '../domain/models/product'
import userProductService from '../domain/services/product.service'
import styles from './ProductCreate.module.sass'

export default function ProductCreate() {
  const [product, setProduct] = useState<Product>({})
  const { createProduct } = userProductService()
  const { sendError } = useMessenger()
  const navigate = useNavigate()

  const goBack = () => {
    navigate('../list')
  }

  const onSubmit = () => {
    try {
      createProduct(product)
      goBack()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      sendError(`${e}`)
    }
  }

  return (
    <PageWrapper>
      <h3>Criar Produto</h3>
      <div className={styles.header}>
        <Tooltip title='Voltar'>
          <IconButton aria-label='edit' onClick={goBack}>
            <ArrowBack />
          </IconButton>
        </Tooltip>
      </div>
      <ProductForm value={product} handleChange={setProduct} />
      <Button variant='contained' onClick={onSubmit} startIcon={<Save />}>
        Gravar
      </Button>
    </PageWrapper>
  )
}
