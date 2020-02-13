namespace Application.Core.Interfaces
{
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    public interface IGameDbContext
    {
        DbSet<Card> Cards { get; set; }
    }
}