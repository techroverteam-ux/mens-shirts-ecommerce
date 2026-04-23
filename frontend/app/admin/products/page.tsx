"use client";
import { useState } from 'react';

export default function Products() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    seasonalTag: 'Summer',
    variants: [{ size: 'M', color: '', stock: '' }]
  });

  const addVariant = () => setForm({...form, variants: [...form.variants, {size: 'M', color: '', stock: ''}]});

  const submit = async () => {
    const res = await fetch('http://localhost:5001/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) alert('Product added!');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Add Product</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input className="p-3 border rounded-lg" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
          <input className="p-3 border rounded-lg" placeholder="Price" type="number" onChange={e => setForm({...form, price: e.target.value})} />
          <textarea className="p-3 border rounded-lg col-span-2" placeholder="Description" onChange={e => setForm({...form, description: e.target.value})} />
          <select className="p-3 border rounded-lg" onChange={e => setForm({...form, seasonalTag: e.target.value})}>
            <option>Summer</option>
            <option>Monsoon</option>
            <option>Winter</option>
          </select>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Variants (Size/Color/Stock)</h3>
        {form.variants.map((v, i) => (
          <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg mb-4">
            <select className="flex-1 p-3 border rounded-lg" onChange={e => {
              const newV = [...form.variants];
              newV[i].size = e.target.value;
              setForm({...form, variants: newV});
            }}>
              <option>S</option><option>M</option><option>L</option><option>XL</option>
            </select>
            <input className="flex-1 p-3 border rounded-lg" placeholder="Color/Shade" onChange={e => {
              const newV = [...form.variants];
              newV[i].color = e.target.value;
              setForm({...form, variants: newV});
            }} />
            <input className="w-24 p-3 border rounded-lg" type="number" placeholder="Stock" onChange={e => {
              const newV = [...form.variants];
              newV[i].stock = e.target.value;
              setForm({...form, variants: newV});
            }} />
          </div>
        ))}
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg mb-6 hover:bg-indigo-700" onClick={addVariant}>+ Add Variant</button>
        <button className="px-8 py-4 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700" onClick={submit}>Add Product</button>
      </div>
    </div>
  );
}
