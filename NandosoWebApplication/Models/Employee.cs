using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NandosoWebApplication.Models
{
    public enum Title
    {
        Technician, CustomerService, LocalManager, RegionalManager, CEO, StaffMember
    }

    public class Employee : User
    {
        public Title? Title { get; set; }
    }
}
