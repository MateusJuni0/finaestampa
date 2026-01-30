import { Link } from 'react-router-dom'
import { useCart } from '../utils/cartContext'

export default function Carrinho() {
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
                <div className="flex gap-4">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <Link to={`/produto/${item.slug}`} className="font-bold hover:text-primary-400 transition-colors">
                      {item.name}
                    </Link>
                    
                    {(item.selectedSize || item.selectedColor) && (
                      <div className="text-sm text-white/60 mt-1">
                        {item.selectedSize && <span>Tamanho: {item.selectedSize}</span>}
                        {item.selectedSize && item.selectedColor && <span> • </span>}
                        {item.selectedColor && <span>Cor: {item.selectedColor}</span>}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center glass rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-white/10"
                        >
                          -
                        </button>
                        <span className="px-3 font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-400 hover:text-red-300 transition-colors text-sm"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-sm text-white/60">
                      R$ {item.price.toFixed(2)} cada
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button
              onClick={clearCart}
              className="btn btn-ghost text-red-400 hover:text-red-300"
            >
              Limpar Carrinho
            </button>
          </div>
          
          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24 space-y-4">
              <h3 className="text-xl font-bold">Resumo do Pedido</h3>
              
              <div className="space-y-2 py-4 border-y border-white/10">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Frete</span>
                  <span>Calculado no checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="gradient-text">R$ {total.toFixed(2)}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary w-full text-lg py-4">
                Finalizar Compra
              </Link>
              
              <Link to="/produtos" className="btn btn-outline w-full">
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
