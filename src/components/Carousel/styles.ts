import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.5);
`

export const Items = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
`

export const Item = styled.div`
  flex: none;
  width: 65px;
  height: 65px;
  margin: 0.5rem;
  scroll-snap-align: start;
  pointer-events: none;
  border-radius: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`

export const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
