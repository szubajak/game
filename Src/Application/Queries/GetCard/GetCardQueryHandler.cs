namespace Application.Queries.GetCard
{
    using System.Threading;
    using System.Threading.Tasks;

    using Application.Core.Interfaces;
    using Application.Core.IoC;
    using Application.Core.Mappers;
    using Application.Core.Models;
    using MediatR;

    [InstanceForce(InstanceForce.Transient)]
    public class GetCardQueryHandler : IRequestHandler<GetCardQuery, CardDto>
    {
        private readonly IGameDbContext _gameDb;

        private readonly ICardMappers _cardMappers;

        public GetCardQueryHandler(IGameDbContext gameDb, ICardMappers cardMappers)
        {
            _gameDb = gameDb;
            _cardMappers = cardMappers;
        }

        public async Task<CardDto> Handle(GetCardQuery request, CancellationToken cancellationToken) =>
            _cardMappers.Map(await _gameDb.Cards.FindAsync(request.Id));
    }
}