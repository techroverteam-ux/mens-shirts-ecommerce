'use client'
import { useState, useEffect } from 'react'

const WeAreWrognCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "WE ARE WROGN",
      subtitle: "DRIVEN BY CURIOSITY,",
      description: "OUR SPIRIT LEADS TO CREATIONS THAT ARE REAL, AUTHENTIC AND UNAPOLOGETICALLY YOU.",
      sideText: "CAN'T STAY MAD",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bgColor: "from-orange-400 to-yellow-500"
    },
    {
      id: 2,
      title: "WE ARE WROGN",
      subtitle: "BOLD CHOICES,",
      description: "FEARLESS FASHION THAT SPEAKS YOUR LANGUAGE AND TELLS YOUR STORY.",
      sideText: "STAY BOLD",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bgColor: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "WE ARE WROGN",
      subtitle: "BREAK THE RULES,",
      description: "CREATE YOUR OWN PATH WITH STYLE THAT DEFIES CONVENTION.",
      sideText: "RULE BREAKER",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bgColor: "from-green-400 to-teal-500"
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 flex items-center justify-between">
              {/* Left Side Text */}
              <div className="text-yellow-400 font-bold text-6xl lg:text-8xl transform -rotate-90 origin-center absolute left-8 top-1/2 -translate-y-1/2">
                {slide.sideText}
              </div>

              {/* Center Content */}
              <div className="flex-1 text-center max-w-4xl mx-auto ml-24">
                <h2 className="text-white text-sm font-medium tracking-[0.2em] mb-4 uppercase">
                  {slide.title}
                </h2>
                
                <div className="space-y-2">
                  <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
                    {slide.subtitle}
                  </h1>
                  <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div 
          className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}

export default WeAreWrognCarousel