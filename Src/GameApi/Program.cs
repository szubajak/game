using Microsoft.AspNetCore.Mvc;

[assembly: ApiController]

namespace GameApi
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Application;
    using Application.Core.IoC;
    using Autofac;
    using Autofac.Extensions.DependencyInjection;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.OpenApi.Models;
    using Storage.Setup;

    public sealed class Program
    {
        public static void Main(string[] args)
        {
            CreateHost(args).Run();
        }

        public static IHost CreateHost(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseServiceProviderFactory(new AutofacServiceProviderFactory())
                .ConfigureContainer<ContainerBuilder>(SetupContainer)
                .ConfigureWebHostDefaults(SetupWebHost).Build();

        private static void SetupContainer(ContainerBuilder builder)
        {
            var types = AppDomain.CurrentDomain
                .GetAssemblies()
                .SelectMany(a => a.GetExportedTypes())
                .ToList();

            builder.RegisterTypes(types.WhereForce(InstanceForce.Singleton)).AsImplementedInterfaces().SingleInstance();
            builder.RegisterTypes(types.WhereForce(InstanceForce.Scoped)).AsImplementedInterfaces().InstancePerLifetimeScope();
            builder.RegisterTypes(types.WhereForce(InstanceForce.Transient)).AsImplementedInterfaces().InstancePerDependency();
        }

        private static void SetupWebHost(IWebHostBuilder builder) => 
            builder.ConfigureServices(SetupServices)
                   .Configure(SetupApp);

        private static void SetupServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddApplication()
                    .AddRouting(o => 
                    {
                        o.LowercaseUrls = true;
                    })
                    .AddSwaggerGen(o => 
                    {
                        o.SwaggerDoc($"v1", new OpenApiInfo()
                        {
                            Contact = new OpenApiContact
                            { 
                                Email = "jakub.szubarga@gmail.com",
                                Name = "Jakub Szubarga",
                                Url = new Uri("https://www.linkedin.com/in/szubarga/")
                            },
                            Version = "v1",
                            Title = $"Advanced Template Api"
                        });
                        o.DocInclusionPredicate((_, api) => string.IsNullOrEmpty(api.GroupName) ? false : true);
                        o.TagActionsBy(selector => new List<string> { selector.GroupName });
                    })
                    .AddDbContext<GameDbContext>(o => 
                    {
                        o.UseInMemoryDatabase(nameof(GameDbContext));
                    });
        }

        private static void SetupApp(IApplicationBuilder app)
        {
            app.UseRouting()
               .UseAuthorization()
               .UseEndpoints(endpoints =>
               {
                   endpoints.MapControllers();
               })
               .UseSwagger()
               .UseSwaggerUI(o => 
               {
                   o.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
               });

            using var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            using var context = scope.ServiceProvider.GetService<GameDbContext>();
            context.Database.EnsureCreated();
        }
    }
}