namespace Domain.Entities
{
    public enum CardValue
    {
        Two = 2,
        Three = 3,
        Four = 4,
        Five = 5,
        Six = 6,
        Seven = 7,
        Eight = 8,
        Nine = 9,
        Ten = 10,
        Jack = 11,
        Queen = 12,
        King = 13,
        Ace = 14,
        Joker = 100
    }

    public enum CardSuit
    {
        Clubs,
        Diamonds,
        Hearts,
        Spades
    }

    public class Card
    {
        public int Id { get; set; }

        public CardSuit Suit { get; set; }

        public CardValue Value { get; set; }

        public string? Icon { get; set; }
    }
}