const categories = [
  {
    id: 1,
    name: 'ESSENTIALS',
    subtitle: 'Everyday Basics',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '24 Items',
    size: 'large'
  },
  {
    id: 2,
    name: 'PREMIUM',
    subtitle: 'Luxury Collection',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '18 Items',
    size: 'medium'
  },
  {
    id: 3,
    name: 'STREETWEAR',
    subtitle: 'Urban Edge',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '32 Items',
    size: 'medium'
  },
  {
    id: 4,
    name: 'OUTERWEAR',
    subtitle: 'Statement Pieces',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '15 Items',
    size: 'small'
  },
  {
    id: 5,
    name: 'ACCESSORIES',
    subtitle: 'Complete the Look',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: '28 Items',
    size: 'small'
  }
]

const CategoryGrid = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display font-bold tracking-tighter text-primary uppercase mb-6">
            SHOP BY CATEGORY
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Discover our curated collections designed for the modern lifestyle
          </p>
        </div>
        
        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto">
          {/* Large Category - Spans 2x2 */}
          <CategoryCard 
            category={categories[0]} 
            className="md:col-span-2 lg:col-span-3 md:row-span-2 h-96 md:h-auto"
          />
          
          {/* Medium Categories */}
          <CategoryCard 
            category={categories[1]} 
            className="md:col-span-2 lg:col-span-3 h-48"
          />
          <CategoryCard 
            category={categories[2]} 
            className="md:col-span-2 lg:col-span-3 h-48"
          />
          
          {/* Small Categories */}
          <CategoryCard 
            category={categories[3]} 
            className="md:col-span-1 lg:col-span-2 h-64"
          />
          <CategoryCard 
            category={categories[4]} 
            className="md:col-span-1 lg:col-span-1 h-64"
          />
          
          {/* Featured Banner */}
          <div className="md:col-span-2 lg:col-span-3 h-32 bg-primary flex items-center justify-center group cursor-pointer transition-all duration-250 hover:bg-accent">
            <div className="text-center">
              <h3 className="text-white group-hover:text-primary font-bold text-xl uppercase tracking-wide transition-colors duration-250">
                NEW ARRIVALS
              </h3>
              <p className="text-white/80 group-hover:text-primary/80 text-sm uppercase tracking-widest transition-colors duration-250">
                SPRING 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CategoryCard = ({ category, className }: { 
  category: typeof categories[0]; 
  className?: string 
}) => {
  return (
    <div className={`group cursor-pointer overflow-hidden bg-gray-100 transition-all duration-250 hover:shadow-soft ${className}`}>
      <div className="relative h-full">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-250"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
          <div className="text-white">
            <p className="text-sm opacity-90 mb-2 tracking-widest uppercase">{category.subtitle}</p>
            <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter uppercase mb-2">
              {category.name}
            </h3>
            <p className="text-sm opacity-75">{category.count}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid