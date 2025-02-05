import React from 'react';
import { FileUpload } from './FileUpload';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Magic } from 'lucide-react';

export const PropertyForm = () => {
  const [isGenerating, setIsGenerating] = React.useState(false);

  const handleAIAssist = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Add New Property</h3>
        <p className="text-sm text-gray-500">Fill in the details about your property</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Property Name</label>
          <Input placeholder="e.g., Rustic Mountain Cabin" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <div className="relative">
            <Textarea 
              placeholder="Describe your property..."
              className="min-h-[100px]"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-2"
              onClick={handleAIAssist}
              disabled={isGenerating}
            >
              <Magic className="h-4 w-4 mr-1" />
              AI Assist
            </Button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Property Photos</label>
          <FileUpload />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price per Night</label>
            <Input type="number" placeholder="€" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <Input placeholder="City, Country" />
          </div>
        </div>

        <Button className="w-full">
          Save Property
        </Button>
      </div>
    </Card>
  );
};