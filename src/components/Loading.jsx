export default function Loading({ fullScreen = false }) {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-white/60 text-sm">Carregando...</p>
    </div>
  )
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-dark-bg/90 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    )
  }
  
  return content
}
