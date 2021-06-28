import styled, { DefaultTheme } from 'styled-components'

export const StyledNavbar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  z-index: 2 !important;

  @media screen and (max-width: 1000px) {
    height: 40px;
  }
`

export const Line = styled.div`
  display: flex;
  height: 4px;
  width: 100%;
  background: ${({ theme }) => theme.colors.greenLight};
`

type ContainerProps = {
  isGamePage: boolean
  theme: DefaultTheme
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme, isGamePage }: ContainerProps) => {
    return isGamePage
      ? theme.colors.white
      : `linear-gradient(to bottom, rgba(254, 254, 254, 1),
          rgba(254, 254, 254, 0))`
  }};

  @media screen and (max-width: 1000px) {
    background: ${({ theme }) => theme.colors.white};
  }
`

export const SideArea = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.link};
  color: ${({ theme }) => theme.colors.greenDark};

  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 15px rgba(219, 152, 19, 0.5);
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1000px) {
    margin-right: 8px;
    min-width: 120px;
    font-size: 1.75rem;
  }
`

export const Spacer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 680px;
  height: 100%;
`
