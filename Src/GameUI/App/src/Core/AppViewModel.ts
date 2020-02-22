import { Subject } from 'rxjs'
import { GameCard, Player } from './Models'
import { GameEngine } from './GameEngine'

class AppViewModel {
    private _gameEngine: GameEngine = new GameEngine()
    gameCards: Subject<Array<GameCard>> = new Subject<Array<GameCard>>()
    greenScore: Subject<number> = new Subject<number>()
    blueScore: Subject<number> = new Subject<number>()

    async startNewGame(): Promise<void> {
        await this._gameEngine.startNewGame()
        this.notifyChanges()
    }

    exposeNextCard(id: number): void {
        this._gameEngine.exposeNextCard(id)
        this.notifyChanges()
    }

    private notifyChanges(): void {
        this.gameCards.next(this._gameEngine.gameCards)
        this.greenScore.next(this._gameEngine.getScore(Player.Green))
        this.blueScore.next(this._gameEngine.getScore(Player.Blue))
    }
}

export const AppVM = new AppViewModel()
