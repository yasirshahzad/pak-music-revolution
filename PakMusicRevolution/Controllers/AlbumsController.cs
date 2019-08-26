using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PakMusicRevolution.Controllers
{
    public class AlbumsController : Controller
    {
        //
        // GET: /Albums/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SingleAlbum(int id)
        {
            return View(); 
        }

    }
}
