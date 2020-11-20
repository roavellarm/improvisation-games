import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* background: yellow; */
  justify-content: space-evenly;
  padding-top: 20px;
  justify-content: center;
`

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background: ${({ status }: { status: string }) => {
    if (status === 'visited') return '#88aa96'
    if (status === 'not-visited') return '#e6b800'

    return '#004d99'
  }};
  margin: 10px;
  border-radius: 30px;
`
