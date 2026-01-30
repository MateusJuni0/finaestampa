// Webhook para receber notificações de pagamento do Mercado Pago
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const { type, data } = req.body
    
    console.log('📥 Webhook received:', { type, data })
    
    // Mercado Pago envia notificações de vários tipos
    // Nos interessa apenas 'payment'
    if (type !== 'payment') {
      return res.status(200).json({ message: 'Notification type not handled' })
    }
    
    const paymentId = data.id
    
    if (!paymentId) {
      return res.status(400).json({ error: 'Payment ID not found' })
    }
    
    // Busca detalhes do pagamento
    const accessToken = process.env.MP_ACCESS_TOKEN
    
    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    
    const payment = await paymentResponse.json()
    
    console.log('💰 Payment status:', {
      id: payment.id,
      status: payment.status,
      external_reference: payment.external_reference,
      amount: payment.transaction_amount
    })
    
    // Se pagamento foi aprovado, poderia:
    // - Enviar email de confirmação
    // - Atualizar banco de dados
    // - Notificar sistema de estoque
    // - etc
    
    if (payment.status === 'approved') {
      console.log('✅ Pagamento aprovado!', payment.external_reference)
      
      // Aqui você pode adicionar lógica adicional
      // Por exemplo: enviar email, salvar no DB, etc
      
      // Exemplo: poderia chamar seu endpoint de envio de email
      // await fetch(`${process.env.VERCEL_URL}/api/send-order-email`, { ... })
    }
    
    // Sempre retorna 200 para o Mercado Pago saber que recebeu
    return res.status(200).json({ 
      message: 'Webhook processed',
      payment_id: paymentId,
      status: payment.status
    })
    
  } catch (error) {
    console.error('❌ Webhook error:', error)
    // Mesmo com erro, retorna 200 para não ficar reenviando
    return res.status(200).json({ 
      message: 'Webhook received with errors',
      error: error.message 
    })
  }
}
