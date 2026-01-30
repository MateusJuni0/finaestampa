import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ViewingBadge() {
  const [viewers, setViewers] = useState(null)
  
  useEffect(() => {
    // Simula número aleatório de pessoas vendo (2-15)
    const randomViewers = Math.floor(Math.random() * 13) + 3
    
    setTimeout(() => {
      setViewers(randomViewers)
    }, 1500)
    
    // Atualiza o número ocasionalmente
    const interval = setInterval(() => {
      const change = Math.random() > 0.5 ? 1 : -1
      setViewers(prev => Math.max(2, Math.min(20, prev + change)))
    }, 15000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <AnimatePresence>
      {viewers && (
        <motion.div
          className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="flex -space-x-1">
            {[...Array(Math.min(3, viewers))].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 border border-dark-bg flex items-center justify-center text-xs"
              >
                👤
              </div>
            ))}
          </div>
          <span className="text-white/80 font-medium">
            <span className="text-cyan-400 font-bold">{viewers}</span> {viewers === 1 ? 'pessoa vendo' : 'pessoas vendo'}
          </span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
