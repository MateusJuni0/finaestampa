import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../utils/cartContext'
import ShineButton from './ShineButton'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  
  return (
    <motion.div
      className="card group glow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Link to={`/produto/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl mb-4 shine-effect">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {product.originalPrice > product.price && (
              <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </div>
            )}
            {product.customizable && (
              <div className="glass text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-xl">
                Personalizável
              </div>
            )}
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-baseline gap-2 mb-4">
          {product.originalPrice > product.price && (
            <span className="text-white/40 line-through text-sm">
              R$ {product.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-bold gradient-text">
            R$ {product.price.toFixed(2)}
          </span>
        </div>
      </Link>
      
      <ShineButton
        onClick={() => addItem(product)}
        className="btn btn-primary w-full ripple"
      >
        Adicionar ao Carrinho
      </ShineButton>
    </motion.div>
  )
}
