﻿namespace Application.Core.Dtos
{
    public class CardDto
    {
        public int Id { get; set; }

        public string? Suit { get; set; }

        public string? Value { get; set; }

        public double Power { get; set; }
    }
}