using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NandosoWebApplication.Models
{
    public class Feedback
    {
        public int ID { get; set; }
        public string Comment { get; set; }
        public string UserImageURL { get; set; }
        public string UsernameOrTitle { get; set; }

        [JsonIgnore]
        public int ParentID { get; set; }
        [JsonIgnore]
        public int UserID { get; set; }
    }
}
