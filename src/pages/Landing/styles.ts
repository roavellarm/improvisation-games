import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  /* min-width: 1138px; */
  /* width: 100%; */
  justify-content: center;
  padding-top: 2rem;

  /* background: red; */
  /* opacity: 0.5; */
`

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* width: 100%; */
  /* background: purple; */
`

export const TitlesContainer = styled.div`
  margin-left: 3rem;
  min-width: 552px;
  margin-bottom: 1.5rem;
`

export const Title = styled.text`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.black};
`

export const SubTitle = styled.text`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.title2};
  color: ${({ theme }) => theme.colors.greenDark};
`

export const ButtonsContainer = styled.div`
  /* background: yellow; */
  display: flex;
  margin-right: 2rem;
  /* flex: 1; */
  /* justify-content: flex-end;
  align-items: flex-end; */
`

export const Column = styled.div`
  /* background: orange; */
  margin-right: 30px;
`

export const Button = styled.div`
  /* background: lightblue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px;
  min-width: 162px;
`

export const ButtonText = styled.text`
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.buttonText};
  color: ${({ theme }) => theme.colors.greenDark};
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding-right: 3rem; */
  /* background: grey; */
`

export const Links = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0px;
  justify-content: flex-end;
  /* background: pink; */
`

export const Link = styled.text`
  /* background: chartreuse; */
  text-align: right;
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.caveat};
  font-size: ${({ theme }) => theme.fontSize.link};
  color: ${({ theme }) => theme.colors.greenDark};
  min-width: 299px;
`

export const Image = styled.img`
  /* background: green; */
  height: auto;
  width: 100%;
  max-height: 550px;
  min-width: 460px;
`
