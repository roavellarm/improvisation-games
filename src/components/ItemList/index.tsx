import React, { ReactNode } from 'react'
import { Item } from './styles'

export default function ItemList({ children }: { children: ReactNode }) {
  return <Item>{children}</Item>
}
