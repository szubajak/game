namespace Application.Queries.GetCard
{
    using Application.Core.DependencyInjection;
    using FluentValidation;

    [InstanceForce(InstanceForce.Singleton)]
    public class GetCardQueryValidator : AbstractValidator<GetCardQuery>
    {
        public GetCardQueryValidator()
        {
            RuleFor(x => x.Id).GreaterThan(0);
        }
    }
}