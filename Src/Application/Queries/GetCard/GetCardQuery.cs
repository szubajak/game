namespace Application.Queries.GetCard
{
    using Application.Core.Models;
    using LanguageExt;
    using MediatR;

    public class GetCardQuery : IRequest<Option<CardDto>>
    {
        public int Id { get; set; }
    }
}