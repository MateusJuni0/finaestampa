import { Link } from 'react-router-dom'
import { getFeaturedProducts } from '../utils/products'
import { useCart } from '../utils/cartContext'
import ReviewCard, { sampleReviews } from '../components/ReviewCard'

export default function Home() {
  const featured = getFeaturedProducts()
  const { addItem } = useCart()
  
  const benefits = [
    {
      icon: '⚡',
      title: 'Entrega Rápida',
      description: 'Grande parte dos pedidos prontos em até 24 horas'
    },
    {
      icon: '🎨',
      title: 'Personalização Total',
      description: 'Você participa de todas as etapas da criação'
    },
    {
      icon: '⭐',
      title: '+10 Anos de Experiência',
      description: 'Desde 2015 criando produtos únicos'
    },
    {
      icon: '💯',
      title: 'Qualidade Garantida',
      description: 'Sublimação profissional e acabamento impecável'
    }
  ]
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] -top-40 -left-40 bg-cyan-500/30 rounded-full blur-3xl animate-pulse float-slow"></div>
          <div className="absolute w-[600px] h-[600px] -bottom-40 -right-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse float-medium"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-in">
              <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Desde 2015 em Capão da Canoa - RS</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Produtos
                <span className="block gradient-text">Personalizados</span>
                <span className="block text-white">Únicos e Exclusivos</span>
              </h1>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                Transformamos suas ideias em produtos reais. Cada peça é criada com atenção aos mínimos detalhes, garantindo originalidade e qualidade excepcional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/produtos" className="btn btn-primary text-lg">
                  Ver Produtos
                  <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/personalizar" className="btn btn-outline text-lg">
                  Personalizar
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-white/60">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">1000+</div>
                  <div className="text-sm text-white/60">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">24h</div>
                  <div className="text-sm text-white/60">Entrega Expressa</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-in" style={{ animationDelay: '200ms' }}>
              <div className="relative glass rounded-3xl p-8 card-hover">
                <img
                  src="/imagem/caneca1.jpeg"
                  alt="Produtos Personalizados"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 backdrop-blur-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-bold">Qualidade Premium</div>
                      <div className="text-sm text-white/60">Sublimação profissional</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card card-hover text-center animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Produtos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Conheça nossos produtos mais populares e comece a personalizar o seu agora mesmo
            </p>
          </div>
          
          <div className="product-grid">
            {featured.map((product, index) => (
              <div
                key={product.id}
                className="card card-hover group animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/produto/${product.slug}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.originalPrice > product.price && (
                      <div className="absolute top-3 right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice > product.price && (
                        <span className="text-white/40 line-through text-sm mr-2">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-2xl font-bold gradient-text">
                        R$ {product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
                
                <button
                  onClick={() => addItem(product)}
                  className="btn btn-primary w-full mt-4"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/produtos" className="btn btn-outline btn-lg">
              Ver Todos os Produtos
              <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Processo simples e transparente do pedido à entrega
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Escolha o Produto', desc: 'Navegue pelo catálogo e escolha o que mais combina com você', icon: '🛍️' },
              { number: '02', title: 'Personalize', desc: 'Faça upload da sua arte ou escolha um template pronto', icon: '🎨' },
              { number: '03', title: 'Finalize o Pedido', desc: 'Adicione ao carrinho e complete o pagamento', icon: '💳' },
              { number: '04', title: 'Receba em Casa', desc: 'Produção rápida e entrega para todo o Brasil', icon: '📦' }
            ].map((step, index) => (
              <div
                key={index}
                className="relative text-center animate-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"></div>
                  <div className="relative glass rounded-full w-full h-full flex items-center justify-center text-3xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              O Que Nossos <span className="gradient-text">Clientes</span> Dizem
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Mais de 1000 clientes satisfeitos em todo o Brasil
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sampleReviews.map((review, index) => (
              <div key={review.id} className="animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="card glass-hover text-center p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Pronto para criar algo <span className="gradient-text">único</span>?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Atendimento personalizado pela proprietária Renata. Entre em contato e tire todas as suas dúvidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5551995765088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
                <Link to="/personalizar" className="btn btn-outline text-lg">
                  Começar a Personalizar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
