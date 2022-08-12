import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  @media screen and (max-width: 800px) {
    top: 4px;
  }
`

export const Button = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme, isOpen }) => (isOpen ? theme.colors.white : theme.colors.orange)};
  border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : '8px')};
  box-shadow: ${({ isOpen }) => (isOpen ? 'none' : '2px 2px 6px 1px rgba(91, 124, 107, 0.5)')};
  background: ${({ theme, isOpen }) => (isOpen ? theme.colors.orange : 'none')};
  padding: 3px 10px;
  transition: all ease 0.25s;
  &:hover {
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    border-radius: 8px 8px 0 0;
  }
`

export const Arrow = styled.div<{ isOpen: boolean }>`
  border: solid ${({ theme }) => theme.colors.greenDark};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  border-radius: 1px;
  margin-top: 6px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  -webkit-transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
`

export const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #eccb89;
  border-radius: 0 0 8px 8px;
  z-index: 9 !important;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  line-height: 160%;
  width: 100%;
  padding: 0.3rem 1rem;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background: rgba(91, 124, 107, 0.2);
  }
`
