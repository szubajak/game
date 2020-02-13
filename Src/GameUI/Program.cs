using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace GameUI
{
    public sealed class Program
    {
        public static void Main(string[] args)
        {
            CreateHost(args).Run();
        }

        public static IHost CreateHost(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(SetupWebHost).Build();

        private static void SetupWebHost(IWebHostBuilder builder) =>
            builder.ConfigureServices(SetupServices)
                   .Configure(SetupApp);

        private static void SetupServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(c =>
            {
                c.RootPath = "App/build";
            });
        }

        private static void SetupApp(WebHostBuilderContext c, IApplicationBuilder app)
        {
            app.UseStaticFiles()
               .UseSpaStaticFiles();
            app.UseSpa(b => 
               { 
                   b.Options.SourcePath = "App";

                   if (c.HostingEnvironment.IsDevelopment())
                   {
                       b.UseReactDevelopmentServer(npmScript: "start");
                   }
               });
        }
    }
}
