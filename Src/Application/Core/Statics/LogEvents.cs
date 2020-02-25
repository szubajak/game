namespace Application.Core.Statics
{
    using Microsoft.Extensions.Logging;

    public static class LogEvents
    {
        public static EventId InvalidRequest = new EventId(1, nameof(InvalidRequest));

        public static EventId RequestFail = new EventId(2, nameof(RequestFail));
    }
}