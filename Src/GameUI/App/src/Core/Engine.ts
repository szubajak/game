import { Subject } from 'rxjs'
import { Cards } from './Models'
import { getCards } from './GameService'

type Engine = {
    cards: Subject<Cards>
    fetchCards(): void
}

export const GameEngine: Engine = {
    cards: new Subject<Cards>(),
    fetchCards: async () => {
        GameEngine.cards.next(await getCards())
    },
}
