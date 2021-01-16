import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  bottom: 10px;
  height: 80px;
  width: 50px;

  @media screen and (min-width: 800px) {
    &:hover {
      opacity: 1;
      text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
      transform: scale(1.1, 1.1);
    }
  }

  @media screen and (max-width: 900px) {
    right: 10px;
  }

  @media screen and (max-width: 800px) {
    height: 40px;
    width: 40px;
    right: 6px;
    bottom: 6px;
  }
`

export const Text = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.greenLight};

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const Button = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.greenLight};
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.greenLight};
  padding-bottom: 10px;
  transform: rotate(90deg);
  height: 50px;
  width: 50px;
  opacity: 0.5;
  transition: 0.3s;

  @media screen and (min-width: 800px) {
    &:hover {
      opacity: 1;
      transform: rotate(90deg);
    }
  }

  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.title2};
    padding-bottom: 8px;
    height: 40px;
    width: 40px;
  }
`
