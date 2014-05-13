using System;
using System.Collections.Generic;

namespace CourseBook.DataAccess.Models
{
    public class CourseOccasion
    {
        public virtual int CourseOccasionId { get; set; }

        public virtual int CourseId { get; set; }

        public virtual Course Course { get; set; }

        public virtual int MinNoOfParticipants { get; set; }

        public virtual int MaxNumberOfParticipants { get; set; }

        public virtual DateTime StartDate { get; set; }

        public virtual DateTime ApplicationStartDate { get; set; }

        public virtual DateTime ApplicationEndDate { get; set; }

        public virtual DateTime LastCancellationDate { get; set; }

        public virtual ICollection<CourseParticipants> CourseParticipants { get; set; }
    }
}