namespace Application.Queries.GetCards
{
    using Application.Core.IoC;
    using Application.Core.Models;
    using MediatR;

    [InstanceForce(InstanceForce.Transient)]
    public class GetCardsQuery : IRequest<CardsDto>
    {
        public int Page { get; set; }

        public int PageSize { get; set; }
    }
}