using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Movies1711.Controllers
{
    public class PageController : Controller
    {
        // GET: Page
        public ActionResult Index()
        {
            return new FilePathResult("~/Views/Page/index.html", "text/html");
        }

        [Route("append")]
        public ActionResult Append()
        {
            return new FilePathResult("~/Views/Page/mini/append.html", "text/html");
        }


        [Route("display")]
        public ActionResult Display()
        {
            return new FilePathResult("~/Views/Page/mini/display.html", "text/html");
        }

    }
}