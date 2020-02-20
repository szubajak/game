namespace GameApi.UnitTests
{
    using System;

    public static class TestData
    {
        public static string GetRandomString() => Guid.NewGuid().ToString().Replace("-", string.Empty, StringComparison.OrdinalIgnoreCase);

        public static int GetRandomInt(int min = 0, int max = 2147483647) => new Random(unchecked((int)DateTime.Now.Ticks)).Next(min, max);
    }
}