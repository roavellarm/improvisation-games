import React from 'react'
import { Container, Items, Item, Image, Arrow } from './styles'

interface Props {
  gameList: Array<{
    id: number
    title: string
    image: string
  }>
}

export default function Carousel({ gameList }: Props) {
  return (
    <Container>
      <Arrow>{`<`}</Arrow>
      <Items>
        {gameList.map((game) => (
          <Item key={game.id}>
            <Image src={game.image} />
            {/* <span>{game.title}</span> */}
          </Item>
        ))}
      </Items>
      <Arrow>{`>`}</Arrow>
    </Container>
  )
}
