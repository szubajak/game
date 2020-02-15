import { Subject } from 'rxjs'
import { Card, Cards } from './Models'

type Engine = {
    cards: Subject<Cards>
    card: Subject<Card>
}

export const GameEngine: Engine = {
    cards: new Subject<Cards>(),
    card: new Subject<Card>(),
}
