import { useState } from 'react';

export default function Dashboard() {
  const [stats] = useState({
    totalProducts: 120,
    totalCategories: 10,
    totalOrders: 45,
  });

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow">Total Products: {stats.totalProducts}</div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow">Total Categories: {stats.totalCategories}</div>
        <div className="p-6 bg-yellow-500 text-white rounded-lg shadow">Total Orders: {stats.totalOrders}</div>
      </div>
    </div>
  );
}
