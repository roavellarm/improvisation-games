import styled from 'styled-components'

export const StyledStepper = styled.div`
  position: fixed;
  height: calc(100vh - 60px);
  padding-bottom: 60px;

  padding-right: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1135px) {
    padding-right: 6rem;
  }

  @media screen and (max-width: 1010px) {
    padding-right: 2.5rem;
  }

  @media screen and (max-width: 860px) {
    padding-right: 1rem;
  }
`
