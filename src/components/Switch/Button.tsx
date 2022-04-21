/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 200px;
  padding: 1rem;
  margin: 0.4rem;
  background: ${({ color }) => color};
  border: none;
  border-radius: 0.4rem;
  color: ${({ color }) => (color === '#ffbe50' ? 'black' : '#e1e1e1')};
  font-size: x-large;
  cursor: pointer;
  outline: none;
  transition-duration: 0.3s;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem;
    margin: 0.4rem;
    font-size: large;
  }
`

export default function Button({ title, onClick, color }: any) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {title}
    </StyledButton>
  )
}
