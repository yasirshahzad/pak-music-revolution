using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using PakMusicRevolution.Models;


namespace PakMusicRevolution.Controllers
{
    public class ArtistsController : Controller
    {
        PakMusicRevolutionEntities _conttext = new PakMusicRevolutionEntities();
     

       public ArtistsController()
       {
           

       }

        public ActionResult Index()
        {
            var artists = _conttext.Artists.Include(c=> c.Albums).ToList(); 
            return View(artists);
        }

        public ActionResult SingleArtist(int id)
        {
            var artist = _conttext.Artists.SingleOrDefault(c => c.artist_id == id);
            return View(artist); 
        }

    }
}
