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

        [Route("red")]
        public ActionResult Red()
        {
            return new FilePathResult("~/Views/Page/mini/red.html", "text/html");
        }


        [Route("blue")]
        public ActionResult Blue()
        {
            return new FilePathResult("~/Views/Page/mini/blue.html", "text/html");
        }

    }
}