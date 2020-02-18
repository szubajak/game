import * as React from 'react'
import { CardStyle } from './Card.style'
import { Card } from '~/Core/Models'
import { Engine } from '~Core/GameEngine'

export const CardComponent: React.FunctionComponent<Card> = card => {
    const selectMe = (): void => {
        if (!card.isBlue && !card.isRed) Engine.selectCard(card.id)
    }

    const getColor = (): string => {
        if (card.isBlue) {
            return 'blue'
        }
        if (card.isRed) {
            return 'red'
        }

        return 'lightsteelblue'
    }

    return (
        <CardStyle onClick={selectMe} color={getColor()}>
            <div>{card.suit}</div>
            <div>{card.value}</div>
        </CardStyle>
    )
}
