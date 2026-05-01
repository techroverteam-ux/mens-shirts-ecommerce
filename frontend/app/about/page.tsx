export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Wrogn</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              For the right kind of man.
            </p>

            <p className="text-gray-600 mb-6">
              Wrogn is a contemporary menswear brand that believes in breaking conventions and setting new standards. 
              We create clothing for the modern man who isn't afraid to stand out and make a statement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with the vision of redefining men's fashion, Wrogn has grown to become a leading brand 
              in contemporary menswear. We believe that fashion should be accessible, comfortable, and expressive 
              of one's personality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To create high-quality, stylish clothing that empowers men to express their individuality 
              while maintaining comfort and functionality in their everyday lives.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Premium quality shirts and casual wear</li>
              <li>Contemporary designs with attention to detail</li>
              <li>Comfortable fits for all body types</li>
              <li>Sustainable and ethical manufacturing practices</li>
              <li>Exceptional customer service</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">We never compromise on the quality of our materials and craftsmanship.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly innovate to bring you the latest in fashion and comfort.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">We're committed to sustainable practices in our manufacturing process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer First</h3>
                <p className="text-gray-600">Your satisfaction is our top priority in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}