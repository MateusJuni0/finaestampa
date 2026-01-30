import { useState } from 'react'

export default function ImageGallery({ images, alt }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  if (!images || images.length === 0) return null
  
  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="glass rounded-2xl p-4 overflow-hidden cursor-zoom-in group"
          onClick={() => setIsFullscreen(true)}
        >
          <img
            src={images[selectedIndex]}
            alt={alt}
            className="w-full h-[400px] md:h-[500px] object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`glass rounded-xl p-1 overflow-hidden transition-all ${
                  selectedIndex === index
                    ? 'ring-2 ring-cyan-500'
                    : 'hover:ring-1 hover:ring-white/30'
                }`}
              >
                <img
                  src={image}
                  alt={`${alt} ${index + 1}`}
                  className="w-full h-16 object-cover rounded-lg"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
            onClick={() => setIsFullscreen(false)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img
            src={images[selectedIndex]}
            alt={alt}
            className="max-w-full max-h-full object-contain"
          />
          
          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                }}
                className="absolute left-4 text-white/60 hover:text-white p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((selectedIndex + 1) % images.length)
                }}
                className="absolute right-4 text-white/60 hover:text-white p-2"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
