namespace Application.Core.Mappers
{
    using Application.Core.Models;
    using AutoMapper;
    using Domain.Entities;

    public class CardMapProfile : Profile
    {
        public CardMapProfile()
        {
            AllowNullCollections = true;
            CreateMap<Card, CardDto>();
        }
    }
}