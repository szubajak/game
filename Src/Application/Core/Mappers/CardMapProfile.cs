namespace Application.Core.Mappers
{
    using System.Globalization;

    using Application.Core.Models;
    using AutoMapper;
    using Domain.Entities;

    public class CardMapProfile : Profile
    {
        public CardMapProfile()
        {
            AllowNullCollections = true;
            CreateMap<Card, CardDto>()
                .ForMember(
                    x => x.Value,
                    opt => opt.MapFrom(src => (int)src.Value <= 10 ? ((int)src.Value).ToString(CultureInfo.InvariantCulture) : src.Value.ToString()));
        }
    }
}