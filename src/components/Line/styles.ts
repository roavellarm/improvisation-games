import styled from 'styled-components'

export const StyledLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  opacity: 0.5;
  background: ${({ theme }) => theme.colors.greenLight};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.greenLight};
  border-radius: 8px;
  margin: 4rem -0.8rem;
`
