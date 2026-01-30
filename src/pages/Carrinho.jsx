import { Link } from 'react-router-dom'
import { useCart } from '../utils/cartContext'
import { useSEO } from '../utils/useSEO'

export default function Carrinho() {
  useSEO({
    title: 'Carrinho de Compras | Fina Estampa',
    description: 'Revise seus produtos personalizados antes de finalizar a compra.',
  })
  
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h2>
          <p className="text-white/60 mb-8">Adicione produtos para começar</p>
          <Link to="/produtos" className="btn btn-primary">
            Ver Produtos
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12">
      <div className="container-custom max-w-6xl">
        <h1 className="text-4xl font-display font-bold mb-8 animate-in">
          Carrinho de <span className="gradient-text">Compras</span>
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div key={index} className="card glass-hover animate-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <Link to={`/produto/${item.slug}`} className="font-bold hover:text-cyan-400 transition-colors block mb-1">
                      {item.name}
                    </Link>
                    
                    {(item.selectedSize || item.selectedColor) && (
                      <div className="text-sm text-white/60 mb-3">
                        {item.selectedSize && <span>Tamanho: {item.selectedSize}</span>}
                        {item.selectedSize && item.selectedColor && <span> • </span>}
                        {item.selectedColor && <span>Cor: {item.selectedColor}</span>}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center glass rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="px-3 py-2 hover:bg-white/10 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 py-2 font-bold min-w-[3rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="px-3 py-2 hover:bg-white/10 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-400 hover:text-red-300 transition-colors text-sm px-3 py-2"
                      >
                        🗑️ Remover
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right sm:text-right flex-shrink-0">
                    <div className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      R$ {item.price.toFixed(2)} cada
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              onClick={clearCart}
              className="btn btn-outline text-red-400 hover:text-red-500 w-full sm:w-auto"
            >
              🗑️ Limpar Carrinho
            </button>
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24 space-y-6">
              <h3 className="text-xl font-bold">Resumo do Pedido</h3>
              
              <div className="space-y-3 py-4 border-y border-white/10">
                <div className="flex justify-between text-white/70 text-sm">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                  <span className="font-semibold">R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70 text-sm">
                  <span>Frete</span>
                  <span className="text-cyan-400">Calculado no checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="gradient-text">R$ {total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Link to="/checkout" className="btn btn-primary w-full text-lg py-4 block text-center">
                  ✓ Finalizar Compra
                </Link>
                
                <Link to="/produtos" className="btn btn-outline w-full py-3 block text-center">
                  ← Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
