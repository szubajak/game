import * as React from 'react'
import { CardsStyle } from './Cards.style'
import { CardComponent } from '~/Components/Card/Card.component'
import { Card } from '~/Core/Models'
import { Engine } from '~Core/GameEngine'

export const CardsComponent: React.FunctionComponent = () => {
    const [cards, setCards] = React.useState(new Array<Card>())

    React.useEffect(() => {
        Engine.cards.subscribe(newCards => {
            setCards(newCards)
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
                    isBlue={card.isBlue}
                    isRed={card.isRed}
                    power={card.power}
                />
            ))}
        </CardsStyle>
    )
}
