namespace Application.Core.Mappers
{
    using System.Collections.Generic;
    using System.Linq;

    using Application.Core.IoC;
    using Application.Core.Models;
    using Domain.Entities;

    public interface ICardMappers
    {
        CardDto Map(Card card);

        CardsDto Map(IEnumerable<Card> cards);
    }

    [InstanceForce(InstanceForce.Singleton)]
    public class CardMappers : ICardMappers
    {
        public CardDto Map(Card card) => new CardDto
        {
            Id = card.Id,
            Suit = card.Suit.ToString(),
            Value = card.Value.ToString()
        };

        public CardsDto Map(IEnumerable<Card> cards) => new CardsDto
        {
            Cards = cards.Select(Map)
        };
    }
}