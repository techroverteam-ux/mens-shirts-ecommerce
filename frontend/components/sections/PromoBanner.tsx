import Button from '../ui/Button'

const PromoBanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">
              NEW SEASON
              <br />
              <span className="text-accent">COLLECTION</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Discover the latest trends in streetwear fashion. 
              Premium quality meets contemporary design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg">
                EXPLORE COLLECTION
              </Button>
              <Button variant="outline" size="lg">
                WATCH LOOKBOOK
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="New Collection"
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute top-4 right-4 bg-accent text-primary px-4 py-2 font-bold uppercase text-sm">
              NEW
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner