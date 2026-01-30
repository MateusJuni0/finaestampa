export default function ReviewCard({ review }) {
  return (
    <div className="card glass-hover">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center text-xl font-bold text-primary-400">
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

// Sample reviews data
export const sampleReviews = [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: 'Produto de excelente qualidade! A personalização ficou perfeita e a entrega foi super rápida.',
    date: 'Janeiro 2026'
  },
  {
    id: 2,
    name: 'João Santos',
    rating: 5,
    comment: 'Atendimento incrível da Renata. Fez exatamente como eu pedi. Recomendo!',
    date: 'Janeiro 2026'
  },
  {
    id: 3,
    name: 'Ana Costa',
    rating: 4,
    comment: 'Caneca muito bonita, chegou bem embalada. Vou comprar mais para presentes.',
    date: 'Dezembro 2025'
  }
]
