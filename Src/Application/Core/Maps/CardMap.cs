namespace Application.Core.Maps
{
    using System.Globalization;

    using Application.Core.Dtos;
    using AutoMapper;
    using Domain.Entities;

    public class CardMap : Profile
    {
        public CardMap()
        {
            AllowNullCollections = true;
            CreateMap<Card, CardDto>()
                .ForMember(
                    x => x.Value,
                    opt => opt.MapFrom(src => MapCardValueToString(src.Value)));
        }

        private string MapCardValueToString(CardValue cardValue) =>
            (int)cardValue > 10
                ? cardValue.ToString()
                : ((int)cardValue).ToString(CultureInfo.InvariantCulture);
    }
}