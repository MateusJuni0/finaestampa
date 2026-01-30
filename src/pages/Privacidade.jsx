import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Privacidade() {
  const sections = [
    {
      icon: '📊',
      title: '1. Dados que Coletamos',
      content: `Coletamos apenas os dados necessários para processar seu pedido e oferecer um bom atendimento:

**Dados de Identificação:**
• Nome completo
• CPF (para nota fiscal)
• Email
• Telefone/WhatsApp

**Dados de Entrega:**
• Endereço completo (CEP, rua, número, bairro, cidade, estado)

**Dados de Pagamento:**
• Processados diretamente pelo gateway de pagamento
• NÃO armazenamos dados de cartão de crédito

**Dados de Navegação:**
• Cookies para funcionamento do site e carrinho de compras
• Dados anônimos de analytics para melhorar a experiência`
    },
    {
      icon: '🎯',
      title: '2. Como Usamos seus Dados',
      content: `Utilizamos seus dados exclusivamente para:

• Processar e entregar seus pedidos
• Enviar confirmações e atualizações de status
• Entrar em contato sobre seu pedido, se necessário
• Emitir nota fiscal
• Responder dúvidas e solicitações de suporte
• Enviar comunicações sobre promoções (apenas se você autorizar)
• Melhorar nossos produtos e serviços

**Nunca utilizamos seus dados para:**
• Vender ou compartilhar com terceiros para fins de marketing
• Enviar spam ou comunicações não solicitadas
• Criar perfis de comportamento para publicidade direcionada`
    },
    {
      icon: '🤝',
      title: '3. Compartilhamento de Dados',
      content: `Compartilhamos dados apenas quando estritamente necessário:

**Correios:**
• Nome e endereço para entrega

**Gateway de Pagamento:**
• Dados necessários para processar o pagamento

**Contabilidade:**
• Dados fiscais para emissão de notas e cumprimento de obrigações legais

**Nunca compartilhamos:**
• Suas imagens de personalização
• Seus dados com empresas de marketing
• Suas informações pessoais para fins comerciais de terceiros`
    },
    {
      icon: '🔒',
      title: '4. Segurança dos Dados',
      content: `Implementamos medidas técnicas e organizacionais para proteger seus dados:

**Proteção Técnica:**
• Conexão segura HTTPS em todo o site
• Criptografia de dados sensíveis
• Servidores seguros com backup regular
• Pagamentos processados por gateways certificados PCI-DSS

**Proteção Organizacional:**
• Acesso restrito aos dados apenas por pessoas autorizadas
• Política interna de privacidade e confidencialidade
• Treinamento da equipe em proteção de dados`
    },
    {
      icon: '⏰',
      title: '5. Retenção de Dados',
      content: `Mantemos seus dados pelo tempo necessário:

**Dados de Pedidos:**
• 5 anos após a compra (obrigação fiscal)

**Dados de Contato:**
• Enquanto você mantiver relacionamento conosco
• Excluídos após 2 anos de inatividade

**Imagens de Personalização:**
• Excluídas em até 30 dias após a entrega do pedido

**Cookies:**
• Sessão: excluídos ao fechar o navegador
• Persistentes: até 1 ano`
    },
    {
      icon: '✋',
      title: '6. Seus Direitos (LGPD)',
      content: `Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:

**Acesso:**
Solicitar uma cópia de todos os dados que temos sobre você

**Correção:**
Corrigir dados incompletos, inexatos ou desatualizados

**Exclusão:**
Solicitar a exclusão dos seus dados pessoais

**Portabilidade:**
Receber seus dados em formato estruturado

**Revogação:**
Retirar consentimento para comunicações de marketing

**Oposição:**
Se opor ao tratamento de dados para determinados fins

Para exercer qualquer direito, entre em contato conosco.`
    },
    {
      icon: '🍪',
      title: '7. Cookies',
      content: `Utilizamos cookies para:

**Essenciais (obrigatórios):**
• Manter seu carrinho de compras
• Lembrar preferências de navegação
• Garantir a segurança do site

**Analytics (opcionais):**
• Entender como os visitantes usam o site
• Melhorar a experiência do usuário
• Dados coletados de forma anônima

Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar o funcionamento do carrinho de compras.`
    },
    {
      icon: '👶',
      title: '8. Menores de Idade',
      content: `Nosso site não é direcionado a menores de 18 anos. Se você é menor de idade, deve ter autorização dos pais ou responsáveis para realizar compras.

Não coletamos intencionalmente dados de crianças. Se identificarmos dados de menores coletados sem consentimento dos responsáveis, os excluiremos imediatamente.`
    },
    {
      icon: '🔄',
      title: '9. Alterações na Política',
      content: `Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através de:

• Aviso destacado no site
• Email para clientes cadastrados

A data da última atualização está indicada no final desta página. O uso continuado do site após alterações constitui aceitação da nova política.`
    },
    {
      icon: '📞',
      title: '10. Contato e DPO',
      content: `Para questões sobre privacidade ou para exercer seus direitos:

**Email:** Renatatramontim91@gmail.com
**WhatsApp:** (51) 99576-5088
**Endereço:** Rua Miraguaia, 656 - Capão da Canoa/RS

Respondemos solicitações de privacidade em até 15 dias úteis.

**Encarregado de Dados (DPO):**
Renata Lima Soares
Email: Renatatramontim91@gmail.com`
    }
  ]
  
  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Política de <span className="gradient-text">Privacidade</span>
          </h1>
          <p className="text-white/70">
            Como protegemos e utilizamos seus dados pessoais
          </p>
        </motion.div>
        
        {/* LGPD Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-12 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20"
        >
          <div className="flex items-center gap-4">
            <div className="text-5xl">🛡️</div>
            <div>
              <h2 className="text-xl font-bold mb-1">Em conformidade com a LGPD</h2>
              <p className="text-white/70 text-sm">
                Lei Geral de Proteção de Dados (Lei nº 13.709/2018). 
                Seus dados são tratados com transparência, segurança e respeito aos seus direitos.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          <div className="card text-center">
            <div className="text-3xl mb-2">🔐</div>
            <div className="font-bold">Dados Seguros</div>
            <div className="text-xs text-white/60">Conexão HTTPS + Criptografia</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-2">🚫</div>
            <div className="font-bold">Sem Spam</div>
            <div className="text-xs text-white/60">Não vendemos seus dados</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="font-bold">Seus Direitos</div>
            <div className="text-xs text-white/60">Acesso, correção e exclusão</div>
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="card"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                <span className="text-cyan-400">{section.title}</span>
              </h2>
              <div className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Last Update */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-white/50"
        >
          <p>Última atualização: Janeiro de 2026</p>
          <p className="mt-4">
            Veja também nossos{' '}
            <Link to="/termos" className="text-cyan-400 hover:underline">Termos de Uso</Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
