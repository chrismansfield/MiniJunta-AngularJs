using System;
using System.Collections.Generic;

namespace CourseBook.DataAccess.Models
{
    public class Course
    {
        public virtual int CourseId { get; set; }

        public virtual string Name { get; set; }

        public virtual string Description { get; set; }

        public virtual DateTime CreatedDate { get; set; }

        public virtual CourseType CourseType { get; set; }

        public virtual ICollection<CourseOccasion> CourseOccasions { get; set; }

    }
}
