import { Link } from 'react-router-dom'
import { useCart } from '../utils/cartContext'

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart()
  
  return (
    <div
      className="card card-hover group animate-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link to={`/produto/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
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
      
      <button
        onClick={() => addItem(product)}
        className="btn btn-primary w-full"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}
