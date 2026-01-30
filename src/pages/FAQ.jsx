import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSEO } from '../utils/useSEO'

const faqCategories = [
  {
    name: 'Pedidos e Pagamentos',
    icon: '💳',
    questions: [
      {
        q: 'Quais formas de pagamento são aceitas?',
        a: 'Aceitamos PIX (aprovação imediata) e Cartão de Crédito em até 12x. O PIX tem QR Code gerado automaticamente no checkout. Para cartão, trabalhamos com as principais bandeiras: Visa, Mastercard, Elo e American Express.'
      },
      {
        q: 'Como faço para acompanhar meu pedido?',
        a: 'Após a confirmação do pagamento, você receberá um email com o número do pedido e atualizações de status. Também pode entrar em contato via WhatsApp (51) 99576-5088 informando o número do pedido para saber o andamento.'
      },
      {
        q: 'Posso cancelar ou alterar meu pedido?',
        a: 'Pedidos podem ser cancelados ou alterados em até 2 horas após a compra, desde que a produção ainda não tenha iniciado. Após esse prazo, entre em contato conosco para verificar a possibilidade. Produtos personalizados em produção não podem ser cancelados.'
      },
      {
        q: 'É seguro comprar no site?',
        a: 'Sim! Nosso site usa conexão segura (HTTPS) e os pagamentos são processados por gateways certificados. Não armazenamos dados de cartão de crédito. Seus dados pessoais são protegidos conforme a LGPD.'
      }
    ]
  },
  {
    name: 'Personalização',
    icon: '🎨',
    questions: [
      {
        q: 'Qual a resolução ideal para as imagens?',
        a: 'Recomendamos imagens com no mínimo 300 DPI e 1000x1000 pixels para melhor qualidade de impressão. Formatos aceitos: JPG, PNG (preferível para fundos transparentes) e PDF vetorizado. Quanto maior a resolução, melhor o resultado final.'
      },
      {
        q: 'Posso usar qualquer imagem para personalização?',
        a: 'Você pode usar fotos pessoais, artes próprias ou imagens com direitos liberados. Não produzimos itens com imagens protegidas por direitos autorais (personagens de filmes, logos de marcas, etc.) sem autorização. Em caso de dúvida, consulte-nos.'
      },
      {
        q: 'Como funciona a visualização 3D?',
        a: 'Nossa ferramenta de personalização permite visualizar como sua arte ficará no produto em tempo real. Você pode arrastar para posicionar, ajustar o tamanho e ver diferentes ângulos (frente, lado, topo) antes de finalizar a compra.'
      },
      {
        q: 'Vocês fazem ajustes nas imagens?',
        a: 'Sim! Se sua imagem precisar de pequenos ajustes (recorte, remoção de fundo simples, ajuste de cores), fazemos sem custo adicional. Para edições mais complexas, consulte nosso serviço de arte que tem valor a parte.'
      },
      {
        q: 'O que é sublimação?',
        a: 'Sublimação é uma técnica de impressão onde a tinta é transferida para o produto através de calor e pressão. O resultado são cores vibrantes, duradouras e que não descascam, pois a tinta penetra no material. É o método mais durável para produtos personalizados.'
      }
    ]
  },
  {
    name: 'Produtos',
    icon: '☕',
    questions: [
      {
        q: 'Os produtos podem ir no microondas e lava-louças?',
        a: 'Canecas de cerâmica branca e coloridas: SIM, podem ir ao microondas e lava-louças. Canecas mágicas: NÃO devem ir ao microondas pois danifica o revestimento termossensível. Copos de vidro: verificar especificação de cada modelo. Sempre consulte as instruções de cuidado do produto.'
      },
      {
        q: 'Qual a durabilidade da impressão?',
        a: 'Nossa impressão por sublimação tem durabilidade excepcional. Em canecas e xícaras, a impressão não desbota com lavagens (testado em mais de 500 ciclos). Em camisetas, mantém a qualidade por anos se seguidas as instruções de lavagem (água fria, secar à sombra).'
      },
      {
        q: 'Vocês fazem produtos para eventos/festas?',
        a: 'Sim! Produzimos lembrancinhas personalizadas para casamentos, aniversários, chás de bebê, formaturas e eventos corporativos. Temos preços especiais para quantidades acima de 50 unidades. Consulte nosso atendimento para orçamentos de atacado.'
      },
      {
        q: 'Posso comprar sem personalização?',
        a: 'A maioria dos nossos produtos são vendidos especificamente para personalização. Se deseja produtos em branco para personalizar você mesmo, entre em contato para verificar disponibilidade e condições.'
      }
    ]
  },
  {
    name: 'Entrega',
    icon: '📦',
    questions: [
      {
        q: 'Qual o prazo de produção e entrega?',
        a: 'Prazo de produção: 3 a 5 dias úteis após confirmação do pagamento e aprovação da arte. Prazo de entrega: varia conforme a região, geralmente 5 a 15 dias úteis via Correios. Produtos expressam (24h) disponíveis para retirada local em Capão da Canoa-RS.'
      },
      {
        q: 'Vocês entregam em todo o Brasil?',
        a: 'Sim! Enviamos para todo o Brasil via Correios (PAC ou SEDEX). O frete é calculado automaticamente no checkout com base no CEP. Regiões mais distantes podem ter prazos maiores. Também oferecemos retirada gratuita em nosso endereço.'
      },
      {
        q: 'Como é feita a embalagem?',
        a: 'Todos os produtos são embalados com muito cuidado. Canecas e itens frágeis vão em caixas com proteção de espuma e plástico bolha. Camisetas em embalagens plásticas seladas. Garantimos que seu produto chegue perfeito!'
      },
      {
        q: 'E se o produto chegar danificado?',
        a: 'Se houver qualquer dano no transporte, tire fotos da embalagem e do produto e entre em contato conosco em até 48 horas. Reenviamos o produto sem custo adicional. Nossa prioridade é sua satisfação!'
      }
    ]
  },
  {
    name: 'Garantia e Trocas',
    icon: '🛡️',
    questions: [
      {
        q: 'Qual a garantia dos produtos?',
        a: 'Oferecemos garantia de 90 dias contra defeitos de fabricação (impressão descascando, cores incorretas, defeitos no material). A garantia não cobre mau uso, quedas ou lavagem incorreta. Produtos personalizados não têm troca por arrependimento.'
      },
      {
        q: 'Posso trocar por outro tamanho ou cor?',
        a: 'Trocas de tamanho ou cor são aceitas apenas para produtos não personalizados e desde que estejam na embalagem original, sem uso. O cliente arca com o frete de envio e retorno. Entre em contato em até 7 dias após o recebimento.'
      },
      {
        q: 'E se a cor ficar diferente da tela?',
        a: 'Pequenas variações de cor entre a tela do computador/celular e o produto final são normais devido às diferenças de calibração de monitores. Trabalhamos para que as cores sejam as mais fiéis possíveis. Se houver diferença muito grande, entre em contato.'
      }
    ]
  },
  {
    name: 'Atacado e Parcerias',
    icon: '🤝',
    questions: [
      {
        q: 'Vocês fazem preço de atacado?',
        a: 'Sim! Temos tabela especial para pedidos acima de 50 unidades. Quanto maior a quantidade, maior o desconto. Para chaveiros, por exemplo: 50un = R$5,50/cada | 100un = R$3,99/cada. Solicite um orçamento personalizado via WhatsApp.'
      },
      {
        q: 'Fazem parcerias com revendedores?',
        a: 'Trabalhamos com revendedores em todo o Brasil! Oferecemos condições especiais, tabela de preços diferenciada e suporte para catálogo. Entre em contato para saber mais sobre nosso programa de parceria.'
      },
      {
        q: 'Emitem nota fiscal?',
        a: 'Sim, emitimos Nota Fiscal Eletrônica (NF-e) para todas as vendas. A nota é enviada automaticamente para o email cadastrado após a confirmação do pagamento. Para empresas, podemos emitir com CNPJ mediante solicitação no checkout.'
      }
    ]
  }
]

export default function FAQ() {
  useSEO({
    title: 'Perguntas Frequentes | FAQ - Fina Estampa',
    description: 'Tire suas dúvidas sobre personalização, pagamentos, entrega, garantia e mais. Respostas completas sobre produtos personalizados da Fina Estampa.',
  })
  
  const [activeCategory, setActiveCategory] = useState(0)
  const [openQuestion, setOpenQuestion] = useState(null)
  
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }
  
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
            Perguntas <span className="gradient-text">Frequentes</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns. Não encontrou o que procura? 
            <a href="https://wa.me/5551995765088" className="text-cyan-400 hover:underline ml-1">
              Fale conosco!
            </a>
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-2">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveCategory(index); setOpenQuestion(null); }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeCategory === index
                      ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                      : 'glass glass-hover text-white/70'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              ))}
              
              {/* Contact CTA */}
              <div className="mt-6 p-4 glass rounded-xl">
                <h4 className="font-bold mb-2">Ainda tem dúvidas?</h4>
                <p className="text-sm text-white/60 mb-3">
                  Nossa equipe está pronta para ajudar!
                </p>
                <Link to="/contato" className="btn btn-primary w-full text-sm py-2">
                  💬 Falar Conosco
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{faqCategories[activeCategory].icon}</span>
              <h2 className="text-2xl font-bold">{faqCategories[activeCategory].name}</h2>
            </div>
            
            <div className="space-y-3">
              {faqCategories[activeCategory].questions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="card overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left flex items-start justify-between gap-4 p-0"
                  >
                    <span className="font-medium">{item.q}</span>
                    <motion.span
                      animate={{ rotate: openQuestion === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-cyan-400 flex-shrink-0 mt-1"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {openQuestion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <p className="text-white/70 leading-relaxed">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="card inline-block p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Pronto para personalizar?</h3>
            <p className="text-white/70 mb-6 max-w-md">
              Escolha seu produto favorito e crie algo único e especial para você ou para presentear!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/produtos" className="btn btn-primary">
                Ver Produtos
              </Link>
              <Link to="/personalizar" className="btn btn-outline">
                🎨 Personalizar Agora
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
