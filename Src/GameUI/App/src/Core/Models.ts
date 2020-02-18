export enum Player {
    Red,
    Blue,
}

export type Card = {
    id: number
    suit: string
    value: string
    power: number
    isBlue: boolean
    isRed: boolean
}

export type Cards = {
    cards: Card[]
}
