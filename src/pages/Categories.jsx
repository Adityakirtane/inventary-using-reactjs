import { useState } from 'react';

export default function Categories() {
  const [categories, setCategories] = useState(['Electronics', 'Clothing', 'Home Appliances']);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-blue-600">Categories</h1>
      <ul className="mt-4">
        {categories.map((category, index) => (
          <li key={index} className="p-2 border-b">{category}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Category"
        className="border p-2 w-full my-4"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4 py-2" onClick={addCategory}>Add Category</button>
    </div>
  );
}
