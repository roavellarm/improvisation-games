import { GameIndex } from 'types'

export type TextType = {
  title: string
  subtitle: string
  quarantineLink: string
  aboutLink: string
  articleLink: string
  games: GameIndex[]
}

export const portuguese = {
  title: 'Jogos de improvisação',
  subtitle: 'para violoncelistas iniciantes',
  quarantineLink: 'Sons da quarentena',
  aboutLink: 'Saiba mais',
  articleLink: 'Caderno de atividades',
  games: [
    { id: '1', gameTitle: 'Jogo 1' },
    { id: '2', gameTitle: 'Jogo 2' },
    { id: '3', gameTitle: 'Jogo 3' },
    { id: '4', gameTitle: 'Jogo 4' },
    { id: '5', gameTitle: 'Jogo 5' },
    { id: '6', gameTitle: 'Jogo 6' },
    { id: '7', gameTitle: 'Jogo 7' },
    { id: '8', gameTitle: 'Jogo 8' },
    { id: '9', gameTitle: 'Jogo 9' },
    { id: '10', gameTitle: 'Jogo 10' },
  ],
} as TextType

export const english = {
  title: 'Improvisation games',
  subtitle: 'for beginner cellists',
  quarantineLink: 'Quarantine sounds',
  aboutLink: 'About',
  articleLink: 'Article',
  games: [
    { id: '1', gameTitle: 'Game 1' },
    { id: '2', gameTitle: 'Game 2' },
    { id: '3', gameTitle: 'Game 3' },
    { id: '4', gameTitle: 'Game 4' },
    { id: '5', gameTitle: 'Game 5' },
    { id: '6', gameTitle: 'Game 6' },
    { id: '7', gameTitle: 'Game 7' },
    { id: '8', gameTitle: 'Game 8' },
    { id: '9', gameTitle: 'Game 9' },
    { id: '10', gameTitle: 'Game 10' },
  ],
} as TextType

export const spanish = {
  title: 'Juegos de improvisación',
  subtitle: 'para chelistas iniciantes',
  quarantineLink: 'Sonidos de la quarentena',
  aboutLink: 'Sobre',
  articleLink: 'Artículo',
  games: [
    { id: '1', gameTitle: 'Juego 1' },
    { id: '2', gameTitle: 'Juego 2' },
    { id: '3', gameTitle: 'Juego 3' },
    { id: '4', gameTitle: 'Juego 4' },
    { id: '5', gameTitle: 'Juego 5' },
    { id: '6', gameTitle: 'Juego 6' },
    { id: '7', gameTitle: 'Juego 7' },
    { id: '8', gameTitle: 'Juego 8' },
    { id: '9', gameTitle: 'Juego 9' },
    { id: '10', gameTitle: 'Juego 10' },
  ],
} as TextType
