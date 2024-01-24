import { Save } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../../shared/components/PageWrapper'
import ProductForm from '../components/ProductForm'
import Product from '../domain/models/product'

export default function ProductCreate() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>({})

  const onSubmit = () => {}

  return (
    <PageWrapper>
      <p>{`id: ${id}`}</p>
      <ProductForm value={product} handleChange={setProduct} />
      <Button variant='contained' onClick={onSubmit} startIcon={<Save />}>
        Gravar
      </Button>
    </PageWrapper>
  )
}
