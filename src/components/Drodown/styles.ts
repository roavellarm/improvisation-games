import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 1px 4px rgba(91, 124, 107, 0.7);
  /* background: ${({ theme }) => theme.colors.greenLight}; */
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greenDark};
  padding: 3px 10px;
  width: 100px;
`

type Props = {
  isOpen: boolean
  isArticlePage: boolean
}

export const DropdownContent = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
  min-width: ${({ isArticlePage }) => (isArticlePage ? '275px' : '100px')};
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  overflow-y: auto;
  height: 490px;
  margin-left: ${({ isArticlePage }) => isArticlePage && '-120px'};
  margin-top: 5px;
  max-height: 90vh;
  z-index: 999 !important;
`

type OptionsProps = {
  value: string
}

export const Options = styled.div<OptionsProps>`
  color: ${({ theme }) => theme.colors.greenLight};
  padding: 11px 16px;
  border-bottom: 1px solid rgba(91, 124, 107, 0.3);
  text-decoration: none;
  display: block;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.greenLight};
`
