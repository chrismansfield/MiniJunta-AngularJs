using System.Collections.Generic;
using System.Web.Http;
using CourseBook.DataAccess;
using CourseBook.Web.Models;

namespace CourseBook.Web.Controllers
{
    public class CourseTypesController : ApiController
    {
        private CourseBookContext _db;

        public CourseTypesController()
        {
            _db = new CourseBookContext();
        }

        public IEnumerable<CourseType> Get()
        {
            return new[]
            {
                new CourseType {Value = 1, Text = "Utbildning"},
                new CourseType {Value = 2, Text = "Aktivitet"}
            };
        }

    }
}