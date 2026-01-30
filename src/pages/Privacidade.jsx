export default function Privacidade() {
  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-display font-bold mb-8">Política de Privacidade</h1>
        <div className="card space-y-4 text-white/80 text-sm leading-relaxed">
          <p>Última atualização: Janeiro de 2026</p>
          
          <h2 className="text-xl font-bold text-white mt-6">1. Coleta de Dados</h2>
          <p>Coletamos apenas informações necessárias para processar seu pedido: nome, email, telefone e endereço de entrega.</p>
          
          <h2 className="text-xl font-bold text-white mt-6">2. Uso dos Dados</h2>
          <p>Seus dados são usados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Processar e entregar seu pedido</li>
            <li>Comunicação sobre o status do pedido</li>
            <li>Suporte ao cliente</li>
          </ul>
          
          <h2 className="text-xl font-bold text-white mt-6">3. Proteção de Dados</h2>
          <p>Não compartilhamos seus dados com terceiros, exceto processadores de pagamento (Mercado Pago) e correios para entrega.</p>
          
          <h2 className="text-xl font-bold text-white mt-6">4. Armazenamento</h2>
          <p>Imagens enviadas para personalização não são armazenadas após a produção do pedido.</p>
          
          <h2 className="text-xl font-bold text-white mt-6">5. Seus Direitos</h2>
          <p>Você pode solicitar acesso, correção ou exclusão de seus dados a qualquer momento entrando em contato conosco.</p>
        </div>
      </div>
    </div>
  )
}
