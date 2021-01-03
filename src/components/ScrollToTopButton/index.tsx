import React from 'react'
import styled from 'styled-components'

export const StyledButton = styled.div`
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
  position: fixed;
  right: 10px;
  bottom: 10px;
  opacity: 0.5;
  z-index: 1;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: rotate(90deg) scale(1.1, 1.1);
  }
`

export default function ScrollToTopButton() {
  return (
    <StyledButton
      onClick={() => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }}
    >
      {`<`}
    </StyledButton>
  )
}
