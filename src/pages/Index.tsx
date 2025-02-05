import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Calendar } from 'lucide-react';

const Index = () => {
  const properties = [
    {
      id: 1,
      title: "Rustic Mountain Cabin",
      location: "Sierra Nevada, California",
      price: 150,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    },
    {
      id: 2,
      title: "Lakefront Cottage",
      location: "Lake Tahoe, Nevada",
      price: 200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 3,
      title: "Garden Retreat",
      location: "Napa Valley, California",
      price: 175,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <div className="relative h-[70vh] bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="container relative h-full flex items-center">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white text-center">
              Find Your Rural Escape
            </h1>
            
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <Input placeholder="Where to?" className="border-0 focus-visible:ring-0" />
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <Input type="date" className="border-0 focus-visible:ring-0" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container py-16">
        <h2 className="font-playfair text-3xl font-bold mb-8">
          Popular Rural Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-64 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{property.title}</CardTitle>
                <p className="text-gray-600">{property.location}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="font-semibold">${property.price} / night</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{property.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;