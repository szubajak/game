import { GameEngine } from './GameEngine'

class AppViewModel {
    gameEngine: GameEngine = new GameEngine()

    async startNewGame(): Promise<void> {
        await this.gameEngine.startNewGame()
    }

    trySelectNextGameCard(id: number): void {
        this.gameEngine.trySelectNextGameCard(id)
    }
}

export const AppVM = new AppViewModel()
