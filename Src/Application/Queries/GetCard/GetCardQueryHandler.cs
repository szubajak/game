namespace Application.Queries.GetCard
{
    using System.Threading;
    using System.Threading.Tasks;

    using Application.Core.Dtos;
    using Application.Core.Handlers;
    using Application.Core.Interfaces;
    using Application.Core.Statics;
    using AutoMapper;
    using Domain.Entities;
    using LanguageExt;
    using LanguageExt.Common;
    using MediatR;
    using Microsoft.Extensions.Logging;

    using static LanguageExt.Prelude;

    public class GetCardQueryHandler : IRequestHandler<GetCardQuery, OptionalResult<CardDto>>
    {
        private readonly ILogger<GetCardQueryHandler> _logger;

        private readonly IGameDbContext _gameDb;

        private readonly IMapper _mapper;

        private readonly IValidationHandler _validator;

        public GetCardQueryHandler(
            ILogger<GetCardQueryHandler> logger,
            IGameDbContext gameDb,
            IMapper mapper,
            IValidationHandler validator)
        {
            _logger = logger;
            _gameDb = gameDb;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task<OptionalResult<CardDto>> Handle(GetCardQuery request, CancellationToken cancellationToken) =>
            await ValidateRequest(request)
                    .Bind(HandleQuery)
                    .Bind(MapToDto)
                    .Bind(MapToResult)
                    .IfFail(e =>
                    {
                        _logger.LogError(LogEvents.RequestFail, e, e.Message);
                        return new OptionalResult<CardDto>(e);
                    });

        private TryAsync<GetCardQuery> ValidateRequest(GetCardQuery request) =>
            TryAsync(async () => await _validator.ValidateAsync(request));

        private TryAsync<Card> HandleQuery(GetCardQuery request) =>
            TryAsync(async () => await _gameDb.Cards.FindAsync(request.Id));

        private TryAsync<CardDto> MapToDto(Card card) => 
            TryAsync(_mapper.Map<CardDto>(card));

        private TryAsync<OptionalResult<CardDto>> MapToResult(CardDto cardDto) =>
            TryAsync(new OptionalResult<CardDto>(Optional(cardDto)));
    }
}