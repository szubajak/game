namespace Application.Core.Log
{
    using Microsoft.Extensions.Logging;

    public static class LogEvents
    {
        public static EventId ServiceFail = new EventId(1, nameof(ServiceFail));
    }
}