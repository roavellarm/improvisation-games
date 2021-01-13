import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const StyledText = styled.h1`
  font-size: 90px;
  color: ${({ theme }) => theme.colors.greenDark};
  text-align: center;
  line-height: 160%;

  @media screen and (max-width: 800px) {
    padding: 3rem;
    font-size: 60px;
  }
`
