import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white space-y-6">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold">
              Your Rural Escape Awaits
            </h1>
            <p className="text-lg md:text-xl">
              List your rural property or find your perfect countryside retreat with JaleoRural
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Why Choose JaleoRural?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make it easy to manage your rural property and connect with guests looking for authentic experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Smart Analytics",
    description: "Track your property's performance with detailed insights and market trends.",
    icon: ArrowRight,
  },
  {
    title: "AI-Powered Assistance",
    description: "Create compelling listings with AI-generated descriptions and optimized photos.",
    icon: ArrowRight,
  },
  {
    title: "Easy Management",
    description: "Handle bookings, communicate with guests, and manage your properties effortlessly.",
    icon: ArrowRight,
  },
];

export default Index;