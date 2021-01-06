import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
  padding-bottom: 3rem;

  @media screen and (max-width: 800px) {
    padding: 0px 0.9rem 2rem 0.9rem;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.greenDark};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: scale(1.1, 1.1);
  }
`

export const SideArea = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`
