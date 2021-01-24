import styled from 'styled-components'

export const StyledLine = styled.div`
  display: flex;
  flex-direction: row;
  height: 1px;
  background: rgba(91, 124, 107, 0.5);
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.greenLight};
  border-radius: 8px;
  margin: 4rem -0.8rem;

  @media screen and (max-width: 1000px) {
    margin: 3rem -0.8rem;
  }
`
