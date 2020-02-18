import { Card, Player } from './Models'

export class GameState {
    cards: Card[]
    redCard: Card | null
    blueCard: Card | null
    redScore: number
    blueScore: number
    message: string

    constructor(cards: Card[]) {
        this.cards = cards
        this.redCard = null
        this.blueCard = null
        this.redScore = 0
        this.blueScore = 0
        this.message = 'Game in not started'
    }

    whosTurn = (): Player => {
        if (this.redCard === null) {
            return Player.Red
        }
        return Player.Blue
    }

    getMessage = (): string => {
        if (this.cards.length === 0) {
            return 'Game in not started'
        }

        if (this.isGameOver()) {
            if (this.redScore == this.blueScore) return `It's a draw!`

            return `And the winner is! ${
                this.redScore > this.blueScore ? 'Red' : 'Blue'
            }!`
        }

        return `${Player[this.whosTurn()]} select your card `
    }

    pickCard = (id: number): void => {
        this.cards = this.cards.map(card => {
            if (card.id === id) {
                if (this.whosTurn() === Player.Red) {
                    card.isRed = true
                    this.redCard = card
                } else {
                    card.isBlue = true
                    this.blueCard = card
                }
            }
            return card
        })

        if (this.redCard !== null && this.blueCard !== null) {
            if (this.redCard.power > this.blueCard.power) {
                this.redScore++
            } else {
                this.blueScore++
            }
            this.redCard = null
            this.blueCard = null
        }
    }

    isGameOver = (): boolean =>
        !this.cards.some(card => !card.isBlue && !card.isRed)
}
