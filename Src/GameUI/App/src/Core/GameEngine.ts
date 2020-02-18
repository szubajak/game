import { Subject } from 'rxjs'
import { Card } from './Models'
import { GameViewModel } from './ViewModel'
import { GameState } from './GameState'
import { getCards } from './GameService'

class GameEngine implements GameViewModel {
    gameState: GameState
    cards: Subject<Card[]>
    message: Subject<string>
    redScore: Subject<number>
    blueScore: Subject<number>

    constructor() {
        this.gameState = new GameState([])
        this.cards = new Subject<Card[]>()
        this.message = new Subject<string>()
        this.redScore = new Subject<number>()
        this.blueScore = new Subject<number>()
    }

    async startGame(): Promise<void> {
        this.gameState = new GameState((await getCards()).cards)
        this.notifyChanges()
    }

    selectCard(id: number): void {
        this.gameState.pickCard(id)
        this.notifyChanges()
    }

    private notifyChanges(): void {
        this.cards.next(this.gameState.cards)
        this.message.next(this.gameState.getMessage())
        this.redScore.next(this.gameState.redScore)
        this.blueScore.next(this.gameState.blueScore)
    }
}

export const Engine = new GameEngine()
