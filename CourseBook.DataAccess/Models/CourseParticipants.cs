namespace CourseBook.DataAccess.Models
{
    public class CourseParticipants
    {
        public virtual int CourseParticipantsId { get; set; }

        public virtual int CourseOccasionId { get; set; }

        public virtual CourseOccasion CourseOccasion { get; set; }

        public virtual string Name { get; set; }
    }
}