namespace Application.Queries.GetCards
{
    using System.Linq;
    using System.Threading;
    using System.Threading.Tasks;

    using Application.Core.Interfaces;
    using Application.Core.Log;
    using Application.Core.Models;
    using AutoMapper;
    using LanguageExt;
    using MediatR;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;

    using static LanguageExt.Prelude;

    public class GetCardsQueryHandler : IRequestHandler<GetCardsQuery, Option<CardsDto>>
    {
        private readonly ILogger<GetCardsQueryHandler> _logger;

        private readonly IGameDbContext _gameDb;

        private readonly IMapper _mapper;

        public GetCardsQueryHandler(ILogger<GetCardsQueryHandler> logger, IGameDbContext gameDb, IMapper mapper)
        {
            _logger = logger;
            _gameDb = gameDb;
            _mapper = mapper;
        }

        public async Task<Option<CardsDto>> Handle(GetCardsQuery request, CancellationToken cancellationToken) =>
            await TryAsync(_gameDb.Cards.Skip(request.Page.CalculateSkip()).Take(request.Page.Size))
                .BindAsync(async cards => TryAsync(new CardsDto { Cards = await _mapper.ProjectTo<CardDto>(cards).ToListAsync() }))
                .Bind(cardsDto => TryAsync(Some(cardsDto)))
                .IfFail(e =>
                {
                    _logger.LogError(LogEvents.ServiceFail, e, e.Message);
                    return None;
                });
    }
}