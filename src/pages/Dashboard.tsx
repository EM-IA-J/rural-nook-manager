import React from 'react';
import { PropertyForm } from '@/components/PropertyForm';
import { DashboardStats } from '@/components/DashboardStats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <h1 className="font-playfair text-3xl font-bold mb-8">Dashboard</h1>
        
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="properties">Properties</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <DashboardStats />
          </TabsContent>

          <TabsContent value="properties">
            <PropertyForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;