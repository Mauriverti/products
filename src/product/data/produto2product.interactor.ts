import Product from '../domain/models/product'
import Produtos from '../domain/models/produto'

export default function produto2Product(produto: Produtos): Product {
  return {
    id: produto.id,
    name: produto.nome,
    brand: produto.marca,
    createdAt: produto.createdAt,
    avatar: produto.avatar,
    stored: produto.qt_estoque,
    sold: produto.qt_vendas,
    price: produto.preco,
  }
}
