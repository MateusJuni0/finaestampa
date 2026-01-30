import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ImageZoom({ src, alt, className = '' }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  
  const handleMouseMove = (e) => {
    if (!isZoomed) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setMousePos({ x, y })
  }
  
  return (
    <>
      <div
        className={`relative overflow-hidden cursor-zoom-in ${className}`}
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          animate={{
            scale: isZoomed ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{
            transformOrigin: isZoomed ? `${mousePos.x}% ${mousePos.y}%` : 'center'
          }}
        />
        
        {/* Zoom hint */}
        <AnimatePresence>
          {!isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-2 right-2 glass px-2 py-1 rounded-lg text-xs"
            >
              🔍 Passar o mouse para ampliar
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
