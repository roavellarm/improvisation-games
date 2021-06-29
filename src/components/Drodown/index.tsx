import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, Button, DropdownContent, Options, Anchor } from './styles'

type DropDownProps = {
  isArticleStyle?: boolean
  title: string
  options: string[]
}

export default function Dropdown(props: DropDownProps) {
  const { title, options, isArticleStyle = false } = props
  const { push } = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Button>{isOpen ? `X` : title}</Button>
      {isOpen && (
        <DropdownContent isArticleStyle={isArticleStyle}>
          {options.map((option, index) => {
            return (
              <Options
                key={index}
                value={option}
                onClick={() => !isArticleStyle && push(`/game/${index + 1}`)}
              >
                {isArticleStyle ? <Anchor href={`#${option}`}>{option}</Anchor> : option}
              </Options>
            )
          })}
        </DropdownContent>
      )}
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  isArticleStyle: false,
}
