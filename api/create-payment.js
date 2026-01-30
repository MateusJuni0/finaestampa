// Endpoint para criar pagamento PIX via Mercado Pago
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const { amount, orderId, email, name } = req.body
    
    if (!amount || !orderId) {
      return res.status(400).json({ error: 'Missing required fields' })
    }
    
    const accessToken = process.env.MP_ACCESS_TOKEN
    
    if (!accessToken) {
      console.error('MP_ACCESS_TOKEN not configured')
      return res.status(500).json({ error: 'Payment gateway not configured' })
    }
    
    // Cria pagamento PIX no Mercado Pago
    const payment = {
      transaction_amount: parseFloat(amount),
      description: `Pedido #${orderId} - Fina Estampa`,
      payment_method_id: 'pix',
      payer: {
        email: email || 'cliente@finaestampas.com.br',
        first_name: name || 'Cliente'
      },
      notification_url: `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'https://finaestampas.com.br'}/api/mercadopago-webhook`,
      external_reference: orderId,
      metadata: {
        order_id: orderId
      }
    }
    
    const response = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-Idempotency-Key': orderId
      },
      body: JSON.stringify(payment)
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('Mercado Pago error:', data)
      return res.status(response.status).json({ 
        error: 'Payment creation failed',
        details: data
      })
    }
    
    // Retorna dados do pagamento
    return res.status(200).json({
      id: data.id,
      status: data.status,
      qr_code: data.point_of_interaction?.transaction_data?.qr_code,
      qr_code_base64: data.point_of_interaction?.transaction_data?.qr_code_base64,
      ticket_url: data.point_of_interaction?.transaction_data?.ticket_url,
      external_reference: data.external_reference
    })
    
  } catch (error) {
    console.error('Error creating payment:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
