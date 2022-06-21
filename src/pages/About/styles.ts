import styled from 'styled-components'
import imgTopRight from 'assets/images/aboutTopRight.png'
import imgBottomRight from 'assets/images/aboutBottomRight.png'
import imgBottomLeft from 'assets/images/aboutBottomLeft.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 60px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 680px;
  font-size: ${({ theme }) => theme.fontSize.text};
  padding-bottom: 3rem;

  @media screen and (max-width: 800px) {
    padding: 0px 0.9rem 2rem 0.9rem;
  }
`

export const CitationContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`

export const Citation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CloseQuoteContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

interface QuoteImageProps {
  isOpenQuote?: boolean
}

export const QuoteImage = styled.img<QuoteImageProps>`
  width: 50px;
  height: 50px;
  margin-left: ${({ isOpenQuote }) => (isOpenQuote ? 'calc(-50px - 1rem)' : '1rem')};
  margin-right: ${({ isOpenQuote }) => (isOpenQuote ? '1rem' : 'calc(-50px - 1rem)')};

  @media screen and (max-width: 1150px) {
    width: 25px;
    height: 25px;
    margin-right: ${({ isOpenQuote }) => (isOpenQuote ? '0px' : '-0.9rem')};
    margin-left: ${({ isOpenQuote }) => (isOpenQuote ? '-0.9rem' : '0px')};
  }
`

export const Signature = styled.p`
  width: 100%;
  text-align: right;
  padding-right: 1.5rem;
  padding-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.greenDark};

  @media screen and (max-width: 1150px) {
    font-size: 1.875rem;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.greenDark};
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    text-shadow: 1px 1px 15px ${({ theme }) => theme.colors.orange};
    transform: scale(1.1, 1.1);
  }
`

export const SideArea = styled.div`
  display: flex;
  flex: 1;
`

export const ImgTopRight = styled.div`
  background: url(${imgTopRight});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  z-index: 2 !important;

  position: fixed;
  margin-top: -56px;
  right: 0px;

  height: 170px;
  width: 180px;

  @media screen and (max-width: 1070px) {
    width: ${`${180 * 0.7}px`};
  }
  @media screen and (max-width: 940px) {
    width: ${`${180 * 0.5}px`};
  }
  @media screen and (max-width: 860px) {
    width: ${`${180 * 0.34}px`};
  }
  @media screen and (max-width: 800px) {
    width: ${`${180 * 0.28}px`};
  }
`

export const ImgBottomRight = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;

  height: 235px;
  width: 156px;

  background: url(${imgBottomRight});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;

  @media screen and (max-width: 1070px) {
    width: ${`${156 * 0.7}px`};
  }
  @media screen and (max-width: 940px) {
    width: ${`${156 * 0.5}px`};
  }
  @media screen and (max-width: 860px) {
    width: ${`${156 * 0.34}px`};
  }
`

export const ImgBottomLeft = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;

  height: 301px;
  width: 146px;

  background: url(${imgBottomLeft});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom left;

  @media screen and (max-width: 1070px) {
    width: ${`${146 * 0.7}px`};
  }
  @media screen and (max-width: 940px) {
    width: ${`${146 * 0.5}px`};
  }
  @media screen and (max-width: 860px) {
    width: ${`${146 * 0.34}px`};
  }
`
