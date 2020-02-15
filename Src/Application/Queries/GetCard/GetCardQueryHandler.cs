namespace Application.Queries.GetCard
{
    using System.Threading;
    using System.Threading.Tasks;

    using Application.Core.Interfaces;
    using Application.Core.Log;
    using Application.Core.Models;
    using AutoMapper;
    using LanguageExt;
    using MediatR;
    using Microsoft.Extensions.Logging;

    using static LanguageExt.Prelude;

    public class GetCardQueryHandler : IRequestHandler<GetCardQuery, Option<CardDto>>
    {
        private readonly ILogger<GetCardQueryHandler> _logger;

        private readonly IGameDbContext _gameDb;

        private readonly IMapper _mapper;

        public GetCardQueryHandler(ILogger<GetCardQueryHandler> logger, IGameDbContext gameDb, IMapper mapper)
        {
            _logger = logger;
            _gameDb = gameDb;
            _mapper = mapper;
        }

        public async Task<Option<CardDto>> Handle(GetCardQuery request, CancellationToken cancellationToken) =>
            await TryAsync(async () => await _gameDb.Cards.FindAsync(request.Id))
                .Bind(card => TryAsync(_mapper.Map<CardDto>(card)))
                .Bind(cardDto => TryAsync(Optional(cardDto)))
                .IfFail(e =>
                {
                    _logger.LogError(LogEvents.ServiceFail, e, e.Message);
                    return None;
                });
    }
}