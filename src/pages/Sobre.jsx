import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSEO } from '../utils/useSEO'

export default function Sobre() {
  useSEO({
    title: 'Sobre Nós | Fina Estampa - 10 Anos de História',
    description: 'Conheça a história da Fina Estampa e da Renata. Desde 2015 criando produtos personalizados únicos em Capão da Canoa/RS. Atendimento humanizado e qualidade garantida.',
  })
  
  const timeline = [
    { year: '2015', title: 'O Começo', desc: 'Renata inicia a Fina Estampa em casa, com uma prensa e muito sonho. Os primeiros clientes eram amigos e familiares.' },
    { year: '2017', title: 'Crescimento', desc: 'Expansão do catálogo para canecas, camisetas e chaveiros. Primeiros pedidos de outros estados.' },
    { year: '2019', title: 'Estruturação', desc: 'Mudança para espaço próprio em Capão da Canoa. Aquisição de equipamentos profissionais de sublimação.' },
    { year: '2022', title: 'Reconhecimento', desc: 'Marca reconhecida na região. Parcerias com empresas e eventos. Mais de 5.000 clientes atendidos.' },
    { year: '2024', title: 'Inovação', desc: 'Lançamento da loja online com personalização em tempo real. Atendimento para todo o Brasil.' },
    { year: '2025', title: 'Presente', desc: '10 anos de história! Mais de 10.000 clientes satisfeitos e milhares de momentos eternizados.' }
  ]
  
  const values = [
    { icon: '❤️', title: 'Paixão', desc: 'Cada produto é feito com amor e dedicação. Não é só trabalho, é realização.' },
    { icon: '✨', title: 'Qualidade', desc: 'Usamos os melhores materiais e técnicas para garantir durabilidade e beleza.' },
    { icon: '🤝', title: 'Atendimento', desc: 'Você fala diretamente com a proprietária. Nada de robôs ou scripts.' },
    { icon: '⚡', title: 'Agilidade', desc: 'Produção rápida sem perder qualidade. Urgências? Fazemos o possível!' },
    { icon: '🎨', title: 'Criatividade', desc: 'Ajudamos a transformar suas ideias em produtos únicos e especiais.' },
    { icon: '🌟', title: 'Confiança', desc: '10 anos no mercado com milhares de clientes satisfeitos comprovam nosso compromisso.' }
  ]
  
  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '10.000+', label: 'Clientes Atendidos' },
    { number: '50.000+', label: 'Produtos Entregues' },
    { number: '98%', label: 'Satisfação' }
  ]
  
  return (
    <div className="py-12 overflow-hidden">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Nossa <span className="gradient-text">História</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Há mais de 10 anos transformando momentos especiais em produtos únicos. 
            Conheça a Fina Estampa e a pessoa por trás de cada criação.
          </p>
        </motion.div>
        
        {/* About Renata */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative z-10">
              <img
                src="/imagem/caneca1.jpeg"
                alt="Renata - Fina Estampa"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <div className="font-bold">Renata Lima Soares</div>
                    <div className="text-sm text-white/60">Fundadora & Artesã</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              De um sonho à <span className="gradient-text">realidade</span>
            </h2>
            
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                A Fina Estampa nasceu em 2015, na cidade de Capão da Canoa, litoral norte do Rio Grande do Sul. 
                Tudo começou com uma prensa de sublimação, muita criatividade e o desejo de criar produtos 
                que eternizassem momentos especiais.
              </p>
              <p>
                <strong className="text-white">Renata Lima Soares</strong>, fundadora e alma da empresa, 
                identificou uma carência no mercado: a falta de atendimento humanizado e agilidade na 
                produção de produtos personalizados. Assim, estruturou um modelo onde o cliente participa 
                de todo o processo, com contato direto e transparente.
              </p>
              <p>
                Hoje, após uma década de dedicação, a Fina Estampa atende clientes em todo o Brasil, 
                mantendo a mesma essência do início: <em>qualidade, carinho e atenção a cada detalhe</em>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contato" className="btn btn-primary">
                💬 Falar com Renata
              </Link>
              <Link to="/produtos" className="btn btn-outline">
                Ver Produtos
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos <span className="gradient-text">Valores</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="card card-hover text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossa <span className="gradient-text">Trajetória</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-cyan-500 md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card">
                      <div className="text-cyan-400 font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="card p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Por que escolher a <span className="gradient-text">Fina Estampa</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👩‍💼</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Atendimento Direto</h3>
                <p className="text-white/60 text-sm">Fale diretamente com a proprietária. Sem intermediários, sem espera.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">10 Anos de Experiência</h3>
                <p className="text-white/60 text-sm">Conhecimento técnico e artístico acumulado em milhares de produções.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎨</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Personalização Real</h3>
                <p className="text-white/60 text-sm">Não somos uma fábrica. Cada produto recebe atenção individual.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-bold mb-1">Localização Privilegiada</h3>
                <p className="text-white/60 text-sm">Em Capão da Canoa, atendemos o litoral gaúcho com retirada expressa.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass p-8 md:p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para criar algo <span className="gradient-text">especial</span>?
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Entre em contato e transforme suas ideias em produtos únicos. 
              Renata está pronta para ajudar você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5551995765088?text=Olá!%20Conheci%20a%20Fina%20Estampa%20pelo%20site%20e%20gostaria%20de%20saber%20mais!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg"
              >
                💬 Falar no WhatsApp
              </a>
              <Link to="/produtos" className="btn btn-outline text-lg">
                Ver Catálogo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
