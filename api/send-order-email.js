// Vercel Serverless Function
// Deploy automático quando fizer git push
// Endpoint: https://seusite.vercel.app/api/send-order-email

import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Só aceita POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }
  
  // Pega dados do pedido
  const { orderId, items, total, customer, date } = req.body
  
  if (!orderId || !customer?.email) {
    return res.status(400).json({ error: 'Dados incompletos' })
  }
  
  // Configura transporter do Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })
  
  // Monta HTML do email
  const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #22d3ee, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; }
        .order-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .item { border-bottom: 1px solid #e5e7eb; padding: 15px 0; }
        .item:last-child { border-bottom: none; }
        .total { font-size: 24px; font-weight: bold; color: #22d3ee; text-align: right; margin-top: 20px; }
        .footer { background: #1e293b; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #22d3ee; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Pedido Confirmado!</h1>
          <p>Pedido #${orderId}</p>
        </div>
        
        <div class="content">
          <p>Olá, <strong>${customer.name}</strong>!</p>
          <p>Seu pedido foi recebido com sucesso e já está sendo processado pela nossa equipe.</p>
          
          <div class="order-box">
            <h2>📦 Detalhes do Pedido</h2>
            ${items.map(item => `
              <div class="item">
                <strong>${item.name}</strong><br>
                Quantidade: ${item.quantity}x<br>
                Valor: R$ ${(item.price * item.quantity).toFixed(2)}
              </div>
            `).join('')}
            
            <div class="total">
              Total: R$ ${total.toFixed(2)}
            </div>
          </div>
          
          <div class="order-box">
            <h3>📍 Endereço de Entrega</h3>
            <p>
              ${customer.street}, ${customer.number}${customer.complement ? ` - ${customer.complement}` : ''}<br>
              ${customer.neighborhood} - ${customer.city}/${customer.state}<br>
              CEP: ${customer.cep}
            </p>
          </div>
          
          <div class="order-box">
            <h3>📞 Contato</h3>
            <p>
              Email: ${customer.email}<br>
              Telefone: ${customer.phone}
            </p>
          </div>
          
          <p><strong>Próximos passos:</strong></p>
          <ul>
            <li>Você receberá atualizações por email</li>
            <li>A Renata entrará em contato em breve via WhatsApp</li>
            <li>Prazo de produção: 3-5 dias úteis</li>
          </ul>
          
          <center>
            <a href="https://wa.me/5551995765088" class="button">
              💬 Falar no WhatsApp
            </a>
          </center>
        </div>
        
        <div class="footer">
          <p><strong>Fina Estampa</strong></p>
          <p>Rua Miraguaia, 656 - Capão da Canoa - RS</p>
          <p>WhatsApp: (51) 99576-5088</p>
          <p style="font-size: 12px; margin-top: 15px; opacity: 0.7;">
            Este é um email automático. Em caso de dúvidas, entre em contato conosco.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
  
  try {
    // Envia email para o cliente
    await transporter.sendMail({
      from: `"Fina Estampa" <${process.env.EMAIL_USER}>`,
      to: customer.email,
      subject: `✅ Pedido #${orderId} confirmado - Fina Estampa`,
      html: emailHTML
    })
    
    // Envia cópia para a admin (Renata)
    const adminHTML = `
      <h2>🔔 Novo Pedido Recebido!</h2>
      <p><strong>Pedido:</strong> #${orderId}</p>
      <p><strong>Cliente:</strong> ${customer.name}</p>
      <p><strong>Email:</strong> ${customer.email}</p>
      <p><strong>Telefone:</strong> ${customer.phone}</p>
      <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
      
      <h3>Itens:</h3>
      <ul>
        ${items.map(item => `
          <li>${item.name} - ${item.quantity}x - R$ ${(item.price * item.quantity).toFixed(2)}</li>
        `).join('')}
      </ul>
      
      <h3>Entrega:</h3>
      <p>
        ${customer.street}, ${customer.number}${customer.complement ? ` - ${customer.complement}` : ''}<br>
        ${customer.neighborhood} - ${customer.city}/${customer.state}<br>
        CEP: ${customer.cep}
      </p>
      
      <p><a href="https://wa.me/55${customer.phone.replace(/\D/g, '')}">💬 Contatar cliente no WhatsApp</a></p>
    `
    
    await transporter.sendMail({
      from: `"Site Fina Estampa" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_ADMIN,
      subject: `🔔 Novo Pedido #${orderId} - ${customer.name}`,
      html: adminHTML
    })
    
    return res.status(200).json({ 
      success: true, 
      message: 'Emails enviados com sucesso' 
    })
    
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return res.status(500).json({ 
      error: 'Erro ao enviar email', 
      details: error.message 
    })
  }
}
