export const products = [
  // Canecas
  {
    id: 'caneca-branca-325ml',
    name: 'Caneca Branca 325ml',
    slug: 'caneca-branca-325ml',
    category: 'canecas',
    price: 42.00,
    originalPrice: 50.00,
    description: 'Caneca branca clássica de 325ml, perfeita para personalização com sublimação. Material de alta qualidade e acabamento impecável.',
    images: [
      '/imagem/caneca1.jpeg',
      '/imagem/caneca3.jpeg',
      '/imagem/caneca5.jpeg'
    ],
    images3d: [
      '/imagem/caneca3dfrente.jpeg',
      '/imagem/caneca3dlado.jpeg',
      '/imagem/caneca3dcima.jpeg'
    ],
    sizes: ['325ml'],
    colors: ['Branca'],
    customizable: true,
    featured: true
  },
  {
    id: 'caneca-colorida-interior',
    name: 'Caneca Colorida com Interior e Alça',
    slug: 'caneca-colorida-interior',
    category: 'canecas',
    price: 50.00,
    originalPrice: 60.00,
    description: 'Caneca branca com interior e alça coloridos. Toque especial para sua personalização.',
    images: [
      '/imagem/caneca1.jpeg',
      '/imagem/caneca3.jpeg'
    ],
    images3d: [
      '/imagem/caneca3dfrente.jpeg',
      '/imagem/caneca3dlado.jpeg'
    ],
    sizes: ['325ml'],
    colors: ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Rosa'],
    customizable: true
  },
  {
    id: 'caneca-magica-325ml',
    name: 'Caneca Mágica 325ml',
    slug: 'caneca-magica-325ml',
    category: 'canecas',
    price: 55.00,
    originalPrice: 65.00,
    description: 'Caneca mágica que muda de cor com líquido quente. Interior branco para melhor resultado da sublimação.',
    images: [
      '/imagem/caneca1.jpeg',
      '/imagem/caneca3.jpeg'
    ],
    sizes: ['325ml'],
    colors: ['Preta'],
    customizable: true,
    featured: true
  },
  {
    id: 'caneca-chopp-500ml',
    name: 'Caneca de Chopp 500ml',
    slug: 'caneca-chopp-500ml',
    category: 'canecas',
    price: 60.00,
    originalPrice: 70.00,
    description: 'Caneca de vidro para chopp com 500ml. Perfeita para eventos e presentes especiais.',
    images: [
      '/imagem/canecacerveja2.jpeg',
      '/imagem/canecacerveja3.jpeg',
      '/imagem/canecacerveja4.jpeg',
      '/imagem/canecacerveja5.jpeg'
    ],
    sizes: ['500ml'],
    colors: ['Transparente'],
    customizable: true
  },
  
  // Camisetas
  {
    id: 'camiseta-preta-poliester',
    name: 'Camiseta Preta 100% Poliéster',
    slug: 'camiseta-preta-poliester',
    category: 'camisetas',
    price: 90.00,
    originalPrice: 110.00,
    description: 'Camiseta preta em malha 100% poliéster. Ideal para sublimação com cores vibrantes e durabilidade excepcional.',
    images: [
      '/imagem/camisa1.jpeg',
      '/imagem/camisa2.jpeg',
      '/imagem/camisa3.jpeg'
    ],
    images3d: [
      '/imagem/camisa3dfrente.jpeg',
      '/imagem/camisa3dlado.jpeg',
      '/imagem/camisa3dtras.jpeg'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    sizeDimensions: {
      'P': '68x50cm',
      'M': '70x52cm',
      'G': '72x54cm',
      'GG': '74x56cm'
    },
    colors: ['Preta'],
    customizable: true,
    featured: true
  },
  {
    id: 'camiseta-branca',
    name: 'Camiseta Branca Personalizada',
    slug: 'camiseta-branca',
    category: 'camisetas',
    price: 85.00,
    originalPrice: 100.00,
    description: 'Camiseta branca premium para personalização ilimitada. Não há limite de imagens!',
    images: [
      '/imagem/camisa4.jpeg',
      '/imagem/camisa5.jpeg',
      '/imagem/camisa6.jpeg',
      '/imagem/camisa7.jpeg',
      '/imagem/camisa8.jpeg'
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Branca'],
    customizable: true
  },
  
  // Bodies
  {
    id: 'body-bebe',
    name: 'Body para Bebê',
    slug: 'body-bebe',
    category: 'bodies',
    price: 40.00,
    originalPrice: 50.00,
    description: 'Body personalizado para bebê. Material macio e confortável, perfeito para presente.',
    images: [
      '/imagem/body1.jpeg',
      '/imagem/body2.jpeg',
      '/imagem/body3.jpeg',
      '/imagem/body4.jpeg'
    ],
    sizes: ['RN', 'P', 'M', 'G'],
    colors: ['Branco', 'Rosa', 'Azul'],
    customizable: true
  },
  
  // Chaveiros
  {
    id: 'chaveiro-acrilico',
    name: 'Chaveiro Acrílico 3x4cm',
    slug: 'chaveiro-acrilico',
    category: 'chaveiros',
    price: 7.00,
    originalPrice: 10.00,
    description: 'Chaveiro em acrílico resistente com impressão de alta qualidade. Tamanho 3x4cm.',
    images: [
      '/imagem/chaveiro1.jpeg',
      '/imagem/chaveiro2.jpeg',
      '/imagem/chaveiro3.jpeg',
      '/imagem/chaveiro4.jpeg',
      '/imagem/chaveiro5.jpeg',
      '/imagem/chaveiro6.jpeg',
      '/imagem/chaveiro7.jpeg',
      '/imagem/chaveiro8.jpeg'
    ],
    sizes: ['3x4cm'],
    colors: ['Transparente'],
    customizable: true,
    bulkPricing: [
      { minQty: 50, price: 5.50 },
      { minQty: 100, price: 3.99 }
    ]
  },
  
  // Xícaras
  {
    id: 'xicara-porcelana',
    name: 'Xícara de Porcelana',
    slug: 'xicara-porcelana',
    category: 'xicaras',
    price: 48.00,
    originalPrice: 60.00,
    description: 'Xícara de porcelana premium para sublimação. Acabamento delicado e elegante.',
    images: [
      '/imagem/chicara.jpeg',
      '/imagem/chicara 2.jpeg',
      '/imagem/chicara3.jpeg',
      '/imagem/chicara4.jpeg',
      '/imagem/chicara5.jpeg',
      '/imagem/chicara6.jpeg',
      '/imagem/chicara7.jpeg',
      '/imagem/chicara8.jpeg',
      '/imagem/chicara9.jpeg',
      '/imagem/chicara10.jpeg'
    ],
    sizes: ['200ml'],
    colors: ['Branca', 'Colorida'],
    customizable: true
  },
  
  // Lápides/Azulejos
  {
    id: 'quadro-azulejo',
    name: 'Quadro de Azulejo 20x20cm',
    slug: 'quadro-azulejo',
    category: 'decoracao',
    price: 50.00,
    originalPrice: 65.00,
    description: 'Azulejo decorativo personalizado tamanho 20x20cm. Perfeito para decoração de ambientes.',
    images: [
      '/imagem/lapide1.jpeg',
      '/imagem/lapide2.jpeg',
      '/imagem/lapide3.jpeg',
      '/imagem/lapide4.jpeg',
      '/imagem/lapide5.jpeg',
      '/imagem/lapide6.jpeg',
      '/imagem/lapide7.jpeg'
    ],
    sizes: ['20x20cm'],
    colors: ['Branco'],
    customizable: true
  },
  
  // Fronhas
  {
    id: 'fronha-almofada',
    name: 'Fronha de Almofada 40x40cm',
    slug: 'fronha-almofada',
    category: 'decoracao',
    price: 45.00,
    originalPrice: 55.00,
    description: 'Fronha de almofada personalizada em tecido de alta qualidade. Tamanho 40x40cm.',
    images: [
      '/imagem/body1.jpeg'
    ],
    sizes: ['40x40cm'],
    colors: ['Branca'],
    customizable: true
  }
]

export const categories = [
  { id: 'todos', name: 'Todos os Produtos', icon: '🎨' },
  { id: 'canecas', name: 'Canecas', icon: '☕' },
  { id: 'camisetas', name: 'Camisetas', icon: '👕' },
  { id: 'bodies', name: 'Bodies', icon: '👶' },
  { id: 'chaveiros', name: 'Chaveiros', icon: '🔑' },
  { id: 'xicaras', name: 'Xícaras', icon: '🫖' },
  { id: 'decoracao', name: 'Decoração', icon: '🖼️' }
]

export function getProductById(id) {
  return products.find(p => p.id === id || p.slug === id)
}

export function getProductsByCategory(category) {
  if (category === 'todos') return products
  return products.filter(p => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter(p => p.featured)
}

export function calculatePrice(product, quantity) {
  if (!product.bulkPricing) {
    return product.price * quantity
  }
  
  const bulk = [...product.bulkPricing]
    .sort((a, b) => b.minQty - a.minQty)
    .find(tier => quantity >= tier.minQty)
  
  const price = bulk ? bulk.price : product.price
  return price * quantity
}
