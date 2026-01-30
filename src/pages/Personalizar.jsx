import { useState, useRef, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { products } from '../utils/products'
import { useCart } from '../utils/cartContext'
import { useSEO } from '../utils/useSEO'
import { motion } from 'framer-motion'

export default function Personalizar() {
  useSEO({
    title: 'Personalizar Produto | Crie seu Design - Fina Estampa',
    description: 'Personalize seu produto com nossa ferramenta online. Faça upload da sua arte e veja o resultado em tempo real. Canecas, camisetas e mais.',
  })
  
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('produto')
  const navigate = useNavigate()
  const { addItem } = useCart()
  const fileInputRef = useRef(null)
  const containerRef = useRef(null)
  
  const customizableProducts = products.filter(p => p.customizable && p.images3d)
  
  const [selectedProduct, setSelectedProduct] = useState(
    productId ? products.find(p => p.id === productId) : customizableProducts[0]
  )
  const [uploadedImage, setUploadedImage] = useState(null)
  const [currentView, setCurrentView] = useState(0) // 0: front, 1: side, 2: back/top
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 })
  const [imageScale, setImageScale] = useState(0.5)
  const [quantity, setQuantity] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  
  // Get 3D images for current product
  const views = selectedProduct?.images3d || selectedProduct?.images?.slice(0, 3) || []
  const viewLabels = ['Frente', 'Lado', 'Topo/Trás']
  
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Arquivo muito grande. Máximo 10MB.')
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleDragStart = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }
  
  const handleDragMove = (e) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const clientX = e.clientX || e.touches?.[0]?.clientX
    const clientY = e.clientY || e.touches?.[0]?.clientY
    
    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100
    
    setImagePosition({
      x: Math.max(10, Math.min(90, x)),
      y: Math.max(10, Math.min(90, y))
    })
  }
  
  const handleDragEnd = () => {
    setIsDragging(false)
  }
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove)
      window.addEventListener('mouseup', handleDragEnd)
      window.addEventListener('touchmove', handleDragMove)
      window.addEventListener('touchend', handleDragEnd)
      
      return () => {
        window.removeEventListener('mousemove', handleDragMove)
        window.removeEventListener('mouseup', handleDragEnd)
        window.removeEventListener('touchmove', handleDragMove)
        window.removeEventListener('touchend', handleDragEnd)
      }
    }
  }, [isDragging])
  
  const handleAddToCart = () => {
    if (!uploadedImage) {
      alert('Por favor, faça upload de uma imagem primeiro')
      return
    }
    
    addItem({
      ...selectedProduct,
      customization: {
        image: uploadedImage,
        position: imagePosition,
        scale: imageScale,
        view: currentView
      }
    }, quantity)
    
    alert('✅ Produto personalizado adicionado ao carrinho!')
    navigate('/carrinho')
  }
  
  const handleTest3D = () => {
    if (!uploadedImage) {
      alert('⚠️ Faça upload de uma imagem primeiro para testar!')
      return
    }
    // Scroll suave até o preview 3D
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  
  return (
    <div className="py-8 md:py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center">
          Personalize seu <span className="gradient-text">Produto</span>
        </h1>
        <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
          Faça upload da sua arte e veja como ficará no produto em tempo real
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Controls */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Product Selection */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4">1. Escolha o Produto</h3>
              <div className="grid grid-cols-3 gap-3">
                {customizableProducts.slice(0, 6).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product)
                      setCurrentView(0)
                    }}
                    className={`p-2 rounded-xl transition-all ${
                      selectedProduct?.id === product.id
                        ? 'ring-2 ring-cyan-500 bg-cyan-500/20'
                        : 'glass glass-hover'
                    }`}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-16 object-cover rounded-lg mb-1"
                    />
                    <div className="text-xs font-medium truncate">{product.name.split(' ')[0]}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Upload */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4">2. Sua Arte</h3>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              {!uploadedImage ? (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full glass glass-hover p-8 rounded-xl border-2 border-dashed border-white/20 hover:border-cyan-500 transition-all group"
                >
                  <svg
                    className="w-12 h-12 mx-auto mb-3 text-white/40 group-hover:text-cyan-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="font-semibold mb-1">Clique para fazer upload</div>
                  <div className="text-sm text-white/60">PNG ou JPG até 10MB</div>
                </button>
              ) : (
                <div className="space-y-3">
                  <div className="relative">
                    <img 
                      src={uploadedImage} 
                      alt="Sua arte" 
                      className="w-full h-32 object-contain glass rounded-xl p-2"
                    />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    >
                      ✕
                    </button>
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="btn btn-outline w-full text-sm"
                  >
                    Trocar Imagem
                  </button>
                </div>
              )}
            </div>
            
            {/* Adjustments */}
            {uploadedImage && (
              <div className="card">
                <h3 className="text-lg font-bold mb-4">3. Ajustes</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center justify-between text-sm mb-2">
                      <span>Tamanho da Arte</span>
                      <span className="text-cyan-400">{Math.round(imageScale * 100)}%</span>
                    </label>
                    <input
                      type="range"
                      min="0.2"
                      max="1"
                      step="0.05"
                      value={imageScale}
                      onChange={(e) => setImageScale(parseFloat(e.target.value))}
                      className="w-full accent-cyan-500"
                    />
                  </div>
                  
                  <p className="text-sm text-white/60 flex items-center gap-2">
                    <span>💡</span>
                    Arraste a imagem no preview para posicionar
                  </p>
                </div>
              </div>
            )}
            
            {/* Quantity & Add to Cart */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4">4. Quantidade</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    +
                  </button>
                </div>
                <div>
                  <div className="text-sm text-white/60">Total</div>
                  <div className="text-2xl font-bold gradient-text">
                    R$ {(selectedProduct?.price * quantity).toFixed(2)}
                  </div>
                </div>
              </div>
              
              <motion.button
                onClick={handleAddToCart}
                disabled={!uploadedImage}
                className="btn btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed ripple glow"
                whileHover={uploadedImage ? { scale: 1.02 } : {}}
                whileTap={uploadedImage ? { scale: 0.98 } : {}}
              >
                {uploadedImage ? '✓ Adicionar ao Carrinho' : '⬆️ Faça upload da sua arte primeiro'}
              </motion.button>
              
              {uploadedImage && (
                <motion.button
                  onClick={handleTest3D}
                  className="btn btn-outline w-full text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  👁️ Ver Preview 3D
                </motion.button>
              )}
            </div>
          </div>
          
          {/* Right: 3D Preview */}
          <div className="order-1 lg:order-2">
            <div className="card sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Preview 3D</h3>
                <span className="text-sm text-cyan-400">{selectedProduct?.name}</span>
              </div>
              
              {/* View Selector */}
              {views.length > 1 && (
                <div className="flex gap-2 mb-4">
                  {views.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentView(index)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                        currentView === index
                          ? 'bg-cyan-500 text-white'
                          : 'glass glass-hover'
                      }`}
                    >
                      {viewLabels[index] || `Vista ${index + 1}`}
                    </button>
                  ))}
                </div>
              )}
              
              {/* 3D Preview Area */}
              <div
                ref={containerRef}
                className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden cursor-move select-none"
                onMouseDown={uploadedImage ? handleDragStart : undefined}
                onTouchStart={uploadedImage ? handleDragStart : undefined}
              >
                {/* Product Image */}
                <img
                  src={views[currentView] || selectedProduct?.images[0]}
                  alt={selectedProduct?.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 pointer-events-none"
                  draggable={false}
                />
                
                {/* Uploaded Art Overlay */}
                {uploadedImage && (
                  <div
                    className="absolute pointer-events-none transition-all duration-75"
                    style={{
                      left: `${imagePosition.x}%`,
                      top: `${imagePosition.y}%`,
                      transform: `translate(-50%, -50%) scale(${imageScale})`,
                      maxWidth: '60%',
                      maxHeight: '60%'
                    }}
                  >
                    <img
                      src={uploadedImage}
                      alt="Sua arte"
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))'
                      }}
                      draggable={false}
                    />
                  </div>
                )}
                
                {/* Overlay Instructions */}
                {!uploadedImage && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/40 p-4">
                      <div className="text-4xl mb-2">🎨</div>
                      <p>Faça upload de uma imagem<br/>para visualizar aqui</p>
                    </div>
                  </div>
                )}
                
                {/* Drag indicator */}
                {uploadedImage && isDragging && (
                  <motion.div 
                    className="absolute inset-0 bg-cyan-500/10 border-2 border-dashed border-cyan-500 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
                
                {/* Ajuda visual quando tem imagem */}
                {uploadedImage && !isDragging && (
                  <motion.div 
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs pointer-events-none"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    💡 Arraste a imagem para posicionar
                  </motion.div>
                )}
              </div>
              
              {/* Info */}
              <div className="mt-4 p-3 glass rounded-xl text-xs text-white/60">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">ℹ️</span>
                  <div>
                    <p className="mb-1"><strong>Dica:</strong> Use imagens em alta resolução (mínimo 720p).</p>
                    <p>A visualização é aproximada. O resultado final pode variar ligeiramente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
