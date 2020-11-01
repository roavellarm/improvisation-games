/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react'
import ArticleObjects from '../../mocks/Articles'

interface Objects {
  id: number
  name: string
  text: string
}

export default function Article() {
  const limit = 2
  const total = 8
  const [pages, setPages] = useState([{}])

  useEffect(() => {
    const totalPages = total / limit
    const arrayPages = []

    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i)
    }

    setPages(arrayPages)
  }, [limit, total])

  return (
    <div>
      <h2>Texto de Exemplo</h2>
      {ArticleObjects.map((objects: Objects) => {
        return (
          <div key={objects.id}>
            <span>{objects.name}</span>
            <p>{objects.text}</p>
          </div>
        )
      })}
    </div>
  )
}
