﻿namespace GameApi.Flows.GetCard
{
    using System.Threading.Tasks;

    using Application.Queries.GetCard;
    using GameApi.Core.Abstractions;
    using GameApi.Core.Constants;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [ApiExplorerSettings(GroupName = ApiGroups.Card)]
    public class GetCardController : GameController
    {
        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> Execute(int id)
        {
            var result = await Mediator.Send(new GetCardQuery
            { 
                Id = id
            });
            return Ok(result);
        }
    }
}