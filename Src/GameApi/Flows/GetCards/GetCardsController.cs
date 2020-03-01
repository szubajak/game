namespace GameApi.Flows.GetCards
{
    using System.Threading.Tasks;

    using Application.Queries.GetCards;
    using GameApi.Core.Abstractions;
    using GameApi.Core.Statics;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [ApiExplorerSettings(GroupName = ApiGroups.Card)]
    public class GetCardsController : GameController
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status502BadGateway)]
        public async Task<IActionResult> Execute(int? limit, int? offset, bool randomize = true) =>
            (await Mediator.Send(new GetCardsQuery
            {
               Limit = limit,
               Offset = offset,
               Randomize = randomize
            }))
            .Match(
                Succ: Ok, 
                Fail: HandleException);
    }
}