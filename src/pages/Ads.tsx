import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Card } from '@/components/ui/card';

const Ads = () => {
  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <h1 className="font-playfair text-3xl font-bold mb-8">Mis Anuncios</h1>
          <Card className="p-6">
            <p className="text-gray-500">No tienes anuncios activos actualmente.</p>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Ads;