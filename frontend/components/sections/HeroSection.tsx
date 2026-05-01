import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Hero"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <h1 className="text-hero font-bold tracking-tighter mb-8 uppercase text-shadow">
          DEFINE YOUR
          <br />
          <span className="text-accent">LEGACY</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto text-shadow">
          Premium streetwear for the modern visionary
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="outline" size="lg" className="text-lg px-12 py-4">
            EXPLORE COLLECTION
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-12 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
      
      {/* Side Text */}
      <div className="absolute left-8 bottom-1/2 transform rotate-90 origin-left hidden lg:block">
        <p className="text-white/60 text-sm tracking-widest uppercase font-medium">
          SPRING 2024 COLLECTION
        </p>
      </div>
    </section>
  )
}

export default HeroSection