﻿namespace Application
{
    using System.Reflection;

    using AutoMapper;
    using MediatR;
    using Microsoft.Extensions.DependencyInjection;

    public static class Setup
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddAutoMapper(Assembly.GetExecutingAssembly())
                    .AddMediatR(Assembly.GetExecutingAssembly())
                    .AddScoped<IMediator, Mediator>();

            return services;
        }
    }
}