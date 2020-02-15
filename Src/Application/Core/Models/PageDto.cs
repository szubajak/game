namespace Application.Core.Models
{
    public class PageDto
    {
        public PageDto(int number, int size)
        {
            Number = number;
            Size = size;
        }

        public int Number { get; private set; } = 0;

        public int Size { get; private set; } = 0;

        public int CalculateSkip() => (Number - 1) * Size;
    }
}