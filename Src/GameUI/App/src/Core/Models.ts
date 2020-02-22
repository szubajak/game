export enum Player {
    Green,
    Blue,
    Croupier,
}

export enum CardState {
    Victorious,
    Defeated,
    ReadyToBattle,
}

export interface GameCard extends Card {
    player: Player
    state: CardState
}

export type Card = {
    id: number
    suit: string
    value: string
    power: number
}

export type Cards = {
    cards: Card[]
}
