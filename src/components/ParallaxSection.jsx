import { useEffect, useState } from 'react'

export default function ParallaxSection({ children, speed = 0.5, className = '' }) {
  const [offsetY, setOffsetY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  )
}
