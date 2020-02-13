namespace Application.Core.IoC
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;

    public static class TypeExtensions
    {
        public static Type[] WhereForce(this IEnumerable<Type> types, InstanceForce force) => types.Where(t => force.Equals(t.GetCustomAttribute<InstanceForceAttribute>()?.Force)).ToArray();
    }
}