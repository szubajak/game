namespace Application.Queries.GetCards
{
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    using Application.Core.Interfaces;
    using Application.Core.Mappers;
    using Application.Core.Models;
    using MediatR;

    public class GetCardsQueryHandler : IRequestHandler<GetCardsQuery, CardsDto>
    {
        private readonly IGameDbContext _gameDb;

        private readonly ICardMappers _cardMappers;

        public GetCardsQueryHandler(IGameDbContext gameDb, ICardMappers cardMappers)
        {
            _gameDb = gameDb;
            _cardMappers = cardMappers;
        }

        public async Task<CardsDto> Handle(GetCardsQuery request, CancellationToken cancellationToken) =>
           await Task.FromResult(
               _cardMappers.Map(_gameDb.Cards
                   .Skip((request.Page - 1) * request.PageSize)
                   .Take(request.PageSize)
                   .ToList()));
    }
}