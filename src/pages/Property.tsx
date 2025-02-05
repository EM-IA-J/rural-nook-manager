import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { PropertyForm } from '@/components/PropertyForm';

const Property = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <h1 className="font-playfair text-3xl font-bold mb-8">Mi Propiedad</h1>
          <PropertyForm />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Property;