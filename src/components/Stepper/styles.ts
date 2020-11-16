import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
<<<<<<< HEAD
=======
  /* background: yellow; */
>>>>>>> pagination
  justify-content: space-evenly;
`

export const Circle = styled.div`
  height: 20px;
  width: 20px;
  background: ${({ status }: { status: string }) => {
    if (status === 'visited') return 'green'
    if (status === 'not-visited') return 'orange'

    return 'blue'
  }};
  margin: 5px;
  border-radius: 30px;
`
