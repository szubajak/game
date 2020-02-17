import * as React from 'react'
import { CardsStyle } from './Cards.style'
import { CardComponent } from '~/Components/Card/Card.component'
import { Card } from '~/Core/Models'
import { GameEngine } from '~/Core/Engine'

export const CardsComponent: React.FunctionComponent = () => {
    const [cards, setCards] = React.useState(new Array<Card>())

    React.useEffect(() => {
        GameEngine.cards.subscribe(newCards => {
            setCards(newCards.cards)
        })
    })

    return (
        <CardsStyle>
            {cards.map(card => (
                <CardComponent
                    key={card.id}
                    id={card.id}
                    suit={card.suit}
                    value={card.value}
                />
            ))}
        </CardsStyle>
    )
}
