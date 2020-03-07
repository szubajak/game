namespace Application.Core.Dtos
{
    public class CardDto
    {
        public int Id { get; set; }

        public string? Suit { get; set; }

        public string? Name { get; set; }

        public int Power { get; set; }

        public string? Icon { get; set; }
    }
}