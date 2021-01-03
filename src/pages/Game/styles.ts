import styled from 'styled-components'
import celloImg from '../../assets/images/cello-game-page.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
`

export const SideArea = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-start;
`

export const HeaderTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem;
`

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.greenDark};
  margin: 3rem 0px;
`

export const SubTitle = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  color: ${({ theme }) => theme.colors.text};
  margin: 2rem 0px;
`

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  color: ${({ theme }) => theme.colors.text};
  line-height: 158%;
  margin: 2rem 0px;
`

export const Item = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.lato};
  color: ${({ theme }) => theme.colors.text};
  line-height: 158%;
  margin: 1rem 0px;
`

export const Image = styled.div`
  position: fixed;
  display: flex;
  height: 30%;
  width: 100%;
  max-width: 300px;
  background: url(${celloImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`
