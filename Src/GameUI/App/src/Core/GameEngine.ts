import { Card, Player, CardState, GameCard } from './Models'
import { getCards } from './GameService'

export class GameEngine {
    gameCards: Array<GameCard> = new Array<GameCard>()

    private _cards: Array<Card> = new Array<Card>()
    private _currentPlayer: Player = Player.Croupier
    private _battleHost: GameCard | null = null
    private _greenScore = 0
    private _blueScore = 0

    async startNewGame(): Promise<void> {
        if (!this.isLoaded()) {
            this._cards = (await getCards()).cards
        }

        this.resetGame()
    }

    exposeNextGameCard = (id: number): void => {
        const exposedGameCard = this.getGameCard(id)
        if (!exposedGameCard) return

        exposedGameCard.player = this._currentPlayer
        this.updateGameCard(exposedGameCard)

        this.battle(exposedGameCard)
        this._currentPlayer = this.nextPlayer()
        if (this.isGameOver()) {
            setTimeout(function() {
                alert('Battle has ended!')
            }, 1000)
        }
    }

    battle = (pretender: GameCard): void => {
        if (this._battleHost === null) {
            this._battleHost = pretender
            return
        }

        if (this._battleHost.power > pretender.power) {
            this.score(this._battleHost.player)
            this._battleHost.state = CardState.Victorious
            pretender.state = CardState.Defeated
        } else {
            this.score(pretender.player)
            this._battleHost.state = CardState.Defeated
            pretender.state = CardState.Victorious
        }

        this.updateGameCard(this._battleHost)
        this.updateGameCard(pretender)
        this._battleHost = null
    }

    score = (player: Player): void => {
        if (player === Player.Blue) {
            this._blueScore++
            return
        }

        this._greenScore++
    }

    getScore = (player: Player): number => {
        if (player === Player.Blue) {
            return this._blueScore
        }

        return this._greenScore
    }

    private isGameOver = (): boolean => {
        const croupierCards = this.gameCards.filter(
            x => x.player === Player.Croupier
        )
        return croupierCards.length === 0
    }

    private getGameCard = (id: number): GameCard | undefined =>
        this.gameCards.find(x => x.id === id)

    private updateGameCard = (gameCard: GameCard): void => {
        this.gameCards = this.gameCards.map(x => {
            return x.id === gameCard.id ? gameCard : x
        })
    }

    private nextPlayer = (): Player => {
        return this._currentPlayer === Player.Blue ? Player.Green : Player.Blue
    }

    private resetGame = (): void => {
        this.gameCards = this._cards.map(card => {
            return {
                id: card.id,
                power: card.power,
                suit: card.suit,
                value: card.value,
                player: Player.Croupier,
                state: CardState.ReadyToBattle,
            } as GameCard
        })
        this._currentPlayer = this.nextPlayer()
        this._blueScore = 0
        this._greenScore = 0
    }

    private isLoaded = (): boolean => this._cards.length > 0
}
