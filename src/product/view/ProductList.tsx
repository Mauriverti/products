import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Grid from '../../shared/view/components/Grid'
import PageWrapper from '../../shared/view/components/PageWrapper'
import useProductAPI from '../data/useProductAPI.hook'
import Product from '../domain/models/product'

export default function ProductList() {
  const { products, loading } = useProductAPI()
  const navigate = useNavigate()

  const viewProduct = (product: Product) => {
    navigate(`../${product.id}`)
  }

  if (loading) return <CircularProgress />

  return (
    <PageWrapper>
      <Grid data={products} handleEdit={viewProduct} />
    </PageWrapper>
  )
}
