namespace Application.Queries.GetCards
{
    using System;
    using System.Linq;
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
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;

    using static LanguageExt.Prelude;

    public class GetCardsQueryHandler : IRequestHandler<GetCardsQuery, Result<CardsDto>>
    {
        public static int DefaultLimit = 100;

        private readonly ILogger<GetCardsQueryHandler> _logger;

        private readonly IGameDbContext _gameDb;

        private readonly IMapper _mapper;

        private readonly IValidationHandler _validator;

        public GetCardsQueryHandler(
            ILogger<GetCardsQueryHandler> logger,
            IGameDbContext gameDb,
            IMapper mapper,
            IValidationHandler validator)
        {
            _logger = logger;
            _gameDb = gameDb;
            _mapper = mapper;
            _validator = validator;
        }

        public async Task<Result<CardsDto>> Handle(GetCardsQuery request, CancellationToken cancellationToken) =>
            await ValidateRequest(request)
                    .Bind(HandleQuery)
                    .Bind(MapToDto)
                    .Bind(MapToResult)
                    .IfFail(e =>
                    {
                        _logger.LogError(LogEvents.RequestFail, e, e.Message);
                        return new Result<CardsDto>(e);
                    });

        private TryAsync<GetCardsQuery> ValidateRequest(GetCardsQuery request) =>
            TryAsync(async () => await _validator.ValidateAsync(request));

        private TryAsync<IQueryable<Card>> HandleQuery(GetCardsQuery request) =>
            TryAsync(_gameDb.Cards
                            .Skip(request.Offset ?? 0)
                            .OrderBy(x => Guid.NewGuid())
                            .Take(request.Limit ?? DefaultLimit));

        private TryAsync<CardsDto> MapToDto(IQueryable<Card> cards) =>
            TryAsync(async () => 
                new CardsDto 
                { 
                    Cards = await _mapper.ProjectTo<CardDto>(cards).ToListAsync() 
                });

        private TryAsync<Result<CardsDto>> MapToResult(CardsDto cardsDto) =>
            TryAsync(new Result<CardsDto>(cardsDto));
    }
}