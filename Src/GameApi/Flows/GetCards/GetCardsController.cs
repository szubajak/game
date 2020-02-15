namespace GameApi.Flows.GetCards
{
    using System.Threading.Tasks;

    using Application.Core.Models;
    using Application.Queries.GetCards;
    using GameApi.Core.Abstractions;
    using GameApi.Core.Constants;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [ApiExplorerSettings(GroupName = ApiGroups.Card)]
    public class GetCardsController : GameController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status502BadGateway)]
        public async Task<IActionResult> Execute(int pageNumber = 1, int pageSize = 2) =>
            (await Mediator.Send(new GetCardsQuery
            {
               Page = new PageDto(pageNumber, pageSize)
            }))
            .Match<IActionResult>(Ok, StatusCode(StatusCodes.Status502BadGateway));
    }
}