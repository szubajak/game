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
    using Serilog;
    using Serilog.Events;
    using Serilog.Sinks.SystemConsole.Themes;
    using Storage.Setup;

    public sealed class Program
    {
        public static string Name { get; } = System.Reflection.Assembly.GetEntryAssembly().GetName().Name;

        public static int Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
                .Enrich.FromLogContext()
                .MinimumLevel.Information()
                .WriteTo.Console(theme: AnsiConsoleTheme.Code)
                .CreateLogger();

            AppDomain.CurrentDomain.ProcessExit += (_, __) =>
            {
                Log.Information($"{Name} => terminated");
                Log.CloseAndFlush();
            };

            try
            {
                Log.Information($"Initiate => {Name}");
                CreateHost(args).Run();
                return 0;
            }
            catch (Exception e)
            {
                Log.Fatal(e, $"{Name} => terminated unexpectedly");
                return 1;
            }
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
                    .AddCors(o =>
                    {
                        o.AddPolicy("Test", policy => 
                        {
                            policy.AllowAnyOrigin();
                            policy.AllowAnyMethod();
                            policy.AllowAnyHeader();
                        });
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
               .UseCors("Test")
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