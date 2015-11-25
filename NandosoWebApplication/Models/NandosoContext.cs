using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace NandosoWebApplication.Models
{

    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class NandosoContext : DbContext
    {

        public class MyConfiguration : DbMigrationsConfiguration<NandosoContext>
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

        public NandosoContext() : base("name=NandosoContext")
        {
            if (!Database.Exists("MSAUniversityContext"))
            {
                Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoContext, MyConfiguration>());
            }
        }

        public System.Data.Entity.DbSet<NandosoWebApplication.Models.Specials> Specials { get; set; }
    }
}
