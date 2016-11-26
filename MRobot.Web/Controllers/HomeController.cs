using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewBag.InitialProps = new AppParams
            {
                name = "Player One"
            };

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }

    public class AppParams
    {
        public string name { get; set; }
    }
}
