namespace Application.Queries.GetCards
{
    using Application.Core.Dtos;
    using LanguageExt.Common;
    using MediatR;

    public class GetCardsQuery : IRequest<Result<CardsDto>>
    {
        public int? Limit { get; set; }

        public int? Offset { get; set; }

        public bool Randomize { get; set; }
    }
}