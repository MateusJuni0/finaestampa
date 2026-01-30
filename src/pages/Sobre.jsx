export default function Sobre() {
  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">
          Sobre a <span className="gradient-text">Fina Estampa</span>
        </h1>
        
        <div className="card space-y-6 text-white/80 leading-relaxed">
          <p className="text-lg">
            Fundada em outubro de 2015, a Fina Estampa – Produtos Personalizados possui mais de 10 anos de atuação no mercado, consolidando-se como referência na criação de produtos exclusivos e personalizados, desenvolvidos de forma única para cada cliente.
          </p>
          
          <p>
            Atuando no segmento de personalização, a Fina Estampa oferece soluções sob medida para uso pessoal ou para presentear alguém especial. Cada produto é criado com atenção aos mínimos detalhes, garantindo originalidade, qualidade e total alinhamento às expectativas dos clientes.
          </p>
          
          <p>
            Localizada em Capão da Canoa, no Rio Grande do Sul, a empresa tem como pilares a qualidade, a agilidade e o atendimento humanizado. Grande parte dos pedidos é produzida e entregue em até 24 horas, demonstrando eficiência, comprometimento e respeito aos prazos.
          </p>
          
          <h2 className="text-3xl font-bold gradient-text mt-8">Missão</h2>
          <p>
            Oferecer produtos personalizados únicos e exclusivos, permitindo que cada cliente participe de todas as etapas da personalização, definindo cada detalhe exatamente como deseja. Nosso compromisso é transformar ideias em produtos que representem histórias, sentimentos e identidades, com qualidade, agilidade e atendimento próximo, superando expectativas em cada entrega.
          </p>
          
          <p>
            O atendimento é realizado diretamente pela proprietária, Renata Lima Soares, que acompanha todo o processo de criação e produção. Ao identificar a carência do mercado em agilidade e no contato direto com o cliente, Renata estruturou um modelo de atendimento próximo e personalizado, garantindo atenção total a cada projeto.
          </p>
          
          <p className="font-semibold text-white">
            Com mais de uma década de experiência, a Fina Estampa tem como missão transformar ideias em produtos exclusivos, entregando não apenas personalização, mas também confiança, excelência e experiências únicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card card-hover text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Agilidade</h3>
            <p className="text-white/60 text-sm">Entrega em até 24h</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-3">💯</div>
            <h3 className="font-bold mb-2">Qualidade</h3>
            <p className="text-white/60 text-sm">Produtos premium</p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold mb-2">Atendimento</h3>
            <p className="text-white/60 text-sm">Direto com a proprietária</p>
          </div>
        </div>
      </div>
    </div>
  )
}
