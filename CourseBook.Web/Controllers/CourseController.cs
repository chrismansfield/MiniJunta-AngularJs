using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web.Http;
using CourseBook.DataAccess;
using CourseBook.DataAccess.Models;

namespace CourseBook.Web.Controllers
{
    public class CourseController : ApiController
    {
        private CourseBookContext _db;

        public CourseController()
        {
            _db = new CourseBookContext();
        }

        public IEnumerable<Course> Get()
        {
            return _db.Courses;
        }

        public Course Get(int id)
        {
            var course =  _db.Courses.SingleOrDefault(x => x.CourseId == id);
            if (course != null)
                return course;
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        public Course Post(Course course)
        {
            course.CreatedDate = DateTime.Now;
            _db.Entry(course).State = EntityState.Added;
            _db.SaveChanges();
            return course;
        }

    }
}