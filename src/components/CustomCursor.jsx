import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    
    const updateCursor = (e) => {
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      )
    }
    
    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateCursor)
    
    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateCursor)
    }
  }, [])
  
  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`
        }}
      />
      
      {/* Follower cursor */}
      <div
        className="fixed w-8 h-8 rounded-full border-2 border-cyan-400/50 pointer-events-none z-[9999] transition-all duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.8 : 1})`
        }}
      />
    </>
  )
}
