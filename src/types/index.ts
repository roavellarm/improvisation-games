export type Item = {
  text?: string
  style: Array<string>
  audio?: string
}

export type GameIndex = {
  id: string
  gameTitle: string
}

export interface Game extends GameIndex {
  content: Item[]
}

export interface ArticleItem {
  text: string
  style: Array<string>
  titleStrong?: string | undefined
  rest?: string | undefined
}
