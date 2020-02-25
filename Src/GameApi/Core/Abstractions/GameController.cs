namespace GameApi.Core.Abstractions
{
    using System;

    using Application.Core.Exceptions;
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.DependencyInjection;

    [Route("[controller]")]
    public abstract class GameController : ControllerBase
    {
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected IActionResult HandleException(Exception exception) =>
            exception switch
            {
                InvalidRequestException validationException => BadRequest(validationException.ValidationResult),
                _ => StatusCode(StatusCodes.Status502BadGateway),
            };
    }
}