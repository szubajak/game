namespace Application.Queries.GetCards
{
    using Application.Core.Models;
    using LanguageExt;
    using MediatR;

    public class GetCardsQuery : IRequest<Option<CardsDto>>
    {
        public PageDto Page { get; set; }
    }
}