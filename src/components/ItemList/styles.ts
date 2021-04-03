import styled from 'styled-components'
import dot from 'assets/images/dot.png'

export const Item = styled.li`
  font-family: ${({ theme }) => theme.fontFamily.lato};
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

  @media screen and (max-width: 1000px) {
    font-size: 1.125rem;
    margin: 0.5rem 0px;
    padding-left: 2rem;
    text-indent: -2rem;

    ::before {
      width: 15px;
      height: 15px;
    }
  }
`
