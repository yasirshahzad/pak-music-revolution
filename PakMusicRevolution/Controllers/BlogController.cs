using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PakMusicRevolution.Controllers
{
    public class BlogController : Controller
    {
        //
        // GET: /Blog/

        public ActionResult Index(String title)
        {
            return View();
        }

        public ActionResult SinglePost(int Id)
        {
            return View(); 
        }
    }
}
