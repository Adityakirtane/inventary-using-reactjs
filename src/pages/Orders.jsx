import { useState } from 'react';

export default function Orders() {
  const [orders] = useState([
    { id: 101, product: 'Laptop', status: 'Shipped' },
    { id: 102, product: 'Phone', status: 'Processing' },
    { id: 103, product: 'Tablet', status: 'Delivered' },
  ]);

  const [filter, setFilter] = useState('');

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">Orders</h1>
      <select className="border p-2 my-4" onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Orders</option>
        <option value="Shipped">Shipped</option>
        <option value="Processing">Processing</option>
        <option value="Delivered">Delivered</option>
      </select>
      <ul className="mt-4">
        {orders
          .filter((order) => !filter || order.status === filter)
          .map((order) => (
            <li key={order.id} className="p-2 border-b">{order.product} - Status: {order.status}</li>
          ))}
      </ul>
    </div>
  );
}
