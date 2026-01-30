import { motion } from 'framer-motion'

export default function LoadingPremium({ fullScreen = false }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }
  
  const LoadingContent = () => (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="w-16 h-16 relative"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500"></div>
      </motion.div>
      
      <motion.div
        className="flex gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {['Carregando', '.', '.', '.'].map((char, i) => (
          <motion.span
            key={i}
            variants={item}
            className="text-white/80 font-medium"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
        <LoadingContent />
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-center py-12">
      <LoadingContent />
    </div>
  )
}
