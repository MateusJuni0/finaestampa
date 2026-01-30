import { useEffect } from 'react'

export function useSEO({ 
  title = 'Fina Estampa - Produtos Personalizados', 
  description = 'Produtos personalizados únicos e exclusivos desde 2015. Canecas, camisetas, chaveiros e muito mais.',
  image = 'https://finaestampas.com.br/imagem/logonome.jpeg',
  url = 'https://finaestampas.com.br'
}) {
  useEffect(() => {
    // Title
    document.title = title
    
    // Meta tags
    const metaTags = {
      description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    }
    
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    })
  }, [title, description, image, url])
}
