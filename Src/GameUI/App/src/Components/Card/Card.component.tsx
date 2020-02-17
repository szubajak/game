import * as React from 'react'
import { CardStyle } from './Card.style'
import { Card } from '~/Core/Models'

export const CardComponent: React.FunctionComponent<Card> = card => (
    <CardStyle>
        <div>{card.suit}</div>
        <div>{card.value}</div>
    </CardStyle>
)
