using System.Data.Entity;
using CourseBook.DataAccess.Models;

namespace CourseBook.DataAccess
{
    public class CourseBookContext : DbContext
    {
        public DbSet<Course> Courses { get; set; }

        public DbSet<CourseOccasion> CourseOccasions { get; set; }

        public DbSet<CourseParticipants> CourseParticipants { get; set; }
    }
}