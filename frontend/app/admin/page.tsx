import Link from 'next/link';

export default function Admin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/products" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">Products</h2>
            <p className="text-gray-600">Add/Edit seasonal shirts, variants, stock</p>
          </Link>
          <Link href="/admin/orders" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Orders</h2>
            <p className="text-gray-600">Manage orders, update status, tracking</p>
          </Link>
          <Link href="/admin/analytics" className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">Analytics</h2>
            <p className="text-gray-600">Sales, popular shades, inventory</p>
          </Link>
        </div>
        <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Add Product</button>
            <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700">View Orders</button>
            <button className="p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Low Stock Alert</button>
            <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700">Sales Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}
