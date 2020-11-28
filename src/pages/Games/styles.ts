import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  max-width: 100%;
  padding: 0px 1rem;

  /* @media screen and (min-width: 700px) {
    width: 100%;
    align-items: center;
  } */
`
// export const Image = styled.img`
//   width: 40px;
//   margin-left: 20px;
// `

export const GoBack = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  padding-top: 15px;

  /* @media screen and (min-width: 700px) {
    padding-top: 20px;
  } */
`

// export const StepperContainer = styled.div`
//   display: flex;
//   width: 70vw;
//   max-width: 100%;
//   flex-direction: row;
//   padding-left: 52px;
//   align-items: center;
// `
