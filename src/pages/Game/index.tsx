import React from 'react'
import { useParams } from 'react-router-dom'

export default function Game() {
  const { id } = useParams() as { id: string }
  return <h1>{id}</h1>
}
