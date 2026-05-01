export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Art of Layering: Master Your Winter Wardrobe",
      excerpt: "Learn how to layer your clothes effectively for both style and warmth this winter season.",
      date: "December 15, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Sustainable Fashion: Our Commitment to the Environment",
      excerpt: "Discover how Wrogn is leading the way in sustainable fashion practices and eco-friendly materials.",
      date: "December 10, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      title: "From Office to Evening: Versatile Pieces for Every Occasion",
      excerpt: "Explore our collection of versatile pieces that can take you from a business meeting to a dinner date.",
      date: "December 5, 2024",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
          <p className="text-gray-600 mb-12">Stay updated with the latest fashion trends, styling tips, and brand news.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-red-600 hover:text-red-700 font-medium">Read More →</button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">More blog posts coming soon. Stay tuned!</p>
          </div>
        </div>
      </div>
    </div>
  )
}