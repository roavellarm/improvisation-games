import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, Button, DropdownContent, Options, Anchor } from './styles'

type DropDownProps = {
  isQuarentinePage?: boolean
  title: string
  options: string[]
  initialState?: boolean
}

export default function Dropdown(props: DropDownProps) {
  const { initialState = false, title, options, isQuarentinePage = false } = props
  const { push } = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Button>{isOpen ? `X` : title}</Button>
      {isOpen && (
        <DropdownContent isArticlePage={isQuarentinePage}>
          {options.map((option, index) => {
            return (
              <Options
                key={index}
                value={option}
                onClick={() => !isQuarentinePage && push(`/quarentine/${index + 1}`)}
              >
                {isQuarentinePage ? <Anchor href={`#${option}`}>{option}</Anchor> : option}
              </Options>
            )
          })}
        </DropdownContent>
      )}
    </Wrapper>
  )
}

Dropdown.defaultProps = {
  isQuarentinePage: false,
  initialState: false,
}
