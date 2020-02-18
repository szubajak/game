import { Subject } from 'rxjs'
import { GameState } from './GameState'
import { Card } from './Models'

export interface GameViewModel {
    gameState: GameState
    cards: Subject<Card[]>
    message: Subject<string>
    redScore: Subject<number>
    blueScore: Subject<number>
    startGame(): void
    selectCard(id: number): void
}
