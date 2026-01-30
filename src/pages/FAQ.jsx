import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      q: 'Existe limite de imagens para personalização?',
      a: 'Não. Para camisetas brancas, não há limite estipulado de imagens. O cliente pode personalizar livremente conforme sua preferência.'
    },
    {
      q: 'Qual o tamanho máximo da imagem?',
      a: 'O tamanho máximo permitido para a imagem é de 29 x 21 cm.'
    },
    {
      q: 'Quantas fotos posso colocar nas canecas?',
      a: 'Recomendamos até 3 fotos, pois esse número garante uma boa visualização e melhor acabamento. No entanto, a quantidade final de fotos fica a critério do cliente, respeitando os limites técnicos do produto.'
    },
    {
      q: 'Camisetas coloridas têm o mesmo preço das brancas?',
      a: 'Não. O valor das camisetas coloridas varia conforme a arte aplicada, a quantidade de elementos e o tamanho da personalização.'
    },
    {
      q: 'Vocês fazem a arte da personalização?',
      a: 'Sim. Realizamos montagens básicas de acordo com a solicitação do cliente. Informamos que não somos designers, portanto não desenvolvemos artes complexas ou profissionais.'
    },
    {
      q: 'Qual o prazo de entrega?',
      a: 'Grande parte dos pedidos é produzida em até 24 horas. Para envios via correios, adicione o prazo de entrega do serviço escolhido.'
    },
    {
      q: 'Posso trocar ou devolver o produto?',
      a: 'Por serem produtos personalizados sob medida, não trabalhamos com trocas ou devoluções de produtos corretos. Caso haja erro de nossa parte, refazemos o produto sem custo adicional.'
    }
  ]
  
  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card glass-hover">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between"
              >
                <span className="font-bold pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-white/10 text-white/70">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
