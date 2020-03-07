namespace Storage.Schema
{
    using Domain.Entities;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class CardConfiguration : IEntityTypeConfiguration<Card>
    {
        public void Configure(EntityTypeBuilder<Card> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Suit)
                .IsRequired();
            builder.Property(x => x.Value)
                .IsRequired();
            builder.Property(x => x.Icon)
                .IsRequired();
        }
    }
}