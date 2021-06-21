import styled from 'styled-components'
import { Props } from './index'

export const StyledStepperItem = styled.div<Props>`
  position: relative;
  width: 20px;
  height: 20px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.greenLight : 'rgba(91, 124, 107, 0.04)'};
  margin: 5px;
  box-shadow: -1px 1px 4px rgba(91, 124, 107, 0.6);
  border-radius: 100px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: rgba(91, 124, 107, 0.4);
    border: none;
    cursor: pointer;
  }
`
