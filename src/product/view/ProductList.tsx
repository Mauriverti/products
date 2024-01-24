import { CircularProgress, IconButton, Tooltip } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Grid from '../../shared/components/Grid'
import PageWrapper from '../../shared/components/PageWrapper'
import useProductAPI from '../data/useProductAPI.hook'
import Product from '../domain/models/product'
import styles from './ProductList.module.sass'
import PersonAdd from '@mui/icons-material/PersonAdd'

export default function ProductList() {
  const { products, loading } = useProductAPI()
  const navigate = useNavigate()

  const toViewProduct = (product: Product) => {
    navigate(`../${product.id}`)
  }

  const toCreateProduct = () => {
    navigate('../new')
  }

  if (loading) return <CircularProgress />

  return (
    <PageWrapper>
      <div className={styles.header}>
        <Tooltip title='Criar'>
          <IconButton aria-label='edit' onClick={toCreateProduct}>
            <PersonAdd />
          </IconButton>
        </Tooltip>
      </div>
      <Grid data={products} handleEdit={toViewProduct} />
    </PageWrapper>
  )
}
