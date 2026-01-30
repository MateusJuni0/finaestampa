import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../utils/cartContext'
import { useSEO } from '../utils/useSEO'
import PIXPayment from '../components/PIXPayment'

export default function Checkout() {
  useSEO({
    title: 'Finalizar Compra | Checkout - Fina Estampa',
    description: 'Finalize sua compra com segurança. Pagamento via PIX ou cartão de crédito.',
  })
  
  const navigate = useNavigate()
  const { items, total, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    paymentMethod: 'pix'
  })
  
  const [shipping, setShipping] = useState(null)
  const [orderCompleted, setOrderCompleted] = useState(false)
  
  // Só redireciona para carrinho se não tiver items E não estiver com pedido finalizado
  if (items.length === 0 && !orderCompleted && step < 3) {
    navigate('/carrinho')
    return null
  }
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const calculateShipping = async () => {
    setLoading(true)
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setShipping({
      price: 25.90,
      days: 5
    })
    setLoading(false)
    setStep(2)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Gera ID do pedido
    const newOrderId = 'FE' + Date.now().toString().slice(-8)
    setOrderId(newOrderId)
    
    // Se for PIX, vai para tela de pagamento (step 3)
    if (formData.paymentMethod === 'pix') {
      setLoading(false)
      setStep(3)
      return
    }
    
    // Para cartão, processa direto (simulado)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    finishOrder(newOrderId)
  }
  
  const finishOrder = async (orderIdToUse) => {
    // Marca pedido como finalizado ANTES de limpar carrinho
    // para evitar redirecionamento indesejado
    setOrderCompleted(true)
    
    const orderData = {
      orderId: orderIdToUse,
      items,
      total: total + (shipping?.price || 0),
      customer: formData,
      date: new Date().toISOString()
    }
    
    console.log('Order placed:', orderData)
    
    // Tenta enviar email (não bloqueia se falhar)
    try {
      const response = await fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })
      
      if (response.ok) {
        console.log('✅ Email enviado com sucesso')
      } else {
        console.warn('⚠️ Erro ao enviar email, mas pedido foi registrado')
      }
    } catch (error) {
      console.warn('⚠️ Não foi possível enviar email:', error)
    }
    
    // Clear cart and show success
    clearCart()
    alert('✅ Pedido realizado com sucesso! Você receberá um email de confirmação.')
    navigate('/')
  }
  
  const orderTotal = total + (shipping?.price || 0)
  
  return (
    <div className="py-12">
      <div className="container-custom max-w-6xl">
        <h1 className="text-4xl font-display font-bold mb-8">
          Finalizar <span className="gradient-text">Compra</span>
        </h1>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12 gap-4">
          {[
            { num: 1, label: 'Dados' },
            { num: 2, label: 'Pagamento' },
            { num: 3, label: 'Confirmação' }
          ].map((s) => (
            <div key={s.num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                step >= s.num ? 'bg-cyan-500 text-white' : 'glass text-white/40'
              }`}>
                {s.num}
              </div>
              <span className="ml-2 text-sm hidden sm:inline">{s.label}</span>
              {s.num < 3 && <div className="w-12 h-0.5 bg-white/10 mx-4"></div>}
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={step === 1 ? (e) => { e.preventDefault(); calculateShipping(); } : handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  {/* Personal Info */}
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">Dados Pessoais</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nome completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Telefone/WhatsApp"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                      <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">Endereço de Entrega</h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        name="cep"
                        placeholder="CEP"
                        value={formData.cep}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Rua"
                        value={formData.street}
                        onChange={handleInputChange}
                        className="input"
                        required
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="number"
                          placeholder="Número"
                          value={formData.number}
                          onChange={handleInputChange}
                          className="input"
                          required
                        />
                        <input
                          type="text"
                          name="complement"
                          placeholder="Complemento (opcional)"
                          value={formData.complement}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="neighborhood"
                          placeholder="Bairro"
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          className="input"
                          required
                        />
                        <input
                          type="text"
                          name="city"
                          placeholder="Cidade"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="input"
                          required
                        />
                        <input
                          type="text"
                          name="state"
                          placeholder="Estado"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="input"
                          maxLength={2}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full text-lg" disabled={loading}>
                    {loading ? 'Calculando frete...' : 'Continuar para Pagamento'}
                  </button>
                </>
              )}
              
              {step === 2 && (
                <>
                  {/* Payment Method */}
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4">Forma de Pagamento</h3>
                    <div className="space-y-3">
                      <label className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                        formData.paymentMethod === 'pix' ? 'glass ring-2 ring-cyan-500' : 'glass glass-hover'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="pix"
                          checked={formData.paymentMethod === 'pix'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">PIX</div>
                          <div className="text-sm text-white/60">Aprovação imediata</div>
                        </div>
                        <span className="text-2xl">🔵</span>
                      </label>
                      
                      <label className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                        formData.paymentMethod === 'card' ? 'glass ring-2 ring-cyan-500' : 'glass glass-hover'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="font-semibold">Cartão de Crédito</div>
                          <div className="text-sm text-white/60">Parcelamento em até 12x</div>
                        </div>
                        <span className="text-2xl">💳</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setStep(1)} className="btn btn-outline flex-1">
                      Voltar
                    </button>
                    <button type="submit" className="btn btn-primary flex-1 text-lg" disabled={loading}>
                      {loading ? 'Processando...' : 'Finalizar Pedido'}
                    </button>
                  </div>
                </>
              )}
              
              {step === 3 && formData.paymentMethod === 'pix' && (
                <PIXPayment
                  amount={orderTotal}
                  orderId={orderId}
                  customerEmail={formData.email}
                  customerName={formData.name}
                  onSuccess={() => finishOrder(orderId)}
                />
              )}
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24 space-y-4">
              <h3 className="text-xl font-bold">Resumo do Pedido</h3>
              
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div key={index} className="flex gap-3 text-sm">
                    <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-white/60">Qtd: {item.quantity}</div>
                    </div>
                    <div className="font-bold">R$ {(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 py-4 border-y border-white/10">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                {shipping && (
                  <div className="flex justify-between text-white/70">
                    <span>Frete ({shipping.days} dias úteis)</span>
                    <span>R$ {shipping.price.toFixed(2)}</span>
                  </div>
                )}
              </div>
              
              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span className="gradient-text">R$ {orderTotal.toFixed(2)}</span>
              </div>
              
              <div className="text-xs text-white/60 text-center pt-4 border-t border-white/10">
                🔒 Pagamento seguro via Mercado Pago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
