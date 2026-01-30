import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSEO } from '../utils/useSEO'

export default function Termos() {
  useSEO({
    title: 'Termos de Uso | Fina Estampa',
    description: 'Termos e condições de uso do site e serviços da Fina Estampa. Política de trocas, garantia, pagamentos e entrega.',
  })
  
  const sections = [
    {
      title: '1. Aceitação dos Termos',
      content: `Ao acessar e utilizar o site da Fina Estampa (finaestampas.com.br), você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se não concordar com alguma parte, recomendamos que não utilize nossos serviços.

Estes termos podem ser atualizados periodicamente, sendo sua responsabilidade verificar eventuais mudanças. O uso continuado do site após alterações constitui aceitação dos novos termos.`
    },
    {
      title: '2. Descrição dos Serviços',
      content: `A Fina Estampa oferece serviços de personalização e venda de produtos através de técnicas de sublimação e impressão digital. Nossos serviços incluem:

• Venda de produtos personalizáveis (canecas, camisetas, chaveiros, etc.)
• Ferramenta online de personalização com visualização em tempo real
• Produção sob demanda com base nas especificações do cliente
• Entrega para todo o Brasil via Correios
• Atendimento ao cliente via WhatsApp, email e formulário de contato`
    },
    {
      title: '3. Cadastro e Conta',
      content: `Para realizar compras, não é obrigatório criar conta. Os dados necessários para o pedido (nome, email, telefone, endereço) são coletados durante o checkout.

Você é responsável por fornecer informações verdadeiras e atualizadas. Informações incorretas podem resultar em atrasos ou impossibilidade de entrega.`
    },
    {
      title: '4. Produtos e Personalização',
      content: `**Imagens e Artes:**
• O cliente é responsável por garantir que possui direitos sobre as imagens enviadas
• Não produzimos materiais que violem direitos autorais, marcas registradas ou conteúdo ilegal
• Reservamo-nos o direito de recusar pedidos com conteúdo ofensivo, discriminatório ou ilegal

**Visualização:**
• A ferramenta de personalização oferece uma aproximação do resultado final
• Pequenas variações de cor podem ocorrer devido a diferenças entre monitores e impressão
• O resultado final pode ter variação de até 5% em relação à visualização`
    },
    {
      title: '5. Preços e Pagamentos',
      content: `**Preços:**
• Todos os preços estão em Reais (BRL) e incluem impostos
• Preços podem ser alterados sem aviso prévio, mas pedidos já confirmados mantêm o valor acordado
• Promoções e descontos têm prazo de validade definido

**Formas de Pagamento:**
• PIX: Aprovação imediata
• Cartão de Crédito: Parcelamento em até 12x (juros do cartão)
• Os pagamentos são processados por gateways seguros e certificados

**Frete:**
• Calculado automaticamente com base no CEP de entrega
• O valor é adicionado ao total do pedido no checkout`
    },
    {
      title: '6. Prazo de Produção e Entrega',
      content: `**Produção:**
• Prazo de produção: 3 a 5 dias úteis após confirmação do pagamento e aprovação da arte
• Pedidos urgentes podem ser negociados (sujeito à disponibilidade)

**Entrega:**
• Enviamos para todo o Brasil via Correios (PAC ou SEDEX)
• Prazo de entrega: 5 a 15 dias úteis, dependendo da região
• O cliente pode acompanhar o pedido pelo código de rastreamento enviado por email

**Retirada:**
• Disponível gratuitamente em nosso endereço em Capão da Canoa/RS
• Horário: Segunda a Sexta, 9h às 18h`
    },
    {
      title: '7. Política de Trocas e Devoluções',
      content: `**Produtos Personalizados:**
• Por serem feitos sob medida, não aceitamos devoluções por arrependimento
• Trocas são aceitas apenas em caso de defeito de fabricação

**Defeitos de Fabricação:**
• Se houver defeito (impressão incorreta, falhas no material), entre em contato em até 7 dias após o recebimento
• Envie fotos do problema e do produto
• Reenviamos o produto correto sem custo adicional

**Danos no Transporte:**
• Fotografe a embalagem e o produto danificado
• Entre em contato em até 48 horas após o recebimento
• Providenciaremos o reenvio ou reembolso`
    },
    {
      title: '8. Garantia',
      content: `Oferecemos garantia de 90 dias contra defeitos de fabricação, incluindo:
• Impressão descascando em condições normais de uso
• Cores significativamente diferentes do aprovado
• Defeitos no material base (rachaduras, quebras sem queda)

A garantia NÃO cobre:
• Mau uso ou uso inadequado do produto
• Danos causados por quedas ou acidentes
• Desgaste natural pelo tempo
• Lavagem ou cuidados incorretos`
    },
    {
      title: '9. Propriedade Intelectual',
      content: `**Nossa Propriedade:**
• O site, layout, logotipo, textos e imagens próprias são de propriedade da Fina Estampa
• É proibida a reprodução sem autorização prévia

**Propriedade do Cliente:**
• As artes e imagens enviadas pelo cliente permanecem de sua propriedade
• Não utilizamos ou compartilhamos as artes dos clientes para outros fins
• Artes são armazenadas temporariamente apenas para produção do pedido`
    },
    {
      title: '10. Limitação de Responsabilidade',
      content: `A Fina Estampa não se responsabiliza por:
• Danos decorrentes de uso inadequado dos produtos
• Atrasos causados por terceiros (Correios, greves, etc.)
• Indisponibilidade temporária do site por manutenção ou problemas técnicos
• Informações incorretas fornecidas pelo cliente

Nossa responsabilidade máxima está limitada ao valor do pedido em questão.`
    },
    {
      title: '11. Comunicações',
      content: `Ao fornecer seus dados de contato, você autoriza a Fina Estampa a enviar:
• Confirmações e atualizações de pedidos
• Respostas a solicitações de atendimento
• Comunicações sobre promoções (opcional, pode descadastrar a qualquer momento)

Para comunicações sobre pedidos, utilizamos email e WhatsApp.`
    },
    {
      title: '12. Disposições Gerais',
      content: `• Estes termos são regidos pelas leis brasileiras
• Foro competente: Comarca de Capão da Canoa/RS
• A eventual invalidade de uma cláusula não afeta as demais
• A tolerância quanto ao descumprimento não implica renúncia

Última atualização: Janeiro de 2026`
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
            Termos de <span className="gradient-text">Uso</span>
          </h1>
          <p className="text-white/70">
            Leia atentamente antes de utilizar nossos serviços
          </p>
        </motion.div>
        
        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">📋</span> Resumo Rápido
          </h2>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              Você é responsável pelas imagens que envia para personalização
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              Produtos personalizados não são reembolsáveis por arrependimento
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              Garantia de 90 dias contra defeitos de fabricação
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              Prazo de produção: 3-5 dias úteis + tempo de entrega
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              Seus dados são protegidos conforme nossa Política de Privacidade
            </li>
          </ul>
        </motion.div>
        
        {/* Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index }}
              className="card"
            >
              <h2 className="text-xl font-bold mb-4 text-cyan-400">{section.title}</h2>
              <div className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-white/50">
            Dúvidas sobre os termos?{' '}
            <Link to="/contato" className="text-cyan-400 hover:underline">Entre em contato</Link>
          </p>
          <p className="text-white/50">
            Veja também nossa{' '}
            <Link to="/privacidade" className="text-cyan-400 hover:underline">Política de Privacidade</Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
