namespace Storage.Setup
{
    using Application.Core.Interfaces;
    using Application.Core.IoC;
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;

    [InstanceForce(InstanceForce.Singleton)]
    public class GameDbContext : DbContext, IGameDbContext
    {
        public GameDbContext(DbContextOptions<GameDbContext> options)
            : base(options)
        {
        }

        public DbSet<Card> Cards { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(GameDbContext).Assembly);
            builder.Seed();            
        }
    }
}