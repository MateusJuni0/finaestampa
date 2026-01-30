import { useEffect, useState } from 'react'

const notifications = [
  { name: 'Maria S.', city: 'São Paulo', product: 'Caneca Personalizada', time: 'há 3 min' },
  { name: 'João P.', city: 'Rio de Janeiro', product: 'Copo Long Drink', time: 'há 5 min' },
  { name: 'Ana L.', city: 'Belo Horizonte', product: 'Caneca Mágica', time: 'há 8 min' },
  { name: 'Carlos M.', city: 'Porto Alegre', product: 'Caneca Ágata', time: 'há 12 min' },
  { name: 'Beatriz F.', city: 'Curitiba', product: 'Copo Twister', time: 'há 15 min' },
]

export default function SocialProof() {
  const [visible, setVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(null)
  
  useEffect(() => {
    const showNotification = () => {
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)]
      setCurrentNotification(randomNotif)
      setVisible(true)
      
      setTimeout(() => {
        setVisible(false)
      }, 5000)
    }
    
    // Primeira notificação após 3s
    const initialTimer = setTimeout(showNotification, 3000)
    
    // Notificações periódicas a cada 15-25s
    const interval = setInterval(() => {
      showNotification()
    }, Math.random() * 10000 + 15000)
    
    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])
  
  if (!visible || !currentNotification) return null
  
  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-sm animate-in"
      style={{
        animation: visible ? 'slideInLeft 0.5s ease-out' : 'slideOutLeft 0.5s ease-in'
      }}
    >
      <div className="glass p-4 rounded-xl shadow-2xl border border-white/20 backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-lg">🛍️</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white">
              {currentNotification.name} de {currentNotification.city}
            </p>
            <p className="text-xs text-white/70 mt-0.5">
              Acabou de comprar: <span className="text-cyan-400">{currentNotification.product}</span>
            </p>
            <p className="text-xs text-white/50 mt-1">{currentNotification.time}</p>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
