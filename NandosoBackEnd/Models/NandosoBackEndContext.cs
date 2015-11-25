using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;

namespace NandosoBackEnd.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class NandosoBackEndContext : DbContext
    {

        public class MyConfiguration : DbMigrationsConfiguration<NandosoBackEndContext>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }


        }

        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public NandosoBackEndContext() : base("name=NandosoBackEndContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoBackEndContext, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<NandosoBackEnd.Models.Specials> Specials { get; set; }
    }
}
