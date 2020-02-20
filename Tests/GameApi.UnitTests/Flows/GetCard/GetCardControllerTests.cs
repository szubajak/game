namespace GameApi.UnitTests.Flows.GetCard
{
    using System.Threading.Tasks;

    using Application.Core.Models;
    using Application.Queries.GetCard;
    using FluentAssertions;
    using GameApi.Flows.GetCard;
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
        public async Task Execute_CardExists_ShouldReturnCard()
        {
            // Arrange
            var id = 1;
            var cardDto = new CardDto 
            { 
                Id = id,
                Suit = TestData.GetRandomString(),
                Value = TestData.GetRandomString() 
            };

            _mockMediator.Send(Arg.Any<GetCardQuery>(), default).Returns(cardDto);

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

            _mockMediator.Send(Arg.Any<GetCardQuery>(), default).Returns(None);

            // Act
            var result = await _controller.Execute(id);

            // Assert
            result.Should().BeEquivalentTo(new NotFoundResult());
        }
    }
}