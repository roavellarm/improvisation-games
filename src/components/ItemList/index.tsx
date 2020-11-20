import React from 'react'
import styled from 'styled-components'

const Italic = styled.p`
  font-style: italic;
`
const li = styled.li`
  list-style: none;
`

export default function ItemList({ children }: { children: string }) {
  return (
    <li>
      <Italic>{children}</Italic>
    </li>
  )
}
