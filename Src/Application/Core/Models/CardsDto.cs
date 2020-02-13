namespace Application.Core.Models
{
    using System.Collections.Generic;

    public class CardsDto
    {
        public IEnumerable<CardDto> Cards { get; set; }
    }
}