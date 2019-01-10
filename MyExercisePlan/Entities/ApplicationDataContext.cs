using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace MyExercisePlan.Entities
{
    public partial class ApplicationDataContext : DbContext
    {
        public virtual DbSet<U1User> U1User { get; set; }
        public virtual DbSet<U1UserNotification> U1UserNotification { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=WorkoutPlan;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<U1User>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("U1_USER");

                entity.Property(e => e.UserId).HasColumnName("USER_ID");

                entity.Property(e => e.City)
                    .HasColumnName("CITY")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("EMAIL")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FailedAttempts).HasColumnName("FAILED_ATTEMPTS");

                entity.Property(e => e.Firstname)
                    .HasColumnName("FIRSTNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Lastname)
                    .HasColumnName("LASTNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Middlename)
                    .HasColumnName("MIDDLENAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .HasColumnName("STATE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UserAccessId).HasColumnName("USER_ACCESS_ID");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("USERNAME")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<U1UserNotification>(entity =>
            {
                entity.HasKey(e => e.UserNotificationId);

                entity.ToTable("U1_USER_NOTIFICATION");

                entity.Property(e => e.UserNotificationId).HasColumnName("USER_NOTIFICATION_ID");

                entity.Property(e => e.Description)
                    .HasColumnName("DESCRIPTION")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IsActive).HasColumnName("IS_ACTIVE");

                entity.Property(e => e.Severity).HasColumnName("SEVERITY");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("TITLE")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("USER_ID");
            });
        }
    }
}
