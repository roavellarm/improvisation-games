/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react'
import styled from 'styled-components'

interface BiographyProps {
  key: String
  text: String
  titleStrong: String
  rest: String
}

interface Props {
  key: String
  text: String
  titleStrong: String
  rest: String
}

const StyledBiography = styled.p<BiographyProps>`
  font-style: normal;
  font-weight: bold;
`

export default function Biography(props: any) {
  return <Biography />
}
