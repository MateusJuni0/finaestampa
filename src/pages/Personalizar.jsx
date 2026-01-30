import { useState, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { products } from '../utils/products'
import { useCart } from '../utils/cartContext'

export default function Personalizar() {
  const [searchParams] = useSearchParams()
  const productId = searchParams.get('produto')
  const navigate = useNavigate()
  const { addItem } = useCart()
  const fileInputRef = useRef(null)
  
  const [selectedProduct, setSelectedProduct] = useState(
    productId ? products.find(p => p.id === productId) : products.find(p => p.customizable)
  )
  const [uploadedImage, setUploadedImage] = useState(null)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [quantity, setQuantity] = useState(1)
  
  const customizableProducts = products.filter(p => p.customizable)
  
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleAddToCart = () => {
    if (!uploadedImage) {
      alert('Por favor, faça upload de uma imagem primeiro')
      return
    }
    
    addItem({
      ...selectedProduct,
      customization: {
        image: uploadedImage,
        rotation,
        scale
      }
    }, quantity)
    
    alert('Produto personalizado adicionado ao carrinho!')
    navigate('/carrinho')
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">
          Crie seu Produto <span className="gradient-text">Único</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Product Selection & Upload */}
          <div className="space-y-6">
            {/* Product Selection */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Escolha o Produto</h3>
              <div className="grid grid-cols-2 gap-3">
                {customizableProducts.slice(0, 6).map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`p-3 rounded-xl transition-all ${
                      selectedProduct?.id === product.id
                        ? 'ring-2 ring-primary-500 bg-primary-500/20'
                        : 'glass glass-hover'
                    }`}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <div className="text-sm font-medium line-clamp-1">{product.name}</div>
                    <div className="text-xs text-primary-400">R$ {product.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Upload */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Sua Arte</h3>
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full glass glass-hover p-12 rounded-xl border-2 border-dashed border-white/20 hover:border-primary-500 transition-all group"
              >
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-white/40 group-hover:text-primary-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <div className="font-bold mb-1">Clique para fazer upload</div>
                <div className="text-sm text-white/60">PNG, JPG ou PDF até 10MB</div>
              </button>
              
              {uploadedImage && (
                <div className="mt-4 p-4 glass rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">✅ Imagem carregada</span>
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remover
                    </button>
                  </div>
                  <img src={uploadedImage} alt="Preview" className="w-full h-32 object-contain rounded" />
                </div>
              )}
            </div>
            
            {/* Adjustments */}
            {uploadedImage && (
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Ajustes</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Rotação: {rotation}°</label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={rotation}
                      onChange={(e) => setRotation(parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Tamanho: {Math.round(scale * 100)}%</label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.1"
                      value={scale}
                      onChange={(e) => setScale(parseFloat(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Quantidade</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center glass rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 hover:bg-white/10"
                  >
                    -
                  </button>
                  <span className="px-6 font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-white/10"
                  >
                    +
                  </button>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/60">Total:</div>
                  <div className="text-2xl font-bold gradient-text">
                    R$ {(selectedProduct.price * quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: 3D Preview */}
          <div className="space-y-6">
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold mb-4">Preview</h3>
              
              {/* Simplified 3D Preview with CSS */}
              <div className="relative aspect-square bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-xl overflow-hidden">
                {/* Product Image */}
                {selectedProduct && (
                  <img
                    src={selectedProduct.images3d?.[0] || selectedProduct.images[0]}
                    alt={selectedProduct.name}
                    className="absolute inset-0 w-full h-full object-contain p-8"
                    style={{
                      transform: `rotate(${rotation * 0.1}deg)` // Slight rotation for effect
                    }}
                  />
                )}
                
                {/* Uploaded Image Overlay */}
                {uploadedImage && (
                  <div
                    className="absolute inset-0 flex items-center justify-center p-20"
                    style={{
                      transform: `rotate(${rotation}deg) scale(${scale})`,
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    <img
                      src={uploadedImage}
                      alt="Your design"
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                )}
                
                {!uploadedImage && (
                  <div className="absolute inset-0 flex items-center justify-center text-white/40">
                    Faça upload de uma imagem para ver o preview
                  </div>
                )}
              </div>
              
              {/* Info */}
              <div className="mt-4 p-4 glass rounded-xl text-sm text-white/70">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Dica:</span>
                </div>
                <p>Use imagens em alta resolução (mínimo 720p) para melhor qualidade de impressão. A visualização é aproximada.</p>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="btn btn-primary w-full text-lg mt-4"
                disabled={!uploadedImage}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
