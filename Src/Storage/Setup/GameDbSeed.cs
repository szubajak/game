namespace Storage.Setup
{
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    public static class GameDbSeed
    {
        public static void Seed(this ModelBuilder builder)
        {
            builder.Entity<Card>().HasData(GetCards());
        }

        private static Card[] GetCards() => new[]
        {
            new Card
            {
                Id = 1,
                Suit = CardSuit.Hearts,
                Value = CardValue.King
            },
            new Card
            {
                Id = 2,
                Suit = CardSuit.Spades,
                Value = CardValue.Jack
            },
            new Card
            {
                Id = 3,
                Suit = CardSuit.Diamonds,
                Value = CardValue.Five
            },
            new Card
            {
                Id = 4,
                Suit = CardSuit.Clubs,
                Value = CardValue.Joker
            }
        };
    }
}