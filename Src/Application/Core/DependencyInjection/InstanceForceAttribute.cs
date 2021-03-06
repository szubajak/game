﻿namespace Application.Core.DependencyInjection
{
    using System;

    public enum InstanceForce
    {
        Singleton,
        Scoped,
        Transient
    }

    public class InstanceForceAttribute : Attribute
    {
        public InstanceForceAttribute(InstanceForce force)
        {
            Force = force;
        }

        public InstanceForce Force { get; }
    }
}