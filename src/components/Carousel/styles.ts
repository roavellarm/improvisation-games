import styled, { DefaultTheme } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 450px;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 0.5px solid #e0e0e0;
  border-radius: 0.8rem;

  :focus {
    outline: none;
  }
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.greenLight};
  margin-bottom: 5px;
`

export const Image = styled.img`
  width: 30px;
  height: auto;
`

export const Arrow = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.greenDark};
  opacity: ${({ isEdge }: { isEdge: boolean }) => (isEdge ? '0.3' : '0.7')};
  padding: 0px 0.6rem;
`

export const GamesStepper = styled.button`
  height: 20px;
  width: 20px;
  border: 0.5px solid ${({ theme }) => theme.colors.greenDark};
  border-radius: 50%;
  margin: 15px 4px;
  outline: none;
  background: ${({ isActive, theme }: { isActive: boolean; theme: DefaultTheme }) =>
    isActive ? `${theme.colors.greenDark}` : 'transparent'};
`
