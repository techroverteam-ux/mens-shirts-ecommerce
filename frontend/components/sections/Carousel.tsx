'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: 'https://wrogn.com/cdn/shop/files/Desktop_Banner_1920x700_1_1920x.jpg?v=1735027200',
      title: 'New Collection',
      subtitle: 'Discover the latest trends',
      cta: 'Shop Now',
      link: '/collection'
    },
    {
      id: 2,
      image: 'https://wrogn.com/cdn/shop/files/Desktop_Banner_1920x700_2_1920x.jpg?v=1735027200',
      title: 'Linen Shirts',
      subtitle: 'Perfect for summer comfort',
      cta: 'Explore',
      link: '/collection?category=linen'
    },
    {
      id: 3,
      image: 'https://wrogn.com/cdn/shop/files/Desktop_Banner_1920x700_3_1920x.jpg?v=1735027200',
      title: 'Polo Collection',
      subtitle: 'Classic meets contemporary',
      cta: 'View Collection',
      link: '/collection?category=polo'
    },
    {
      id: 4,
      image: 'https://wrogn.com/cdn/shop/files/Desktop_Banner_1920x700_4_1920x.jpg?v=1735027200',
      title: 'Sale Up to 70% Off',
      subtitle: 'Limited time offer',
      cta: 'Shop Sale',
      link: '/collection?filter=sale'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden bg-gray-100" style={{ marginTop: '80px' }}>
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-200">
              {/* Placeholder for WROGN images - using gradient for now */}
              <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">WROGN</div>
                  <div className="text-xl opacity-75">Image Placeholder {index + 1}</div>
                </div>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-6">
                <h2 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
                  {slide.title}
                </h2>
                <p className="text-lg lg:text-xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <a 
                  href={slide.link}
                  className="inline-block bg-white text-black px-8 py-4 font-semibold uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </div>
  )
}

export default Carousel