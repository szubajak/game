namespace Application.Queries.GetCards
{
    using Application.Core.DependencyInjection;
    using FluentValidation;

    [InstanceForce(InstanceForce.Singleton)]
    public class GetCardsQueryValidator : AbstractValidator<GetCardsQuery>
    {
        public GetCardsQueryValidator()
        {
            RuleFor(x => x.Limit).GreaterThan(0);
            RuleFor(x => x.Offset).GreaterThanOrEqualTo(0);
        }
    }
}