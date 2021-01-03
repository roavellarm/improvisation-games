import styled from 'styled-components'
import celloImg from '../../assets/images/cello-game-page.png'
import dot from '../../assets/images/dot.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
  padding-bottom: 3rem;
`

export const SideArea = styled.div`
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
  padding-top: 1.5rem;
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
  padding-left: 2.3rem;
  text-indent: -2.3rem;
  list-style: none;

  ::before {
    background-image: url(${dot});
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    width: 20px;
    height: 20px;
    padding-right: 1rem;
    content: '';
  }
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
