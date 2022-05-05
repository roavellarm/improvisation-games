export type GameContent = {
  text?: string
  style: Array<string>
  audio?: string
}

export type Game = {
  id: string
  gameTitle: string
  content: GameContent[]
}

export type AboutType = {
  id?: string
  gameTitle?: string
  content?: any
}

export interface ArticleItem {
  text: string
  style: Array<string>
  titleStrong?: string | undefined
  rest?: string | undefined
}
