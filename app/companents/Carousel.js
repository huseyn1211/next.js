"use client"

import React, { useState, useEffect } from 'react'

const images = [
  {
    url: '/carousel1.jpeg',
    text: ''
  },
  {
    url: '/carousel2.png',
    text: 'Bu ikinci şəkil yazısı'
  },
  {
    url: '/islami-tinder.jpg',
    text: 'Bu üçüncü şəkil yazısı'
  }
]

const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const total = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [current, total])

  return (
    <div className="carousel-container w-full max-w-lg mx-auto mt-10 relative">

      {/* şəkil */}
      <div className="relative">
        <img
          src={images[current].url}
          alt={`image-${current}`}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Text */}
      <div className="mt-4 text-center">
        <p className="text-xl font-semibold">{images[current].text}</p>
      </div>

      {/* Nöqtələr */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              current === index ? 'bg-black' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
