import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Inventory System</Link>
        </h1>
        <ul className="flex gap-4">
          <li><Link to="/" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/categories" className="hover:text-gray-300">Categories</Link></li>
          <li><Link to="/orders" className="hover:text-gray-300">Orders</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
