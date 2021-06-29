import styled from 'styled-components'
import { ToolTipProps } from './index'

export const StyledTooltip = styled.span<ToolTipProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fontFamily.lato};
  font-weight: bold;
  font-style: oblique;
  visibility: ${({ isMouseOver }) => (isMouseOver ? 'visible' : 'hidden')};
  opacity: ${({ isMouseOver }) => (isMouseOver ? '1' : '0')};
  width: 325px;
  height: 42px;
  background-color: ${({ theme }) => theme.colors.orange};
  box-shadow: 2px 5px 10px ${({ theme }) => theme.colors.greenDark};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border-radius: 20px 30px 30px 20px;
  padding: 8px 15px;
  bottom: 10px;
  left: 100%;
  margin-left: 20px;
  transition: opacity 0.3s;
  text-decoration: none;

  ::after {
    content: '';
    position: absolute;
    left: -29px;
    margin-left: 0px;
    border-width: 16px;
    border-style: solid;
    border-color: ${({ theme }) => `transparent ${theme.colors.orange} transparent transparent`};
  }
`
