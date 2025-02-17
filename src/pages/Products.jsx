import { useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', stock: 20 },
    { id: 2, name: 'Phone', stock: 50 },
  ]);
  const [search, setSearch] = useState('');
  const [newProduct, setNewProduct] = useState('');

  const addProduct = () => {
    if (newProduct) {
      setProducts([...products, { id: products.length + 1, name: newProduct, stock: 10 }]);
      setNewProduct('');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">Products</h1>
      <input
        type="text"
        placeholder="Search Products..."
        className="border p-2 w-full my-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="mt-4">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <li key={product.id} className="p-2 border-b">{product.name} - Stock: {product.stock}</li>
          ))}
      </ul>
      <input
        type="text"
        placeholder="New Product Name"
        className="border p-2 w-full my-4"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2" onClick={addProduct}>Add Product</button>
    </div>
  );
}
