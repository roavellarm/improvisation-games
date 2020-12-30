import styled from 'styled-components'
import image from '../../assets/cello-image.png'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* background: lightgray; */
`

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
  /* background: purple; */
`

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  /* background: pink; */
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.black};
  min-width: 613px;
  margin-bottom: 1.5rem;
`

export const SubTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.greenDark};
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-right: 4.5rem;
`

export const Column = styled.div`
  margin-right: 30px;
  margin-top: 1rem;
  margin-bottom: 6rem;
`

export const RightSide = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
`

export const Links = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
`

export const Link = styled.p`
  margin-left: 5rem;
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.link};
  color: ${({ theme }) => theme.colors.greenDark};
`

export const Image = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background: url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
`
