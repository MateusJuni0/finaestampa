import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ProductCustomizer({ productImage, onCustomize }) {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [text, setText] = useState('')
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const fileInputRef = useRef(null)
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const handleSave = () => {
    onCustomize?.({
      uploadedImage,
      text,
      rotation,
      scale
    })
  }
  
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Preview */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Preview ao Vivo</h3>
        <div className="card relative aspect-square bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center overflow-hidden">
          {/* Product Base */}
          <img
            src={productImage || '/imagem/caneca1.jpeg'}
            alt="Produto"
            className="absolute inset-0 w-full h-full object-contain opacity-30"
          />
          
          {/* Custom Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            {uploadedImage && (
              <motion.img
                src={uploadedImage}
                alt="Preview"
                className="max-w-[200px] max-h-[200px] object-contain"
                style={{
                  transform: `rotate(${rotation}deg) scale(${scale})`,
                }}
                drag
                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                whileHover={{ scale: scale * 1.05 }}
              />
            )}
            
            {text && (
              <motion.div
                className="text-2xl font-bold gradient-text text-center px-4"
                drag
                dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
              >
                {text}
              </motion.div>
            )}
            
            {!uploadedImage && !text && (
              <div className="text-center text-white/40">
                <p className="text-4xl mb-2">🎨</p>
                <p>Adicione imagem ou texto</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="glass p-4 rounded-xl text-sm text-white/70">
          💡 <strong>Dica:</strong> Arraste os elementos para reposicioná-los!
        </div>
      </div>
      
      {/* Controls */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Personalize Seu Produto</h3>
        
        {/* Image Upload */}
        <div className="card">
          <label className="block text-sm font-medium mb-2">📷 Sua Imagem</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="btn btn-outline w-full ripple"
          >
            {uploadedImage ? 'Trocar Imagem' : 'Escolher Imagem'}
          </button>
          {uploadedImage && (
            <button
              onClick={() => setUploadedImage(null)}
              className="btn btn-ghost w-full mt-2 text-red-400"
            >
              Remover Imagem
            </button>
          )}
        </div>
        
        {/* Text */}
        <div className="card">
          <label className="block text-sm font-medium mb-2">✍️ Texto Personalizado</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite seu texto aqui..."
            className="input"
            maxLength={50}
          />
          <div className="text-xs text-white/50 mt-1">
            {text.length}/50 caracteres
          </div>
        </div>
        
        {/* Controls */}
        {uploadedImage && (
          <div className="card space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                🔄 Rotação: {rotation}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={rotation}
                onChange={(e) => setRotation(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                🔍 Tamanho: {Math.round(scale * 100)}%
              </label>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        )}
        
        {/* Actions */}
        <div className="space-y-3">
          <motion.button
            onClick={handleSave}
            className="btn btn-primary w-full text-lg ripple glow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ✓ Adicionar ao Carrinho
          </motion.button>
          
          <button
            onClick={() => {
              setUploadedImage(null)
              setText('')
              setRotation(0)
              setScale(1)
            }}
            className="btn btn-outline w-full"
          >
            Limpar Tudo
          </button>
        </div>
        
        <div className="glass p-4 rounded-xl text-sm space-y-2">
          <h4 className="font-bold">📋 Informações:</h4>
          <ul className="text-white/70 space-y-1 list-disc list-inside">
            <li>Imagens em alta resolução (mínimo 1000x1000px)</li>
            <li>Formatos: JPG, PNG, SVG</li>
            <li>Impressão em sublimação profissional</li>
            <li>Cores vibrantes e duradouras</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
