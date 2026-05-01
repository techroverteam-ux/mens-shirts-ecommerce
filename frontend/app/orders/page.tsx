import Layout from '../../components/layout/Layout'
import { Package, Truck, CheckCircle, Clock } from 'lucide-react'

const OrdersPage = () => {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 2499,
      items: [
        { name: 'Premium Cotton Shirt - Blue', size: 'L', quantity: 1, price: 1299 },
        { name: 'Linen Blend Shirt - White', size: 'M', quantity: 1, price: 1200 }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-20',
      status: 'shipped',
      total: 1299,
      items: [
        { name: 'Casual Cotton Shirt - Black', size: 'L', quantity: 1, price: 1299 }
      ]
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-22',
      status: 'processing',
      total: 3598,
      items: [
        { name: 'Formal Shirt - Navy', size: 'M', quantity: 2, price: 1799 }
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />
      case 'processing':
        return <Clock className="h-5 w-5 text-yellow-500" />
      default:
        return <Package className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered'
      case 'shipped':
        return 'Shipped'
      case 'processing':
        return 'Processing'
      default:
        return 'Unknown'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50'
      case 'shipped':
        return 'text-blue-600 bg-blue-50'
      case 'processing':
        return 'text-yellow-600 bg-yellow-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2">My Orders</h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>

          {orders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-card p-12 text-center">
              <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-600 mb-2">No orders yet</h2>
              <p className="text-gray-500 mb-6">Start shopping to see your orders here</p>
              <button className="btn-primary px-6 py-3 rounded-lg">
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-card overflow-hidden">
                  {/* Order Header */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{order.id}</h3>
                        <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-2">{getStatusText(order.status)}</span>
                        </span>
                        <span className="text-lg font-bold text-black">₹{order.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
                          <div className="flex-grow">
                            <h4 className="font-medium text-black">{item.name}</h4>
                            <p className="text-sm text-gray-500">Size: {item.size} | Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-black">₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Actions */}
                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <button className="text-sm text-gray-600 hover:text-black transition-colors duration-200">
                        View Details
                      </button>
                      <div className="space-x-3">
                        {order.status === 'delivered' && (
                          <button className="btn-outline px-4 py-2 text-sm rounded">
                            Reorder
                          </button>
                        )}
                        {order.status === 'shipped' && (
                          <button className="btn-outline px-4 py-2 text-sm rounded">
                            Track Order
                          </button>
                        )}
                        {order.status === 'processing' && (
                          <button className="text-sm text-red-600 hover:text-red-800 transition-colors duration-200">
                            Cancel Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    
  )
}

export default OrdersPage