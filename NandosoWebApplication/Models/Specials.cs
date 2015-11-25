﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NandosoWebApplication.Models
{
    public class Specials
    {
        public int ID { get; set; }
        public string ImgURL { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string PromoCode { get; set; }
        public DateTime ExpiryDate { get; set; }       
    }
}
