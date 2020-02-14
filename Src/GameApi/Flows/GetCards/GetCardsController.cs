namespace GameApi.Flows.GetCards
{
    using System.Threading.Tasks;

    using Application.Queries.GetCards;
    using GameApi.Core.Abstractions;
    using GameApi.Core.Constants;
    using Microsoft.AspNetCore.Mvc;

    [ApiExplorerSettings(GroupName = ApiGroups.Card)]
    public class GetCardsController : GameController
    {
        [HttpGet]
        public async Task<IActionResult> Execute(int? page, int? pageSize)
        {
            var result = await Mediator.Send(new GetCardsQuery
            {
                Page = page ?? 1,
                PageSize = pageSize ?? 2
            });
            return Ok(result);
        }
    }
}