import Breadcrumb from '../../components/ui/Breadcrumb'

export default function ShippingAndHandlingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Shipping and Handling' }]} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">SHIPPING AND HANDLING</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              At WROGN we seek to create a seamless purchase experience for the customer. To this end we commit to ensuring that the products are always delivered in excellent condition and in the shortest duration possible. While most of the products are shipped for free, in cases where additional shipping charges apply it is clearly indicated on the product details page as well as while placing your order.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Shipping Options</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
                <p className="text-gray-600 mb-2">Orders above ₹799</p>
                <p className="text-gray-600">3-5 business days</p>
                <p className="text-green-600 font-medium">No additional charges</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard Shipping</h3>
                <p className="text-gray-600 mb-2">Orders below ₹799</p>
                <p className="text-gray-600">3-5 business days</p>
                <p className="text-gray-600">₹49 shipping charge</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Delivery Coverage</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>We deliver across India</li>
              <li>Some remote areas may take additional 1-2 days</li>
              <li>Cash on Delivery available for orders between ₹799 - ₹2999</li>
              <li>All major cities and towns are covered</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Order Processing</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Orders are processed within 24 hours of confirmation</li>
              <li>Orders placed after 2 PM will be processed the next business day</li>
              <li>No processing on weekends and public holidays</li>
              <li>You'll receive a confirmation email once your order is shipped</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tracking Your Order</h2>
            <p className="text-gray-600 mb-4">
              Once your order is shipped, you'll receive a tracking number via SMS and email. 
              You can also track your order by logging into your account and visiting the 'My Orders' section.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Track Your Order</h3>
              <p className="text-blue-800 mb-3">
                Stay updated on your order status:
              </p>
              <ul className="list-disc pl-6 text-blue-700 space-y-1">
                <li>Order Confirmed</li>
                <li>Order Processed</li>
                <li>Shipped</li>
                <li>Out for Delivery</li>
                <li>Delivered</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Shipping Charges</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Order Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      Shipping Charge
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      COD Available
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Below ₹799</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">₹49</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">No</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₹799 - ₹2999</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Free</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Above ₹2999</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Free</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">No</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Important Notes</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <ul className="list-disc pl-6 text-yellow-800 space-y-2">
                <li>Delivery times may vary during peak seasons and festivals</li>
                <li>We'll attempt delivery 3 times before returning the package</li>
                <li>Please ensure someone is available to receive the package</li>
                <li>Shipping charges are clearly displayed at checkout</li>
                <li>International shipping is not available currently</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Shipping?</h3>
              <p className="text-gray-700">
                For any shipping-related queries, please contact our customer service team at{' '}
                <a href="mailto:care@wrogn.com" className="text-red-600 hover:underline">
                  care@wrogn.com
                </a>{' '}
                or WhatsApp us at{' '}
                <a href="https://wa.me/918095733338" className="text-green-600 hover:underline">
                  +91-8095733338
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}