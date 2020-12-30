import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin: 10px;
  min-width: 162px;
  opacity: 0.7;
  transition: 0.25s;
  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: scale(1.1, 1.1);
  }
  @media screen and (max-width: 1110px) {
    justify-content: center;
  }
`

export const ButtonText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.buttonText};
  color: ${({ theme }) => theme.colors.greenDark};
  @media screen and (max-width: 1325px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 1110px) {
    font-size: 1.5rem;
    margin-left: 0.3rem;
  }
`

export const Image = styled.img`
  height: auto;
  width: 45px;
  transition: 0.3s;
  transform: ${({ isOn }: { isOn: boolean }) => isOn && 'rotate(90deg)'};

  @media screen and (max-width: 1325px) {
    width: 35px;
  }
  @media screen and (max-width: 1110px) {
    width: 30px;
  }
`
