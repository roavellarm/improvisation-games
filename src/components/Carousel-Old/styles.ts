import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  border: 0.5px solid #e0e0e0;
  border-radius: 0.8rem;
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.greenDark};
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
  opacity: 0.7;
`
