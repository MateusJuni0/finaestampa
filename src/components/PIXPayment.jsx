import { useEffect, useRef, useState } from 'react'

export default function PIXPayment({ amount, orderId, onSuccess, customerEmail, customerName }) {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [pixCode, setPixCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [checking, setChecking] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [paymentId, setPaymentId] = useState(null)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    createPayment()
  }, [amount, orderId])
  
  const createPayment = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: amount.toFixed(2),
          orderId,
          email: customerEmail,
          name: customerName
        })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar pagamento')
      }
      
      // Salva ID do pagamento para verificação
      setPaymentId(data.id)
      
      // Define QR Code (base64 ou URL)
      if (data.qr_code_base64) {
        setQrCodeUrl(`data:image/png;base64,${data.qr_code_base64}`)
      }
      
      // Define código PIX copiável
      if (data.qr_code) {
        setPixCode(data.qr_code)
      }
      
      setLoading(false)
    } catch (err) {
      console.error('Erro ao criar pagamento:', err)
      setError(err.message)
      setLoading(false)
    }
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }
  
  const checkPayment = async () => {
    if (!paymentId) {
      alert('⚠️ ID do pagamento não encontrado')
      return
    }
    
    setChecking(true)
    
    try {
      // Verifica status do pagamento via API
      const response = await fetch(`/api/check-payment?id=${paymentId}`)
      const data = await response.json()
      
      if (data.status === 'approved') {
        onSuccess?.()
      } else if (data.status === 'pending') {
        alert('⏳ Pagamento ainda não confirmado. Aguarde alguns segundos e tente novamente.')
      } else {
        alert(`⚠️ Status do pagamento: ${data.status}`)
      }
    } catch (err) {
      console.error('Erro ao verificar pagamento:', err)
      alert('⚠️ Erro ao verificar pagamento. Tente novamente.')
    }
    
    setChecking(false)
  }
  
  if (loading) {
    return (
      <div className="card space-y-6">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">⏳</div>
          <h3 className="text-xl font-bold mb-2">Gerando pagamento PIX...</h3>
          <p className="text-white/60">Aguarde alguns instantes</p>
        </div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="card space-y-6">
        <div className="text-center py-12">
          <div className="text-4xl mb-4">❌</div>
          <h3 className="text-xl font-bold mb-2">Erro ao gerar pagamento</h3>
          <p className="text-white/60 mb-4">{error}</p>
          <button onClick={createPayment} className="btn btn-primary">
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="card space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Pague com PIX</h3>
        <p className="text-white/60">Escaneie o QR Code ou copie o código</p>
      </div>
      
      {/* QR Code */}
      <div className="flex justify-center">
        <div className="bg-white p-4 rounded-xl">
          {qrCodeUrl && (
            <img src={qrCodeUrl} alt="QR Code PIX" className="w-64 h-64" />
          )}
        </div>
      </div>
      
      {/* Valor */}
      <div className="text-center">
        <div className="text-sm text-white/60 mb-1">Valor a pagar</div>
        <div className="text-4xl font-bold gradient-text">
          R$ {amount.toFixed(2)}
        </div>
      </div>
      
      {/* Código PIX para copiar */}
      <div className="space-y-2">
        <label className="text-sm text-white/60">Ou copie o código PIX:</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={pixCode}
            readOnly
            className="input flex-1 font-mono text-xs"
          />
          <button
            onClick={copyToClipboard}
            className="btn btn-outline px-6"
          >
            {copied ? '✓ Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
      
      {/* Instruções */}
      <div className="glass p-4 rounded-xl space-y-2 text-sm">
        <h4 className="font-bold">Como pagar:</h4>
        <ol className="list-decimal list-inside space-y-1 text-white/70">
          <li>Abra o app do seu banco</li>
          <li>Escolha a opção "Pagar com PIX"</li>
          <li>Escaneie o QR Code ou cole o código</li>
          <li>Confirme o pagamento</li>
        </ol>
      </div>
      
      {/* Botão de verificação */}
      <button
        onClick={checkPayment}
        disabled={checking}
        className="btn btn-primary w-full text-lg"
      >
        {checking ? '🔄 Verificando pagamento...' : '✓ Já paguei'}
      </button>
      
      <div className="text-center text-xs text-white/50">
        ⚡ Pagamento processado instantaneamente
      </div>
    </div>
  )
}
