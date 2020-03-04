namespace Storage.Setup
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
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
                                Value = value
                            });
                        });

                    return list;
                });
    }
}