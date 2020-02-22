import { Card, Player, CardState, GameCard } from './Models'
import { getCards } from './GameService'

export class GameEngine {
    gameCards: Array<GameCard> = new Array<GameCard>()

    private _cards: Array<Card> = new Array<Card>()
    private _currentPlayer: Player = Player.Croupier
    private _cardInBattle: GameCard | null = null
    private _greenScore = 0
    private _blueScore = 0

    async startNewGame(): Promise<void> {
        if (!this.isLoaded()) {
            this._cards = (await getCards()).cards
        }

        this.resetGame()
    }

    exposeNextCard = (id: number): void => {
        this.gameCards = this.gameCards.map(gameCard => {
            if (gameCard.id === id) {
                gameCard.player = this._currentPlayer
                this.battle(gameCard)
            }
            return gameCard
        })
        this._currentPlayer = this.nextPlayer()
    }

    battle = (gameCard: GameCard): void => {
        if (this._cardInBattle === null) {
            this._cardInBattle = gameCard
            return
        }

        if (this._cardInBattle.power > gameCard.power) {
            this.score(this._cardInBattle.player)
        } else {
            this.score(gameCard.player)
        }
        this._cardInBattle = null
    }

    score = (player: Player): void => {
        if (player === Player.Blue) {
            this._blueScore++
        }

        this._greenScore++
    }

    getScore = (player: Player): number => {
        if (player === Player.Blue) {
            return this._blueScore
        }

        return this._greenScore
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
    }

    private isLoaded = (): boolean => this._cards.length > 0
}
