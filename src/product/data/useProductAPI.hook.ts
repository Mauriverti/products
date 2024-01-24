import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from '../domain/models/product'
import Produto from '../domain/models/produto'
import product2Produto from './product2Produto.interactor'
import produto2Product from './produto2product.interactor'

const api = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/produto'

export default function useProductAPI(filter?: Partial<Product>) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()

  useEffect(() => {
    const source = axios.CancelToken.source()
    const fetch = async () => {
      try {
        const params = product2Produto(filter)
        const { data } = await axios.get<Produto[]>(api, { params, cancelToken: source.token })
        const parsed = data.map(produto2Product)
        setProducts(parsed)
      } catch (e) {
        if (!axios.isCancel(e)) {
          setError(e)
        }
      }
    }
    fetch()
    return () => {
      source.cancel()
    }
  }, [])

  useEffect(() => {
    if (products.length || error) setLoading(false)
  }, [products, error])

  return { products, loading, error }
}
