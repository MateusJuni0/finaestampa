import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function PIXPayment({ amount, orderId, onSuccess }) {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [pixCode, setPixCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [checking, setChecking] = useState(false)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    generatePIX()
  }, [amount, orderId])
  
  const generatePIX = () => {
    // Gera payload PIX padrão EMV
    const payload = generatePixPayload({
      pixKey: '29.813.982/0001-12', // CNPJ
      description: `Pedido #${orderId}`,
      merchantName: 'FINA ESTAMPA',
      merchantCity: 'SAO PAULO',
      amount: amount.toFixed(2),
      txid: orderId
    })
    
    setPixCode(payload)
    
    // Gera QR Code
    QRCode.toDataURL(payload, {
      width: 300,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    }).then(url => {
      setQrCodeUrl(url)
    })
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }
  
  const checkPayment = async () => {
    setChecking(true)
    // Simulação de verificação de pagamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Em produção, aqui você chamaria sua API para verificar o pagamento
    // Por enquanto, simula sucesso após alguns segundos
    const paid = Math.random() > 0.3 // 70% chance de "detectar" pagamento
    
    if (paid) {
      onSuccess?.()
    } else {
      alert('⏳ Pagamento ainda não detectado. Tente novamente em alguns segundos.')
    }
    setChecking(false)
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

// Função para gerar payload PIX padrão EMV
function generatePixPayload({ pixKey, description, merchantName, merchantCity, amount, txid }) {
  // Remove formatação do CNPJ
  const cleanKey = pixKey.replace(/[^\d]/g, '')
  
  // Payload IDs
  const payloadFormatIndicator = '000201'
  const merchantAccountInfo = `0014BR.GOV.BCB.PIX01${(cleanKey.length).toString().padStart(2, '0')}${cleanKey}`
  const merchantCategoryCode = '52040000'
  const transactionCurrency = '5303986'
  const transactionAmount = `54${(amount.length + 2).toString().padStart(2, '0')}${amount}`
  const countryCode = '5802BR'
  const merchantNameField = `59${merchantName.length.toString().padStart(2, '0')}${merchantName}`
  const merchantCityField = `60${merchantCity.length.toString().padStart(2, '0')}${merchantCity}`
  
  // Informações adicionais
  let additionalDataField = ''
  if (txid) {
    const txidField = `05${txid.length.toString().padStart(2, '0')}${txid}`
    additionalDataField = `62${txidField.length.toString().padStart(2, '0')}${txidField}`
  }
  
  const payload = 
    payloadFormatIndicator +
    merchantAccountInfo +
    merchantCategoryCode +
    transactionCurrency +
    transactionAmount +
    countryCode +
    merchantNameField +
    merchantCityField +
    additionalDataField +
    '6304'
  
  // Calcula CRC16
  const crc16 = calculateCRC16(payload)
  
  return payload + crc16
}

// Calcula CRC16 CCITT
function calculateCRC16(str) {
  let crc = 0xFFFF
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021
      } else {
        crc = crc << 1
      }
    }
  }
  crc = crc & 0xFFFF
  return crc.toString(16).toUpperCase().padStart(4, '0')
}
