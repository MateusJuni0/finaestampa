export default function ReviewCard({ review }) {
  return (
    <div className="card glass-hover">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-xl font-bold text-cyan-400">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold">{review.name}</span>
            <span className="text-yellow-400">
              {'⭐'.repeat(review.rating)}
            </span>
          </div>
          <p className="text-white/70 text-sm">{review.comment}</p>
          <span className="text-xs text-white/40 mt-2 block">{review.date}</span>
        </div>
      </div>
    </div>
  )
}

// Sample reviews data - expanded
export const sampleReviews = [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: 'Produto de excelente qualidade! A personalização ficou perfeita e a entrega foi super rápida. Já é a terceira vez que compro!',
    date: 'Janeiro 2026',
    product: 'Caneca Mágica'
  },
  {
    id: 2,
    name: 'João Santos',
    rating: 5,
    comment: 'Atendimento incrível da Renata. Fez exatamente como eu pedi. Minha esposa amou o presente de aniversário!',
    date: 'Janeiro 2026',
    product: 'Kit Xícaras'
  },
  {
    id: 3,
    name: 'Ana Costa',
    rating: 5,
    comment: 'Caneca muito bonita, chegou bem embalada. Vou comprar mais para presentes de Natal. Super recomendo!',
    date: 'Dezembro 2025',
    product: 'Caneca Branca 325ml'
  },
  {
    id: 4,
    name: 'Pedro Oliveira',
    rating: 5,
    comment: 'Fiz 100 chaveiros para o casamento da minha filha. Preço justo, qualidade impecável e entrega no prazo. Obrigado!',
    date: 'Dezembro 2025',
    product: 'Chaveiros Acrílico'
  },
  {
    id: 5,
    name: 'Carla Mendes',
    rating: 5,
    comment: 'As camisetas ficaram lindas! Fiz uniforme para minha equipe de vendas. Todos elogiaram a qualidade.',
    date: 'Novembro 2025',
    product: 'Camiseta Branca'
  },
  {
    id: 6,
    name: 'Roberto Almeida',
    rating: 4,
    comment: 'Ótimo produto! A cor ficou um pouco diferente do que imaginei, mas mesmo assim ficou muito bonito. Recomendo.',
    date: 'Novembro 2025',
    product: 'Azulejo 20x20cm'
  },
  {
    id: 7,
    name: 'Fernanda Lima',
    rating: 5,
    comment: 'Comprei um body personalizado para o chá de bebê da minha irmã. Ela chorou de emoção! Trabalho lindo.',
    date: 'Outubro 2025',
    product: 'Body Bebê'
  },
  {
    id: 8,
    name: 'Marcos Souza',
    rating: 5,
    comment: 'Caneca de chopp para o aniversário do meu pai. Ele usa todo dia! Qualidade do vidro é excelente.',
    date: 'Outubro 2025',
    product: 'Caneca Chopp 500ml'
  },
  {
    id: 9,
    name: 'Juliana Ferreira',
    rating: 5,
    comment: 'Fiz uma lápide personalizada para minha avó. Ficou emocionante e muito bem feita. Gratidão pelo carinho.',
    date: 'Setembro 2025',
    product: 'Lápide Memorial'
  },
  {
    id: 10,
    name: 'Lucas Rodrigues',
    rating: 5,
    comment: 'Empresa séria! Atendimento rápido pelo WhatsApp, produção ágil e produto de primeira. Cliente fiel!',
    date: 'Setembro 2025',
    product: 'Mousepad'
  },
  {
    id: 11,
    name: 'Patrícia Gomes',
    rating: 5,
    comment: 'Amei a xícara com a foto da minha família! O pires combinou perfeitamente. Presente perfeito de Dia das Mães.',
    date: 'Agosto 2025',
    product: 'Xícara Porcelana'
  },
  {
    id: 12,
    name: 'Ricardo Dias',
    rating: 5,
    comment: 'Fiz brindes para minha empresa. 200 canecas entregues no prazo, todas perfeitas. Fechando mais pedidos!',
    date: 'Agosto 2025',
    product: 'Caneca Corporativa'
  }
]

// Get random reviews for display
export const getRandomReviews = (count = 3) => {
  const shuffled = [...sampleReviews].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
