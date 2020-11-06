/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'

import api from '../../services/api'

export default function Article() {
  // const [products, setProducts] = useState([])
  // const [total, setTotal] = useState(0)
  // const [limit, setLimit] = useState(2)
  // const [pages, setPages] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)

  // async function loadProducts(req, res) {

  // }

  async function loadProducts() {
    const data = await api.post('/pagination')
    // Object(setProducts(data))

    console.log(data)

    return data
  }

  // setTotal(10)
  // const totalPages = Math.ceil(total / limit)

  // const arrayPages = []
  // for (let i = 1; i <= totalPages; i++) {
  //   arrayPages.push(i)
  // }

  // setPages(arrayPages)

  loadProducts()
  return (
    <div>
      <h3>Tabela de produtos</h3>
      <select>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="100">100</option>
      </select>
      <div>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Imagem</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.text}</td>
              </tr>
            )
          })}
        </tbody>
      </div>
      {/* <div>
        <div>Qtd {total}</div>
        <button>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {pages.map((page) => (
            <button
              isSelect={page === currentPage}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage < pages.length && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
        </button>
      </div> */}
    </div>
  )
}
