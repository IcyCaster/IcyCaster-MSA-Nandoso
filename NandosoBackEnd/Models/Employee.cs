﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NandosoBackEnd.Models
{
    public enum Title
    {
        Technician, CustomerService, LocalManager, RegionalManager, CEO, StaffMember
    }

    class Employee : User
    {
        public Title? Title { get; set; }
    }
}
