namespace GameApi.UnitTests.Flows.GetCard
{
    using System.Threading.Tasks;

    using Application.Core.Dtos;
    using Application.Core.Exceptions;
    using Application.Queries.GetCard;
    using FluentAssertions;
    using GameApi.Flows.GetCard;
    using LanguageExt.Common;
    using MediatR;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using NSubstitute;
    using Xunit;

    using static LanguageExt.Prelude;

    public class GetCardControllerTests
    {
        private readonly GetCardController _controller;

        private readonly HttpContext _mockHttpContext;

        private readonly IMediator _mockMediator;

        public GetCardControllerTests()
        {
            _mockHttpContext = Substitute.For<HttpContext>();
            _mockMediator = Substitute.For<IMediator>();
            _mockHttpContext.RequestServices.GetService(typeof(IMediator)).Returns(_mockMediator);

            _controller = new GetCardController
            {
                ControllerContext = new ControllerContext()
                {
                    HttpContext = _mockHttpContext
                }
            };
        }

        [Fact]
        public async Task Execute_InvalidId_ShouldReturnBadRequest()
        {
            // Arrange
            var id = 0;
            var errorMessage = TestData.GetRandomString();
            var exception = new InvalidRequestException(errorMessage);
            var response = new OptionalResult<CardDto>(exception);

            _mockMediator.Send(Arg.Is<GetCardQuery>(q => q.Id.Equals(id)), default).Returns(response);

            // Act
            var result = await _controller.Execute(id);

            // Assert
            result.Should().BeEquivalentTo(new BadRequestObjectResult(errorMessage));
        }

        [Fact]
        public async Task Execute_CardExists_ShouldReturnCard()
        {
            // Arrange
            var id = TestData.GetRandomInt();
            var cardDto = new CardDto 
            { 
                Id = id,
                Suit = TestData.GetRandomString(),
                Name = TestData.GetRandomString()
            };
            var response = new OptionalResult<CardDto>(Some(cardDto));

            _mockMediator.Send(Arg.Is<GetCardQuery>(q => q.Id.Equals(id)), default).Returns(response);

            // Act
            var result = await _controller.Execute(id);

            // Assert
            result.Should().BeEquivalentTo(new OkObjectResult(cardDto));
        }

        [Fact]
        public async Task Execute_CardNotExists_ShouldReturn404NotFound()
        {
            // Arrange
            var id = TestData.GetRandomInt();
            var response = new OptionalResult<CardDto>(None);

            _mockMediator.Send(Arg.Is<GetCardQuery>(q => q.Id.Equals(id)), default).Returns(response);

            // Act
            var result = await _controller.Execute(id);

            // Assert
            result.Should().BeEquivalentTo(new NotFoundResult());
        }
    }
}