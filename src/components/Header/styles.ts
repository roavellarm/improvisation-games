import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: space-evenly;
  height: 3rem;
  max-height: 3rem;
`

export const Option = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
`
