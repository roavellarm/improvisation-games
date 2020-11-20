import React from 'react'
import styled from 'styled-components'

const Italic = styled.p`
  font-style: italic;
  margin-left: 10px;
  padding-bottom: 15px;
`
// const Li = styled.li`
//   list-style-type: none;
//   margin-left: 10px;
// `

export default function ItemList({ children }: { children: string }) {
  return <Italic>{children}</Italic>
}
