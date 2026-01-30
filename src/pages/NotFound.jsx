import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSEO } from '../utils/useSEO'

export default function NotFound() {
  useSEO({
    title: 'Página não encontrada | Fina Estampa',
    description: 'A página que você procura não existe ou foi movida.',
  })
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="text-9xl mb-8"
        >
          🔍
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold mb-4"
        >
          <span className="gradient-text">404</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-white/70 mb-8"
        >
          Ops! Página não encontrada
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 mb-8 max-w-md mx-auto"
        >
          A página que você está procurando pode ter sido removida, 
          renomeada ou está temporariamente indisponível.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/" className="btn btn-primary text-lg">
            ← Voltar ao Início
          </Link>
          <Link to="/produtos" className="btn btn-outline text-lg">
            Ver Produtos
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-white/40 text-sm"
        >
          Precisa de ajuda? {' '}
          <a 
            href="https://wa.me/5551995765088" 
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}
