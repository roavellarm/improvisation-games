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
`

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.black};
  min-width: 613px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1325px) {
    font-size: 4.5rem;
    min-width: 552px;
  }

  @media screen and (max-width: 1110px) {
    font-size: 3rem;
    min-width: 369px;
  }
`

export const SubTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.greenDark};

  @media screen and (max-width: 1325px) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 1110px) {
    font-size: 2rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-right: 4.5rem;

  @media screen and (max-width: 1110px) {
    margin-right: 0px;
  }
`

export const Column = styled.div`
  margin-right: 30px;
  margin-top: 1rem;
  margin-bottom: 10rem;

  @media screen and (max-width: 1325px) {
    margin-right: 10px;
    margin-bottom: 3rem;
  }
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
  padding-top: 2rem;
  margin-bottom: -2rem;

  @media screen and (max-width: 1325px) {
    margin: 1rem 0px;
    padding-top: 0px;
    margin-bottom: 0px;
  }
`

export const Link = styled.p`
  margin-left: 5rem;
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.link};
  color: ${({ theme }) => theme.colors.greenDark};
  opacity: 0.9;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    opacity: 1;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: scale(1.1, 1.1);
  }

  @media screen and (max-width: 1325px) {
    font-size: 1.7rem;
  }
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
