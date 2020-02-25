namespace Application.Core.Exceptions
{
    using System;

    using Application.Core.Statics;

    public class InvalidRequestException : Exception
    {
        public InvalidRequestException()
        {
        }

        public InvalidRequestException(string validationResult)
            : base(Messages.InvalidRequest)
        {
            ValidationResult = validationResult;
        }

        public InvalidRequestException(string validationResult, Exception innerException)
            : base(Messages.InvalidRequest, innerException)
        {
            ValidationResult = validationResult;
        }

        public string? ValidationResult { get; }
    }
}