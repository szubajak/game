namespace Application.Core.Dtos
{
    using System.Collections.Generic;

    public class CardsDto
    {
        public IEnumerable<CardDto>? Cards { get; set; }
    }
}