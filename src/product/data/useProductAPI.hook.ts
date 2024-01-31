import axios from 'axios'
import { useEffect, useState } from 'react'
import useHTTPRepository from '../../shared/domain/api.repository'
import Product from '../domain/models/product'
import Produto from '../domain/models/produto'
import product2Produto from './product2Produto.interactor'
import produto2Product from './produto2product.interactor'

const api = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/produto'

export default function useProductAPI(filter?: Partial<Product>) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()
  const { get } = useHTTPRepository()

  useEffect(() => {
    const controller = new AbortController()
    const fetch = async () => {
      try {
        const params = product2Produto(filter)
        const { data } = await get<Produto[]>(api, { params, signal: controller.signal })
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
      controller.abort()
    }
  }, [])

  useEffect(() => {
    if (products.length || error) setLoading(false)
  }, [products, error])

  return { products, loading, error }
}
