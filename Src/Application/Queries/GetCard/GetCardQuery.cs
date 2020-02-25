namespace Application.Queries.GetCard
{
    using Application.Core.Dtos;
    using LanguageExt.Common;
    using MediatR;

    public class GetCardQuery : IRequest<OptionalResult<CardDto>>
    {
        public int Id { get; set; }
    }
}