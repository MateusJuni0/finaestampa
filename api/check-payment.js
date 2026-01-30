// Endpoint para verificar status de pagamento no Mercado Pago
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }
  
  try {
    const { id } = req.query
    
    if (!id) {
      return res.status(400).json({ error: 'Payment ID required' })
    }
    
    const accessToken = process.env.MP_ACCESS_TOKEN
    
    if (!accessToken) {
      return res.status(500).json({ error: 'Payment gateway not configured' })
    }
    
    // Busca status do pagamento
    const response = await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      console.error('Mercado Pago error:', data)
      return res.status(response.status).json({ 
        error: 'Failed to fetch payment',
        details: data
      })
    }
    
    return res.status(200).json({
      id: data.id,
      status: data.status,
      status_detail: data.status_detail,
      external_reference: data.external_reference,
      transaction_amount: data.transaction_amount
    })
    
  } catch (error) {
    console.error('Error checking payment:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
