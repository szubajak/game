namespace Application.Core.Handlers
{
    using System.Threading.Tasks;

    using Application.Core.DependencyInjection;
    using Application.Core.Exceptions;
    using FluentValidation;

    public interface IValidationHandler
    {
        Task<T> ValidateAsync<T>(T intent);
    }

    [InstanceForce(InstanceForce.Singleton)]
    public class ValidationHandler : IValidationHandler
    {
        private readonly IValidatorFactory _validatorFactory;

        public ValidationHandler(IValidatorFactory validatorFactory)
        {
            _validatorFactory = validatorFactory;
        }

        public async Task<T> ValidateAsync<T>(T intent)
        {
            var validator = _validatorFactory.GetValidator<T>();
            var validationResult = await validator.ValidateAsync(intent);

            if (!validationResult.IsValid)
            {
                throw new InvalidRequestException(validationResult.ToString());
            }

            return intent;
        }
    }
}