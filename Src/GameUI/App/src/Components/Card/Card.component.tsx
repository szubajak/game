import * as React from 'react'
import { CardStyle } from './Card.styled'
import { GameEngine } from '~/Core/Engine'
import { Card } from '~/Core/Models'

export const CardComponent: React.FunctionComponent = () => {
    const defaultCard: Card = { id: 1, suit: 'Hearts', value: 'Ace' }
    const [card, setCard] = React.useState(defaultCard)

    GameEngine.card.subscribe(newCard => {
        setCard(newCard)
    })

    function test(): void {
        GameEngine.card.next({ id: 2, suit: 'Spades', value: 'King' })
    }

    return (
        <CardStyle>
            <strong>{card.id}</strong>
            <strong>{card.suit}</strong>
            <strong>{card.value}</strong>
            <button onClick={test}>Test</button>
        </CardStyle>
    )
}
