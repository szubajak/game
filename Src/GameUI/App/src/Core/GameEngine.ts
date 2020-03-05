import { Subject } from 'rxjs'
import {
    Card,
    Player,
    CardState,
    GameCard,
    GameBoard,
    CardsBattle,
    BattleState,
} from './Models'
import { getCards } from './GameService'

export class GameEngine {
    gameBoard: Subject<GameBoard> = new Subject<GameBoard>()
    status: Subject<string> = new Subject<string>()

    private _gameBoard: GameBoard
    private _status: string
    private _cards: Array<Card> = new Array<Card>()
    private _currentPlayer: Player = Player.White
    private _battle: CardsBattle
    private _holdTheGame: boolean

    constructor() {
        this._gameBoard = this.createNewGameBoard(
            new Array<GameCard>(),
            new Array<GameCard>()
        )
        this._battle = this.resetBattle()
        this._status = this.getStatus()
        this._holdTheGame = false
    }

    async startNewGame(): Promise<void> {
        if (!this.isLoaded()) {
            this._cards = (await getCards()).cards
        }

        this.resetGame()
        this.notifyChanges()
    }

    trySelectNextGameCard = (id: number): void => {
        if (this._holdTheGame) return

        const selectedCard = this.getCard(id)
        if (!selectedCard) return

        this.goFight(selectedCard)

        this._currentPlayer = this.nextPlayer()
        this._status = this.getStatus()
        this.notifyChanges()
    }

    private notifyChanges(): void {
        this.status.next(this._status)
        this.gameBoard.next(this._gameBoard)
    }

    private goFight = (fighter: GameCard): void => {
        const battleState = this.getBattleState()

        if (battleState === BattleState.WaitingForFaceDownFighter) {
            fighter.state = CardState.InBattleFaceDown
            this._battle.faceDownFighters.push(fighter)
        }

        if (battleState === BattleState.WaitingForFighter) {
            fighter.state = CardState.InBattle
            this._battle.fighters.push(fighter)
        }

        this.updateCard(fighter)
        this.notifyChanges()

        this.checkBattleResult()
    }

    private checkBattleResult = (): void => {
        const battleState = this.getBattleState()

        if (
            battleState === BattleState.BlackWon ||
            battleState === BattleState.WhiteWon
        ) {
            this._holdTheGame = true

            setTimeout(
                this.clearBattlefield,
                500,
                battleState === BattleState.BlackWon
                    ? Player.Black
                    : Player.White
            )
        }
    }

    private clearBattlefield = (winner: Player): void => {
        console.log(Player[winner])
        this.distributeCards(
            [...this._battle.fighters, ...this._battle.faceDownFighters],
            winner
        )

        this._battle = this.resetBattle()
        this._holdTheGame = false
        this.notifyChanges()
    }

    private distributeCards = (
        cards: Array<GameCard>,
        winner: Player
    ): void => {
        this._gameBoard.whiteCards = this._gameBoard.whiteCards.filter(
            x => !cards.includes(x)
        )
        this._gameBoard.blackCards = this._gameBoard.blackCards.filter(
            x => !cards.includes(x)
        )

        if (winner === Player.Black) {
            cards = cards.map(x => {
                x.state = CardState.FaceDown
                x.owner = Player.Black
                return x
            })

            this._gameBoard.blackCards.push(...cards)
            this._gameBoard.blackCards = this.shuffleGameCards(
                this._gameBoard.blackCards
            )
        } else {
            cards = cards.map(x => {
                x.state = CardState.FaceDown
                x.owner = Player.White
                return x
            })

            this._gameBoard.whiteCards.push(...cards)
            this._gameBoard.whiteCards = this.shuffleGameCards(
                this._gameBoard.whiteCards
            )
        }
    }

    private getBattleState = (): BattleState => {
        const fightersCount = this._battle.fighters.length
        const faceDownFightersCount = this._battle.faceDownFighters.length

        if (fightersCount === faceDownFightersCount || fightersCount % 2 != 0)
            return BattleState.WaitingForFighter

        const whiteSum = this._battle.fighters
            .filter(x => x.owner === Player.White)
            .reduce((sum, current) => sum + current.power, 0)

        const blackSum = this._battle.fighters
            .filter(x => x.owner === Player.Black)
            .reduce((sum, current) => sum + current.power, 0)

        if (whiteSum > blackSum) {
            return BattleState.WhiteWon
        }

        if (blackSum > whiteSum) {
            return BattleState.BlackWon
        }

        if (fightersCount > faceDownFightersCount) {
            return BattleState.WaitingForFaceDownFighter
        }

        return BattleState.WaitingForFighter
    }

    private getStatus = (): string => {
        if (!this.isLoaded()) {
            return 'game is not started'
        }

        const gameWinner = this.getGameWinner()
        if (gameWinner != null) {
            return 'player ' + gameWinner + 'has won the game!'
        }

        return (
            'current player: ' +
            Player[
                this._currentPlayer === Player.Black
                    ? Player.Black
                    : Player.White
            ]
        )
    }

    private getGameWinner = (): string | null => {
        if (!this.isGameOver()) return null

        return Player[
            this._gameBoard.blackCards.length === 0
                ? Player.White
                : Player.Black
        ]
    }

    private isGameOver = (): boolean => {
        return (
            this._gameBoard.blackCards.length === 0 ||
            this._gameBoard.whiteCards.length === 0
        )
    }

    private getCard = (id: number): GameCard | undefined => {
        if (this._currentPlayer === Player.White) {
            return this._gameBoard.whiteCards.find(x => x.id === id)
        }

        return this._gameBoard.blackCards.find(x => x.id === id)
    }
    private updateCard = (gameCard: GameCard): void => {
        if (this._currentPlayer === Player.White) {
            this._gameBoard.whiteCards = this._gameBoard.whiteCards.map(x => {
                return x.id === gameCard.id ? gameCard : x
            })
        } else {
            this._gameBoard.blackCards = this._gameBoard.blackCards.map(x => {
                return x.id === gameCard.id ? gameCard : x
            })
        }
    }

    private resetBattle = (): CardsBattle => {
        return {
            fighters: new Array<GameCard>(),
            faceDownFighters: new Array<GameCard>(),
        } as CardsBattle
    }

    private nextPlayer = (): Player => {
        return this._currentPlayer === Player.Black
            ? Player.White
            : Player.Black
    }

    private resetGame = (): void => {
        const resetCard = (card: Card, player: Player): GameCard => {
            return {
                id: card.id,
                power: card.power,
                suit: card.suit,
                name: card.name,
                state: CardState.FaceDown,
                owner: player,
            } as GameCard
        }

        const shuffledCards = this.shuffleCards(this._cards)

        const whiteCards = shuffledCards
            .slice(0, 26)
            .map(card => resetCard(card, Player.White))

        const blackCards = shuffledCards
            .slice(26, 52)
            .map(card => resetCard(card, Player.Black))

        this._gameBoard = this.createNewGameBoard(whiteCards, blackCards)
        this._status = this.getStatus()
    }

    private createNewGameBoard = (
        whiteCards: Array<GameCard>,
        blackCards: Array<GameCard>
    ): GameBoard => {
        return {
            whiteCards: whiteCards,
            blackCards: blackCards,
            someMethod: () => {
                return
            },
        } as GameBoard
    }

    private shuffleCards = (cards: Array<Card>): Array<Card> =>
        cards
            .map(card => ({ sort: Math.random(), value: card }))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)

    private shuffleGameCards = (cards: Array<GameCard>): Array<GameCard> =>
        cards
            .map(card => ({ sort: Math.random(), value: card }))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)

    private isLoaded = (): boolean => this._cards.length > 0
}
