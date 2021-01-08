import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 40px;
  box-shadow: 0px 0.5px 2px #e0e0e0;

  @media screen and (max-width: 1000px) {
    padding: 0px 4px;
    box-shadow: none;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #e0e0e0;
  border-radius: 0.8rem;
  padding: 2px 10px;

  :focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 0px 0px 10px rgba(219, 152, 19, 0.3);
    transform: scale(1.1, 1);
  }

  @media screen and (max-width: 1000px) {
    padding: 1px 8px;
  }
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  color: ${({ theme }) => theme.colors.greenLight};
  font-size: 25px;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }
`

export const Arrow = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: 40px;
  line-height: 35px;
  padding: 0px 5px;
  color: ${({ theme }) => theme.colors.greenDark};
  opacity: ${({ isEdge }: { isEdge: boolean }) => (isEdge ? '0.3' : '0.7')};

  :focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 0px 0px 10px rgba(219, 152, 19, 0.3);
    transform: scale(1.3, 1.3);
  }

  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
`
