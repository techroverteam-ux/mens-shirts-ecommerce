export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Fashion Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time"
    },
    {
      title: "E-commerce Manager",
      department: "Digital Marketing",
      location: "Bangalore, India",
      type: "Full-time"
    },
    {
      title: "Customer Service Representative",
      department: "Customer Support",
      location: "Delhi, India",
      type: "Full-time"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Careers at Wrogn</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 text-lg">
              Join our team and help us redefine men's fashion. We're looking for passionate, 
              creative individuals who share our vision of creating exceptional clothing for the modern man.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Environment</h3>
                <p className="text-gray-600">Work in a dynamic, creative environment where your ideas matter.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Advance your career with learning and development opportunities.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">Enjoy competitive salary, health benefits, and employee discounts.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">We believe in maintaining a healthy work-life balance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-6">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">{position.type}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{position.department}</p>
                  <p className="text-gray-500 text-sm mb-4">{position.location}</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Don't see a position that fits?</h3>
              <p className="text-gray-600 mb-4">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <p className="text-gray-600">
                Email us at <a href="mailto:careers@wrogn.com" className="text-red-600 hover:underline">careers@wrogn.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}