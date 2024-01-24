/* eslint-disable camelcase */
import Product from '../domain/models/product'
import Produto from '../domain/models/produto'

export default function product2Produto(product: Product = {}): Produto {
  const newProduto: Produto = {
    id: product.id,
    nome: product.name,
    marca: product.brand,
    createdAt: product.createdAt,
    avatar: product.avatar,
    qt_estoque: product.stored,
    qt_vendas: product.sold,
    preco: product.price,
  }
  return newProduto
}
