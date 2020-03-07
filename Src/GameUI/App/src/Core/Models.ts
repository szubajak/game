export enum Player {
    White,
    Black,
}

export enum BattleState {
    WaitingForFighter,
    WaitingForFaceDownFighter,
    BlackWon,
    WhiteWon,
}

export enum CardState {
    Victorious,
    Defeated,
    FaceDown,
    InBattle,
    InBattleFaceDown,
}

export interface BorderColor {
    bordercolor: string
}

export interface BackgroundColor {
    backgroundcolor: string
}

export interface FontColor {
    fontcolor: string
}

export interface GameBoard {
    whiteCards: Array<GameCard>
    blackCards: Array<GameCard>
    infoMessage: string
    someMethod: () => void
}

export interface CardsBattle {
    fighters: Array<GameCard>
    faceDownFighters: Array<GameCard>
}

export interface GameCard extends Card {
    state: CardState
    owner: Player
}

export type Card = {
    id: number
    suit: string
    name: string
    power: number
    icon: string
}

export type Cards = {
    cards: Card[]
}
