import React from 'react';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', bookings: 4 },
  { month: 'Feb', bookings: 3 },
  { month: 'Mar', bookings: 6 },
  { month: 'Apr', bookings: 8 },
  { month: 'May', bookings: 7 },
  { month: 'Jun', bookings: 9 },
];

export const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="p-6">
        <h3 className="font-medium text-sm text-gray-500">Total Bookings</h3>
        <p className="text-3xl font-semibold mt-2">37</p>
        <span className="text-green-500 text-sm">+12% from last month</span>
      </Card>

      <Card className="p-6">
        <h3 className="font-medium text-sm text-gray-500">Average Price</h3>
        <p className="text-3xl font-semibold mt-2">€145</p>
        <span className="text-red-500 text-sm">-3% from market average</span>
      </Card>

      <Card className="p-6">
        <h3 className="font-medium text-sm text-gray-500">Revenue</h3>
        <p className="text-3xl font-semibold mt-2">€5,365</p>
        <span className="text-green-500 text-sm">+8% from last month</span>
      </Card>

      <Card className="p-6 md:col-span-2 lg:col-span-3">
        <h3 className="font-medium text-sm text-gray-500 mb-4">Booking Trends</h3>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="bookings" 
                stroke="#4A5D4F" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};