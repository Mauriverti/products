import useHTTPRepository from '../../../shared/domain/api.repository'
import numberValidator from '../../../shared/domain/number.validator'
import product2Produto from '../../data/product2Produto.interactor'
import produto2Product from '../../data/produto2product.interactor'
import Product from '../models/product'
import Produto from '../models/produto'

const api = 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/produto'

export default function useProductService() {
  const { post, remove } = useHTTPRepository()

  const validateFields = (product: Product) => {
    if (!product.name) {
      throw Error('Campo Nome é obrigatório!')
    }
    if (!product.brand) {
      throw Error('Campo Marca é obrigatório!')
    }
    if (!numberValidator(product.price)) {
      throw Error('Campo Preço é inválido!')
    }
    if (!numberValidator(`${product.stored}`)) {
      throw Error('Campo Qtd. estoque é inválido')
    }
    if (!numberValidator(`${product.sold}`)) {
      throw Error('Campo Qtd. vendido é inválido')
    }
    if (!product.avatar) {
      throw Error('é obrigatório carregar uma imagem!')
    }
  }

  const createProduct = (product: Product) => {
    validateFields(product)
    return postCreate(product)
  }

  const postCreate = async (product: Product): Promise<Product> => {
    try {
      const produto = product2Produto(product)
      const { data } = await post<Produto>(api, produto)
      return produto2Product(data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      const message = e?.response?.data || 'Erro ao criar produto'
      throw Error(message)
    }
  }

  const removeProduct = (product: Product) => {
    try {
      return remove(`${api}/${product.id}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      const message = e?.response?.data || 'Erro ao deletar produto'
      throw Error(message)
    }
  }

  return { createProduct, removeProduct }
}
