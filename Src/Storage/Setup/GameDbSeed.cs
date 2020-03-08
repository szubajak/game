namespace Storage.Setup
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    public static class GameDbSeed
    {
        public static void Seed(this ModelBuilder builder)
        {
            builder.Entity<Card>().HasData(GetCards());
        }

        private static List<Card> GetCards() => 
            Enum.GetValues(typeof(CardSuit))
                .Cast<CardSuit>()
                .Aggregate(new List<Card>(), (list, suit) => 
                {
                    Enum.GetValues(typeof(CardValue))
                        .Cast<CardValue>()
                        .ToList()
                        .ForEach(value =>
                        {
                            list.Add(new Card
                            {
                                Id = list.Count + 1,
                                Suit = suit,
                                Value = value,
                                Icon = GetIcon(suit, value)
                            });
                        });

                    return list;
                });

        private static string GetIcon(CardSuit suit, CardValue value) => 
            suit switch
            {
                CardSuit.Clubs => GetClubsIcon(value),
                CardSuit.Diamonds => GetDiamondsIcon(value),
                CardSuit.Hearts => GetHeartsIcon(value),
                CardSuit.Spades => GetSpadesIcon(value),
                _ => string.Empty,
            };

        private static string GetClubsIcon(CardValue value) =>
            value switch
            {
                CardValue.Two => "\uD83C\uDCD2",
                CardValue.Three => "\uD83C\uDCD3",
                CardValue.Four => "\uD83C\uDCD4",
                CardValue.Five => "\uD83C\uDCD5",
                CardValue.Six => "\uD83C\uDCD6",
                CardValue.Seven => "\uD83C\uDCD7",
                CardValue.Eight => "\uD83C\uDCD8",
                CardValue.Nine => "\uD83C\uDCD9",
                CardValue.Ten => "\uD83C\uDCDA",
                CardValue.Jack => "\uD83C\uDCDB",
                CardValue.Queen => "\uD83C\uDCDD",
                CardValue.King => "\uD83C\uDCDE",
                CardValue.Ace => "\uD83C\uDCD1",
                CardValue.Joker => "\uD83C\uDCDF",
                _ => string.Empty,
            };

        private static string GetHeartsIcon(CardValue value) =>
            value switch
            {
                CardValue.Two => "\uD83C\uDCB2",
                CardValue.Three => "\uD83C\uDCB3",
                CardValue.Four => "\uD83C\uDCB4",
                CardValue.Five => "\uD83C\uDCB5",
                CardValue.Six => "\uD83C\uDCB6",
                CardValue.Seven => "\uD83C\uDCB7",
                CardValue.Eight => "\uD83C\uDCB8",
                CardValue.Nine => "\uD83C\uDCB9",
                CardValue.Ten => "\uD83C\uDCBA",
                CardValue.Jack => "\uD83C\uDCBB",
                CardValue.Queen => "\uD83C\uDCBD",
                CardValue.King => "\uD83C\uDCBE",
                CardValue.Ace => "\uD83C\uDCB1",
                CardValue.Joker => "\uD83C\uDCDF",
                _ => string.Empty,
            };

        private static string GetSpadesIcon(CardValue value) =>
            value switch
            {
                CardValue.Two => "\uD83C\uDCA2",
                CardValue.Three => "\uD83C\uDCA3",
                CardValue.Four => "\uD83C\uDCA4",
                CardValue.Five => "\uD83C\uDCA5",
                CardValue.Six => "\uD83C\uDCA6",
                CardValue.Seven => "\uD83C\uDCA7",
                CardValue.Eight => "\uD83C\uDCA8",
                CardValue.Nine => "\uD83C\uDCA9",
                CardValue.Ten => "\uD83C\uDCAA",
                CardValue.Jack => "\uD83C\uDCAB",
                CardValue.Queen => "\uD83C\uDCAD",
                CardValue.King => "\uD83C\uDCAE",
                CardValue.Ace => "\uD83C\uDCA1",
                CardValue.Joker => "\uD83C\uDCDF",
                _ => string.Empty,
            };

        private static string GetDiamondsIcon(CardValue value) =>
            value switch
            {
                CardValue.Two => "\uD83C\uDCC2",
                CardValue.Three => "\uD83C\uDCC3",
                CardValue.Four => "\uD83C\uDCC4",
                CardValue.Five => "\uD83C\uDCC5",
                CardValue.Six => "\uD83C\uDCC6",
                CardValue.Seven => "\uD83C\uDCC7",
                CardValue.Eight => "\uD83C\uDCC8",
                CardValue.Nine => "\uD83C\uDCC9",
                CardValue.Ten => "\uD83C\uDCCA",
                CardValue.Jack => "\uD83C\uDCCB",
                CardValue.Queen => "\uD83C\uDCCD",
                CardValue.King => "\uD83C\uDCCE",
                CardValue.Ace => "\uD83C\uDCC1",
                CardValue.Joker => "\uD83C\uDCDF",
                _ => string.Empty,
            };
    }
}