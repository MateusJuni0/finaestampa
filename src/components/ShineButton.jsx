import { motion } from 'framer-motion'

export default function ShineButton({ children, className = '', ...props }) {
  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={{
          hover: {
            x: ['-100%', '100%'],
            transition: {
              duration: 0.6,
              ease: 'easeInOut'
            }
          }
        }}
        style={{ width: '200%', left: '-100%' }}
      />
      {children}
    </motion.button>
  )
}
