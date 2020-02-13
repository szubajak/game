namespace Application.Queries.GetCard
{
    using Application.Core.IoC;
    using Application.Core.Models;
    using MediatR;

    [InstanceForce(InstanceForce.Transient)]
    public class GetCardQuery : IRequest<CardDto>
    {
        public int Id { get; set; }
    }
}