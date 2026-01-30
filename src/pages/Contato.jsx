import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    
    // Simula envio (em produção, integrar com API)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSending(false)
    setSent(true)
    
    // Abre WhatsApp com a mensagem
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0AAssunto: ${formData.subject}%0A%0A${formData.message}%0A%0AContato: ${formData.email} | ${formData.phone}`
    window.open(`https://wa.me/5551995765088?text=${whatsappMessage}`, '_blank')
  }
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const contactInfo = [
    {
      icon: '📍',
      title: 'Endereço',
      content: 'Rua Miraguaia, 656\nJardim, Capão da Canoa - RS\nCEP: 95555-000',
      link: 'https://maps.google.com/?q=Rua+Miraguaia+656+Capao+da+Canoa+RS'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      content: '(51) 99576-5088',
      link: 'https://wa.me/5551995765088'
    },
    {
      icon: '📧',
      title: 'Email',
      content: 'Renatatramontim91@gmail.com',
      link: 'mailto:Renatatramontim91@gmail.com'
    },
    {
      icon: '🕐',
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h',
      link: null
    }
  ]
  
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tire suas dúvidas, faça um orçamento ou conheça mais sobre nossos produtos. 
            Atendimento personalizado pela proprietária Renata.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link || '#'}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`card glass-hover ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={info.link ? { scale: 1.02 } : {}}
                >
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-white/70 text-sm whitespace-pre-line">{info.content}</p>
                </motion.a>
              ))}
            </div>
            
            {/* Map Embed */}
            <div className="card overflow-hidden p-0 mt-6">
              <iframe
                title="Localização Fina Estampa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.7!2d-50.1!3d-29.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzAwLjAiUyA1MMKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Social Links */}
            <div className="card">
              <h3 className="font-bold mb-4">Siga nas Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/finaestampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-xl hover:text-pink-400 transition-colors"
                >
                  📸
                </a>
                <a
                  href="https://www.facebook.com/finaestampa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-xl hover:text-blue-400 transition-colors"
                >
                  👤
                </a>
                <a
                  href="https://wa.me/5551995765088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-xl hover:text-green-400 transition-colors"
                >
                  💬
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
              
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-white/70 mb-6">
                    Redirecionamos você para o WhatsApp. 
                    Responderemos em breve!
                  </p>
                  <button
                    onClick={() => { setSent(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    className="btn btn-outline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="Orçamento">Solicitar Orçamento</option>
                      <option value="Dúvida sobre Produto">Dúvida sobre Produto</option>
                      <option value="Acompanhar Pedido">Acompanhar Pedido</option>
                      <option value="Personalização">Personalização Especial</option>
                      <option value="Atacado">Pedido em Atacado</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="Descreva sua solicitação em detalhes..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn-primary w-full text-lg py-4 disabled:opacity-50"
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      '📤 Enviar Mensagem'
                    )}
                  </button>
                  
                  <p className="text-xs text-white/50 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp para continuar a conversa.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
