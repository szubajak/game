namespace Application.Core.IoC
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;

    using MediatR;

    public static class TypeExtensions
    {
        public static Type[] WhereForce(this IEnumerable<Type> types, InstanceForce force) => types.Where(t => force.Equals(t.GetCustomAttribute<InstanceForceAttribute>()?.Force)).ToArray();

        public static IList<Type> WhereMediatR(this Type[] types) => types.Where(t => typeof(IBaseRequest).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract).ToList();
    }
}