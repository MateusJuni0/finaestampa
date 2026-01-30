export const products = [
  // ========== CANECAS BRANCAS ==========
  {
    id: 'caneca-branca-325ml',
    name: 'Caneca Branca Clássica 325ml',
    slug: 'caneca-branca-325ml',
    category: 'canecas',
    price: 42.00,
    originalPrice: 50.00,
    description: 'Caneca de cerâmica branca de alta qualidade com capacidade de 325ml. Superfície lisa ideal para sublimação, garantindo cores vibrantes e duradouras. Resistente a microondas e lava-louças. Acabamento premium com bordas arredondadas para maior conforto.',
    specs: {
      material: 'Cerâmica de alta temperatura',
      capacidade: '325ml',
      altura: '9,5cm',
      diametro: '8cm',
      peso: '350g',
      resistencia: 'Microondas e lava-louças',
      impressao: 'Sublimação 360°'
    },
    images: ['/imagem/caneca1.jpeg', '/imagem/caneca3.jpeg', '/imagem/caneca5.jpeg'],
    images3d: ['/imagem/caneca3dfrente.jpeg', '/imagem/caneca3dlado.jpeg', '/imagem/caneca3dcima.jpeg'],
    sizes: ['325ml'],
    colors: ['Branca'],
    customizable: true,
    featured: true,
    careInstructions: 'Lavar com água morna e sabão neutro. Evitar esponjas abrasivas. Pode ir ao microondas.'
  },
  {
    id: 'caneca-branca-300ml',
    name: 'Caneca Branca Compacta 300ml',
    slug: 'caneca-branca-300ml',
    category: 'canecas',
    price: 40.00,
    description: 'Caneca de cerâmica em tamanho compacto, perfeita para café expresso ou chá. Formato ergonômico com alça confortável. Ideal para ambientes de trabalho ou cozinhas com espaço reduzido.',
    specs: {
      material: 'Cerâmica vitrificada',
      capacidade: '300ml',
      altura: '9cm',
      diametro: '7,5cm',
      peso: '320g',
      resistencia: 'Microondas e lava-louças',
      impressao: 'Sublimação total'
    },
    images: ['/imagem/caneca1.jpeg'],
    images3d: ['/imagem/caneca3dfrente.jpeg'],
    sizes: ['300ml'],
    colors: ['Branca'],
    customizable: true,
    careInstructions: 'Lavar com água morna e sabão neutro.'
  },
  {
    id: 'caneca-branca-350ml',
    name: 'Caneca Branca Grande 350ml',
    slug: 'caneca-branca-350ml',
    category: 'canecas',
    price: 44.00,
    description: 'Caneca de cerâmica com capacidade estendida de 350ml, ideal para quem aprecia porções generosas de café, chá ou chocolate quente. Base reforçada e alça anatômica para maior estabilidade.',
    specs: {
      material: 'Cerâmica reforçada',
      capacidade: '350ml',
      altura: '10cm',
      diametro: '8,5cm',
      peso: '380g',
      resistencia: 'Microondas e lava-louças',
      impressao: 'Sublimação premium'
    },
    images: ['/imagem/caneca3.jpeg'],
    images3d: ['/imagem/caneca3dlado.jpeg'],
    sizes: ['350ml'],
    colors: ['Branca'],
    customizable: true,
    careInstructions: 'Lavar com água morna e sabão neutro.'
  },
  
  // ========== CANECAS COLORIDAS ==========
  {
    id: 'caneca-colorida-interior',
    name: 'Caneca com Interior e Alça Coloridos',
    slug: 'caneca-colorida-interior',
    category: 'canecas',
    price: 50.00,
    originalPrice: 60.00,
    description: 'Caneca de cerâmica branca com interior e alça em cores vibrantes. Exterior branco para personalização e interior colorido para um contraste elegante. Disponível em 6 cores diferentes para combinar com qualquer estilo.',
    specs: {
      material: 'Cerâmica bicolor de alta temperatura',
      capacidade: '325ml',
      altura: '9,5cm',
      diametro: '8cm',
      peso: '360g',
      resistencia: 'Microondas e lava-louças',
      impressao: 'Sublimação na área branca',
      cores_disponiveis: 'Vermelho, Azul, Verde, Amarelo, Rosa, Preto'
    },
    images: ['/imagem/caneca1.jpeg', '/imagem/caneca3.jpeg'],
    images3d: ['/imagem/caneca3dfrente.jpeg', '/imagem/caneca3dlado.jpeg'],
    sizes: ['325ml'],
    colors: ['Vermelho', 'Azul', 'Verde', 'Amarelo', 'Rosa', 'Preto'],
    customizable: true,
    careInstructions: 'Lavar manualmente para preservar as cores internas.'
  },
  {
    id: 'caneca-colorida-vermelha',
    name: 'Caneca Interior Vermelho Intenso',
    slug: 'caneca-colorida-vermelha',
    category: 'canecas',
    price: 48.00,
    description: 'Caneca de cerâmica com interior e alça em vermelho vibrante. Perfeita para presentes românticos ou datas comemorativas. O contraste branco e vermelho realça qualquer personalização.',
    specs: {
      material: 'Cerâmica bicolor',
      capacidade: '325ml',
      altura: '9,5cm',
      peso: '360g',
      impressao: 'Sublimação'
    },
    images: ['/imagem/caneca1.jpeg'],
    sizes: ['325ml'],
    colors: ['Vermelho'],
    customizable: true
  },
  {
    id: 'caneca-colorida-azul',
    name: 'Caneca Interior Azul Royal',
    slug: 'caneca-colorida-azul',
    category: 'canecas',
    price: 48.00,
    description: 'Caneca de cerâmica com interior e alça em azul royal elegante. Ideal para ambientes corporativos ou presentes sofisticados. Tom profundo que transmite confiança e profissionalismo.',
    specs: {
      material: 'Cerâmica bicolor',
      capacidade: '325ml',
      altura: '9,5cm',
      peso: '360g',
      impressao: 'Sublimação'
    },
    images: ['/imagem/caneca3.jpeg'],
    sizes: ['325ml'],
    colors: ['Azul'],
    customizable: true
  },
  {
    id: 'caneca-colorida-rosa',
    name: 'Caneca Interior Rosa Pink',
    slug: 'caneca-colorida-rosa',
    category: 'canecas',
    price: 48.00,
    description: 'Caneca de cerâmica com interior e alça em rosa pink vibrante. Perfeita para presentes femininos, chás de bebê ou quem ama cores alegres. Design moderno e divertido.',
    specs: {
      material: 'Cerâmica bicolor',
      capacidade: '325ml',
      altura: '9,5cm',
      peso: '360g',
      impressao: 'Sublimação'
    },
    images: ['/imagem/caneca5.jpeg'],
    sizes: ['325ml'],
    colors: ['Rosa'],
    customizable: true
  },
  
  // ========== CANECAS MÁGICAS ==========
  {
    id: 'caneca-magica-325ml',
    name: 'Caneca Mágica Preta 325ml',
    slug: 'caneca-magica-325ml',
    category: 'canecas',
    price: 55.00,
    originalPrice: 65.00,
    description: 'Caneca termossensível que revela sua arte quando recebe líquido quente! Revestimento especial que muda de preto para transparente acima de 40°C. Efeito surpreendente que encanta a todos. Ideal para presentes criativos e memoráveis.',
    specs: {
      material: 'Cerâmica com revestimento termossensível',
      capacidade: '325ml',
      altura: '9,5cm',
      diametro: '8cm',
      peso: '370g',
      temperatura_ativacao: '40°C',
      efeito: 'Revelação gradual da imagem',
      impressao: 'Sublimação sob camada termossensível'
    },
    images: ['/imagem/caneca1.jpeg', '/imagem/caneca3.jpeg'],
    sizes: ['325ml'],
    colors: ['Preta'],
    customizable: true,
    featured: true,
    careInstructions: 'NÃO usar no microondas. Lavar manualmente com água morna. Evitar esponjas abrasivas para preservar o efeito mágico.'
  },
  {
    id: 'caneca-magica-azul',
    name: 'Caneca Mágica Azul Escuro',
    slug: 'caneca-magica-azul',
    category: 'canecas',
    price: 55.00,
    description: 'Caneca mágica com revestimento azul escuro que revela a personalização com bebidas quentes. Elegante e surpreendente, perfeita para quem busca sofisticação com um toque de magia.',
    specs: {
      material: 'Cerâmica termossensível',
      capacidade: '325ml',
      temperatura_ativacao: '40°C',
      efeito: 'Revelação gradual'
    },
    images: ['/imagem/caneca3.jpeg'],
    sizes: ['325ml'],
    colors: ['Azul'],
    customizable: true,
    careInstructions: 'NÃO usar no microondas. Lavar manualmente.'
  },
  {
    id: 'caneca-magica-vermelha',
    name: 'Caneca Mágica Vermelha',
    slug: 'caneca-magica-vermelha',
    category: 'canecas',
    price: 55.00,
    description: 'Caneca mágica com revestimento vermelho intenso. O calor da bebida revela mensagens, fotos ou artes personalizadas. Perfeita para declarações de amor ou surpresas especiais.',
    specs: {
      material: 'Cerâmica termossensível',
      capacidade: '325ml',
      temperatura_ativacao: '40°C',
      efeito: 'Revelação gradual'
    },
    images: ['/imagem/caneca5.jpeg'],
    sizes: ['325ml'],
    colors: ['Vermelha'],
    customizable: true,
    careInstructions: 'NÃO usar no microondas. Lavar manualmente.'
  },
  
  // ========== CANECAS DE CHOPP/CERVEJA ==========
  {
    id: 'caneca-chopp-500ml',
    name: 'Caneca de Chopp Tradicional 500ml',
    slug: 'caneca-chopp-500ml',
    category: 'canecas',
    price: 60.00,
    originalPrice: 70.00,
    description: 'Caneca de vidro temperado estilo alemão com capacidade de 500ml. Alça robusta e base pesada para estabilidade. Vidro grosso que mantém a bebida gelada por mais tempo. Perfeita para cervejarias, bares ou eventos especiais.',
    specs: {
      material: 'Vidro temperado de alta resistência',
      capacidade: '500ml',
      altura: '15cm',
      diametro: '9cm',
      peso: '450g',
      espessura_vidro: '5mm',
      resistencia: 'Choque térmico moderado',
      impressao: 'Sublimação ou adesivo vitrificado'
    },
    images: ['/imagem/canecacerveja2.jpeg', '/imagem/canecacerveja3.jpeg', '/imagem/canecacerveja4.jpeg', '/imagem/canecacerveja5.jpeg'],
    sizes: ['500ml'],
    colors: ['Transparente'],
    customizable: true,
    careInstructions: 'Lavar manualmente. Evitar mudanças bruscas de temperatura.'
  },
  {
    id: 'caneca-cerveja-350ml',
    name: 'Caneca de Cerveja 350ml',
    slug: 'caneca-cerveja-350ml',
    category: 'canecas',
    price: 55.00,
    description: 'Caneca de vidro para cerveja em tamanho padrão de 350ml. Design clássico com alça confortável. Ideal para uso doméstico ou estabelecimentos que buscam elegância e praticidade.',
    specs: {
      material: 'Vidro temperado',
      capacidade: '350ml',
      altura: '13cm',
      peso: '380g',
      impressao: 'Sublimação'
    },
    images: ['/imagem/canecacerveja2.jpeg'],
    sizes: ['350ml'],
    colors: ['Transparente'],
    customizable: true
  },
  {
    id: 'caneca-chopp-600ml',
    name: 'Caneca de Chopp Gigante 600ml',
    slug: 'caneca-chopp-600ml',
    category: 'canecas',
    price: 65.00,
    description: 'A maior caneca da linha! 600ml de capacidade para os verdadeiros apreciadores de chopp. Vidro extra grosso e alça reforçada. Ideal para festas, churrascos e eventos onde o tamanho importa.',
    specs: {
      material: 'Vidro temperado extra grosso',
      capacidade: '600ml',
      altura: '17cm',
      diametro: '10cm',
      peso: '520g',
      espessura_vidro: '6mm'
    },
    images: ['/imagem/canecacerveja3.jpeg'],
    sizes: ['600ml'],
    colors: ['Transparente'],
    customizable: true
  },
  {
    id: 'caneca-chopp-tulipa',
    name: 'Caneca Tulipa Elegante 400ml',
    slug: 'caneca-chopp-tulipa',
    category: 'canecas',
    price: 58.00,
    description: 'Caneca no formato tulipa, design europeu sofisticado. Perfeita para cervejas artesanais onde a apresentação faz diferença. Boca larga que realça aromas e sabores. A escolha dos conhecedores.',
    specs: {
      material: 'Vidro cristalino',
      capacidade: '400ml',
      altura: '14cm',
      formato: 'Tulipa',
      peso: '400g'
    },
    images: ['/imagem/canecacerveja4.jpeg'],
    sizes: ['400ml'],
    colors: ['Transparente'],
    customizable: true
  },
  
  // ========== CAMISETAS ==========
  {
    id: 'camiseta-preta-poliester',
    name: 'Camiseta Preta 100% Poliéster Premium',
    slug: 'camiseta-preta-poliester',
    category: 'camisetas',
    price: 90.00,
    originalPrice: 110.00,
    description: 'Camiseta preta em malha 100% poliéster de alta gramatura, especialmente desenvolvida para sublimação. Cores ultra vibrantes que não desbotam. Tecido respirável com toque macio e confortável. Modelagem regular fit que veste bem todos os corpos.',
    specs: {
      material: '100% Poliéster sublimável',
      gramatura: '160g/m²',
      tecido: 'Malha fria',
      modelagem: 'Regular fit',
      gola: 'Careca ribana 1x1',
      costura: 'Dupla nas mangas e barra',
      tamanhos: 'P ao XG',
      impressao: 'Sublimação total frente/costas'
    },
    images: ['/imagem/camisa1.jpeg', '/imagem/camisa2.jpeg', '/imagem/camisa3.jpeg'],
    images3d: ['/imagem/camisa3dfrente.jpeg', '/imagem/camisa3dlado.jpeg', '/imagem/camisa3dtras.jpeg'],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    sizeDimensions: {
      'P': 'Largura 50cm × Altura 68cm',
      'M': 'Largura 52cm × Altura 70cm',
      'G': 'Largura 54cm × Altura 72cm',
      'GG': 'Largura 56cm × Altura 74cm',
      'XG': 'Largura 58cm × Altura 76cm'
    },
    colors: ['Preta'],
    customizable: true,
    featured: true,
    careInstructions: 'Lavar do avesso em água fria. Não usar alvejante. Secar à sombra. Passar em temperatura baixa pelo avesso.'
  },
  {
    id: 'camiseta-branca',
    name: 'Camiseta Branca Premium para Sublimação',
    slug: 'camiseta-branca',
    category: 'camisetas',
    price: 85.00,
    originalPrice: 100.00,
    description: 'Camiseta branca premium com a melhor base para sublimação. Resultado de cores impecável e definição perfeita. Tecido leve e respirável ideal para o clima brasileiro. Acabamento profissional com etiqueta personalizada.',
    specs: {
      material: '100% Poliéster sublimável',
      gramatura: '160g/m²',
      tecido: 'Malha fria',
      modelagem: 'Regular fit',
      gola: 'Careca ribana 1x1',
      costura: 'Reforçada',
      impressao: 'Sublimação ilimitada'
    },
    images: ['/imagem/camisa4.jpeg', '/imagem/camisa5.jpeg', '/imagem/camisa6.jpeg'],
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    sizeDimensions: {
      'P': 'Largura 50cm × Altura 68cm',
      'M': 'Largura 52cm × Altura 70cm',
      'G': 'Largura 54cm × Altura 72cm',
      'GG': 'Largura 56cm × Altura 74cm',
      'XG': 'Largura 58cm × Altura 76cm'
    },
    colors: ['Branca'],
    customizable: true,
    featured: true,
    careInstructions: 'Lavar do avesso em água fria. Não usar alvejante. Secar à sombra.'
  },
  {
    id: 'camiseta-cinza',
    name: 'Camiseta Cinza Mescla Urban',
    slug: 'camiseta-cinza',
    category: 'camisetas',
    price: 88.00,
    description: 'Camiseta cinza mescla com visual urbano e despojado. Mistura de tons que esconde pequenas manchas do dia a dia. Tecido confortável para uso casual ou esportivo.',
    specs: {
      material: 'Poliéster sublimável',
      gramatura: '160g/m²',
      modelagem: 'Regular fit',
      cor: 'Cinza mescla claro'
    },
    images: ['/imagem/camisa7.jpeg'],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Cinza'],
    customizable: true
  },
  {
    id: 'camiseta-azul-marinho',
    name: 'Camiseta Azul Marinho Clássica',
    slug: 'camiseta-azul-marinho',
    category: 'camisetas',
    price: 88.00,
    description: 'Camiseta azul marinho em tom profundo e elegante. Cor versátil que combina com tudo. Ideal para uniformes empresariais, eventos ou uso pessoal com estilo.',
    specs: {
      material: 'Poliéster sublimável',
      gramatura: '160g/m²',
      modelagem: 'Regular fit',
      cor: 'Azul marinho'
    },
    images: ['/imagem/camisa8.jpeg'],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Azul Marinho'],
    customizable: true
  },
  {
    id: 'camiseta-verde',
    name: 'Camiseta Verde Militar Adventure',
    slug: 'camiseta-verde',
    category: 'camisetas',
    price: 88.00,
    description: 'Camiseta verde militar com pegada aventureira. Tom terroso que remete à natureza e atividades outdoor. Perfeita para trilhas, acampamentos ou estilo urbano alternativo.',
    specs: {
      material: 'Poliéster sublimável',
      gramatura: '160g/m²',
      modelagem: 'Regular fit',
      cor: 'Verde militar'
    },
    images: ['/imagem/camisa4.jpeg'],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Verde'],
    customizable: true
  },
  {
    id: 'camiseta-vinho',
    name: 'Camiseta Vinho Sofisticada',
    slug: 'camiseta-vinho',
    category: 'camisetas',
    price: 88.00,
    description: 'Camiseta na cor vinho, sofisticada e elegante. Tom intermediário entre casual e social. Ideal para quem busca diferenciação com classe. Combina perfeitamente com jeans ou calça social.',
    specs: {
      material: 'Poliéster sublimável',
      gramatura: '160g/m²',
      modelagem: 'Regular fit',
      cor: 'Vinho/Bordô'
    },
    images: ['/imagem/camisa5.jpeg'],
    sizes: ['P', 'M', 'G', 'GG'],
    colors: ['Vinho'],
    customizable: true
  },
  
  // ========== BODIES PARA BEBÊ ==========
  {
    id: 'body-bebe-branco',
    name: 'Body Bebê Branco Algodão Premium',
    slug: 'body-bebe-branco',
    category: 'bodies',
    price: 40.00,
    originalPrice: 50.00,
    description: 'Body para bebê em algodão premium super macio, seguro e confortável para a pele delicada. Abertura com botões de pressão para facilitar a troca de fraldas. Ideal para personalizar com o nome do bebê, data de nascimento ou mensagens fofas.',
    specs: {
      material: 'Algodão penteado 100%',
      gramatura: '180g/m²',
      fechamento: 'Botões de pressão antialérgicos',
      gola: 'Envelope (facilita vestir)',
      tamanhos: 'RN ao G',
      faixa_etaria: '0-12 meses',
      impressao: 'Sublimação ou transfer'
    },
    images: ['/imagem/body1.jpeg', '/imagem/body2.jpeg'],
    sizes: ['RN', 'P', 'M', 'G'],
    sizeDimensions: {
      'RN': 'Até 3,5kg (0-1 mês)',
      'P': '3,5-5kg (1-3 meses)',
      'M': '5-7kg (3-6 meses)',
      'G': '7-10kg (6-12 meses)'
    },
    colors: ['Branco'],
    customizable: true,
    careInstructions: 'Lavar antes do primeiro uso. Usar sabão neutro. Passar em temperatura baixa. Não usar alvejante.'
  },
  {
    id: 'body-bebe-rosa',
    name: 'Body Bebê Rosa Princesa',
    slug: 'body-bebe-rosa',
    category: 'bodies',
    price: 42.00,
    description: 'Body rosa delicado para meninas. Tom suave e feminino que transmite doçura. Mesmo conforto e qualidade da linha branca, com o charme da cor rosa bebê.',
    specs: {
      material: 'Algodão penteado 100%',
      gramatura: '180g/m²',
      fechamento: 'Botões de pressão',
      cor: 'Rosa bebê'
    },
    images: ['/imagem/body3.jpeg'],
    sizes: ['RN', 'P', 'M', 'G'],
    colors: ['Rosa'],
    customizable: true,
    careInstructions: 'Lavar com sabão neutro. Não usar alvejante.'
  },
  {
    id: 'body-bebe-azul',
    name: 'Body Bebê Azul Clássico',
    slug: 'body-bebe-azul',
    category: 'bodies',
    price: 42.00,
    description: 'Body azul clássico para meninos. Tom tradicional que nunca sai de moda. Algodão macio que protege a pele sensível do bebê com todo conforto.',
    specs: {
      material: 'Algodão penteado 100%',
      gramatura: '180g/m²',
      fechamento: 'Botões de pressão',
      cor: 'Azul bebê'
    },
    images: ['/imagem/body4.jpeg'],
    sizes: ['RN', 'P', 'M', 'G'],
    colors: ['Azul'],
    customizable: true,
    careInstructions: 'Lavar com sabão neutro. Não usar alvejante.'
  },
  {
    id: 'body-bebe-amarelo',
    name: 'Body Bebê Amarelo Sunshine',
    slug: 'body-bebe-amarelo',
    category: 'bodies',
    price: 42.00,
    description: 'Body amarelo alegre e neutro, perfeito para meninos ou meninas. Cor vibrante que transmite alegria e energia. Ideal para chás de bebê onde o sexo ainda é surpresa.',
    specs: {
      material: 'Algodão penteado 100%',
      gramatura: '180g/m²',
      fechamento: 'Botões de pressão',
      cor: 'Amarelo sol'
    },
    images: ['/imagem/body2.jpeg'],
    sizes: ['RN', 'P', 'M', 'G'],
    colors: ['Amarelo'],
    customizable: true,
    careInstructions: 'Lavar com sabão neutro. Não usar alvejante.'
  },
  
  // ========== CHAVEIROS ==========
  {
    id: 'chaveiro-acrilico',
    name: 'Chaveiro Acrílico Cristal 3x4cm',
    slug: 'chaveiro-acrilico',
    category: 'chaveiros',
    price: 7.00,
    originalPrice: 10.00,
    description: 'Chaveiro em acrílico cristal transparente de alta qualidade com impressão fotográfica. Acabamento brilhante e resistente a riscos. Argola metálica reforçada. Perfeito para lembrancinhas de festas, brindes corporativos ou presentes personalizados.',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '3cm × 4cm',
      espessura: '3mm',
      argola: 'Metal niquelado anti-ferrugem',
      impressao: 'Sublimação HD dupla face',
      acabamento: 'Brilhante polido'
    },
    images: ['/imagem/chaveiro1.jpeg', '/imagem/chaveiro2.jpeg'],
    sizes: ['3x4cm'],
    colors: ['Transparente'],
    customizable: true,
    bulkPricing: [
      { minQty: 50, price: 5.50, desc: 'Acima de 50 unidades' },
      { minQty: 100, price: 3.99, desc: 'Acima de 100 unidades' }
    ]
  },
  {
    id: 'chaveiro-redondo',
    name: 'Chaveiro Redondo Premium 5cm',
    slug: 'chaveiro-redondo',
    category: 'chaveiros',
    price: 8.00,
    description: 'Chaveiro redondo em acrílico com 5cm de diâmetro. Formato clássico que se adapta a qualquer arte. Ideal para fotos, logos ou ilustrações circulares.',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '5cm diâmetro',
      argola: 'Metal niquelado',
      impressao: 'Sublimação HD'
    },
    images: ['/imagem/chaveiro3.jpeg'],
    sizes: ['5cm'],
    colors: ['Transparente'],
    customizable: true,
    bulkPricing: [{ minQty: 50, price: 6.00 }, { minQty: 100, price: 4.50 }]
  },
  {
    id: 'chaveiro-coracao',
    name: 'Chaveiro Coração Romântico 4cm',
    slug: 'chaveiro-coracao',
    category: 'chaveiros',
    price: 8.50,
    description: 'Chaveiro no formato coração, perfeito para presentes românticos, Dia dos Namorados, casamentos ou lembrancinhas de chá de panela. Transmite amor e carinho em cada detalhe.',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '4cm largura',
      formato: 'Coração',
      argola: 'Metal dourado',
      impressao: 'Sublimação HD'
    },
    images: ['/imagem/chaveiro4.jpeg'],
    sizes: ['4cm'],
    colors: ['Transparente'],
    customizable: true,
    bulkPricing: [{ minQty: 50, price: 6.50 }]
  },
  {
    id: 'chaveiro-quadrado',
    name: 'Chaveiro Quadrado Grande 5x5cm',
    slug: 'chaveiro-quadrado',
    category: 'chaveiros',
    price: 9.00,
    description: 'Chaveiro quadrado com ampla área de impressão de 5x5cm. Ideal para artes com mais detalhes ou textos. Formato versátil para qualquer tipo de personalização.',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '5cm × 5cm',
      argola: 'Metal niquelado',
      impressao: 'Sublimação HD'
    },
    images: ['/imagem/chaveiro5.jpeg'],
    sizes: ['5x5cm'],
    colors: ['Transparente'],
    customizable: true
  },
  {
    id: 'chaveiro-estrela',
    name: 'Chaveiro Estrela Brilhante 5cm',
    slug: 'chaveiro-estrela',
    category: 'chaveiros',
    price: 8.50,
    description: 'Chaveiro no formato de estrela de 5 pontas. Design divertido e diferenciado. Perfeito para crianças, festas temáticas ou para quem quer brilhar!',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '5cm ponta a ponta',
      formato: 'Estrela 5 pontas',
      impressao: 'Sublimação HD'
    },
    images: ['/imagem/chaveiro6.jpeg'],
    sizes: ['5cm'],
    colors: ['Transparente'],
    customizable: true
  },
  {
    id: 'chaveiro-mini',
    name: 'Mini Chaveiro Compacto 2x3cm',
    slug: 'chaveiro-mini',
    category: 'chaveiros',
    price: 6.00,
    description: 'O menor chaveiro da linha! Discreto e elegante, não pesa no bolso. Ideal para quem prefere chaveiros mais sutis ou para grandes quantidades em lembrancinhas.',
    specs: {
      material: 'Acrílico cristal 2mm',
      dimensoes: '2cm × 3cm',
      argola: 'Metal niquelado pequeno',
      impressao: 'Sublimação HD'
    },
    images: ['/imagem/chaveiro7.jpeg'],
    sizes: ['2x3cm'],
    colors: ['Transparente'],
    customizable: true,
    bulkPricing: [{ minQty: 100, price: 3.50 }]
  },
  {
    id: 'chaveiro-retangular',
    name: 'Chaveiro Retangular XL 6x4cm',
    slug: 'chaveiro-retangular',
    category: 'chaveiros',
    price: 9.50,
    description: 'Chaveiro retangular extra grande com a maior área de impressão da linha. Perfeito para fotos panorâmicas, artes detalhadas ou logos horizontais. Destaque garantido!',
    specs: {
      material: 'Acrílico cristal 3mm',
      dimensoes: '6cm × 4cm',
      argola: 'Metal niquelado reforçado',
      impressao: 'Sublimação HD premium'
    },
    images: ['/imagem/chaveiro8.jpeg'],
    sizes: ['6x4cm'],
    colors: ['Transparente'],
    customizable: true
  },
  
  // ========== XÍCARAS/CHÍCARAS ==========
  {
    id: 'xicara-porcelana',
    name: 'Xícara de Porcelana Fina com Pires',
    slug: 'xicara-porcelana',
    category: 'xicaras',
    price: 48.00,
    originalPrice: 60.00,
    description: 'Conjunto elegante de xícara e pires em porcelana fina branca. Acabamento delicado com bordas suaves. Ideal para cafés especiais, chás da tarde ou momentos de sofisticação. Personalização de alta definição que valoriza qualquer ambiente.',
    specs: {
      material: 'Porcelana branca de alta temperatura',
      capacidade: '200ml',
      altura_xicara: '7cm',
      diametro_xicara: '8cm',
      diametro_pires: '14cm',
      peso_conjunto: '280g',
      resistencia: 'Microondas e lava-louças',
      impressao: 'Sublimação de alta definição'
    },
    images: ['/imagem/chicara.jpeg', '/imagem/chicara 2.jpeg', '/imagem/chicara3.jpeg'],
    sizes: ['200ml'],
    colors: ['Branca'],
    customizable: true,
    careInstructions: 'Lavar com água morna e sabão neutro. Pode ir ao microondas. Evitar choques térmicos.'
  },
  {
    id: 'xicara-cafe-pequena',
    name: 'Xícara de Café Expresso 100ml',
    slug: 'xicara-cafe-pequena',
    category: 'xicaras',
    price: 42.00,
    description: 'Xícara compacta para café expresso ou doses de bebidas quentes. Design italiano que valoriza o ritual do cafezinho. Inclui pires combinando. Perfeita para cafeterias ou colecionadores.',
    specs: {
      material: 'Porcelana fina',
      capacidade: '100ml',
      altura: '5,5cm',
      inclui: 'Pires 10cm'
    },
    images: ['/imagem/chicara4.jpeg'],
    sizes: ['100ml'],
    colors: ['Branca'],
    customizable: true
  },
  {
    id: 'xicara-cha',
    name: 'Xícara de Chá Clássica 250ml',
    slug: 'xicara-cha',
    category: 'xicaras',
    price: 52.00,
    description: 'Xícara ampla ideal para chás, capuccinos ou chocolate quente. Boca larga que permite apreciar aromas e adicionar coberturas. Design atemporal que combina com qualquer decoração.',
    specs: {
      material: 'Porcelana branca',
      capacidade: '250ml',
      altura: '8cm',
      diametro: '9cm',
      inclui: 'Pires 15cm'
    },
    images: ['/imagem/chicara5.jpeg'],
    sizes: ['250ml'],
    colors: ['Branca'],
    customizable: true
  },
  {
    id: 'xicara-colorida-rosa',
    name: 'Xícara Porcelana Interior Rosa',
    slug: 'xicara-colorida-rosa',
    category: 'xicaras',
    price: 50.00,
    description: 'Xícara de porcelana com interior rosa delicado que adiciona um toque de cor à sua bebida. Exterior branco para personalização e interior colorido para charme extra.',
    specs: {
      material: 'Porcelana bicolor',
      capacidade: '200ml',
      cor_interior: 'Rosa',
      inclui: 'Pires branco'
    },
    images: ['/imagem/chicara6.jpeg'],
    sizes: ['200ml'],
    colors: ['Rosa'],
    customizable: true
  },
  {
    id: 'xicara-colorida-azul',
    name: 'Xícara Porcelana Interior Azul',
    slug: 'xicara-colorida-azul',
    category: 'xicaras',
    price: 50.00,
    description: 'Xícara de porcelana com interior azul celeste. Combinação elegante que remete ao céu e ao mar. Perfeita para quem busca diferenciação com sofisticação.',
    specs: {
      material: 'Porcelana bicolor',
      capacidade: '200ml',
      cor_interior: 'Azul celeste',
      inclui: 'Pires branco'
    },
    images: ['/imagem/chicara7.jpeg'],
    sizes: ['200ml'],
    colors: ['Azul'],
    customizable: true
  },
  {
    id: 'xicara-jumbo',
    name: 'Xícara Jumbo Generosa 300ml',
    slug: 'xicara-jumbo',
    category: 'xicaras',
    price: 55.00,
    description: 'A maior xícara da linha! 300ml de capacidade para quem não se contenta com pouco. Perfeita para sopas, caldos, cereal ou aquele café reforçado da manhã.',
    specs: {
      material: 'Porcelana reforçada',
      capacidade: '300ml',
      altura: '9cm',
      diametro: '10cm',
      inclui: 'Pires 16cm',
      peso: '350g'
    },
    images: ['/imagem/chicara8.jpeg'],
    sizes: ['300ml'],
    colors: ['Branca'],
    customizable: true
  },
  {
    id: 'xicara-classica',
    name: 'Xícara Clássica Borda Dourada',
    slug: 'xicara-classica',
    category: 'xicaras',
    price: 58.00,
    description: 'Xícara de porcelana com detalhes em filete dourado na borda. Estilo clássico europeu que remete às tradicionais casas de chá. Elegância atemporal para momentos especiais.',
    specs: {
      material: 'Porcelana fina',
      capacidade: '180ml',
      acabamento: 'Filete dourado 18k',
      inclui: 'Pires com filete',
      estilo: 'Clássico europeu'
    },
    images: ['/imagem/chicara9.jpeg'],
    sizes: ['180ml'],
    colors: ['Branca com dourado'],
    customizable: true,
    careInstructions: 'NÃO usar no microondas (detalhe dourado). Lavar manualmente.'
  },
  {
    id: 'xicara-moderna',
    name: 'Xícara Moderna Minimalista',
    slug: 'xicara-moderna',
    category: 'xicaras',
    price: 54.00,
    description: 'Xícara com design moderno e linhas clean. Formato geométrico diferenciado que se destaca em qualquer ambiente contemporâneo. Para quem aprecia decoração minimalista.',
    specs: {
      material: 'Porcelana branca',
      capacidade: '220ml',
      design: 'Minimalista contemporâneo',
      formato: 'Cônico',
      inclui: 'Pires quadrado'
    },
    images: ['/imagem/chicara10.jpeg'],
    sizes: ['220ml'],
    colors: ['Branca'],
    customizable: true
  },
  
  // ========== DECORAÇÃO - AZULEJOS/LÁPIDES ==========
  {
    id: 'quadro-azulejo',
    name: 'Quadro de Azulejo Decorativo 20x20cm',
    slug: 'quadro-azulejo',
    category: 'decoracao',
    price: 50.00,
    originalPrice: 65.00,
    description: 'Azulejo de cerâmica de alta qualidade para decoração personalizada. Impressão fotográfica de altíssima definição que não desbota. Perfeito para quadros decorativos, homenagens ou presentes únicos. Inclui suporte para apoio ou pode ser fixado na parede.',
    specs: {
      material: 'Cerâmica vitrificada',
      dimensoes: '20cm × 20cm',
      espessura: '6mm',
      peso: '400g',
      acabamento: 'Brilhante vitrificado',
      resistencia: 'UV e umidade',
      impressao: 'Sublimação fotográfica HD',
      fixacao: 'Inclui suporte de metal'
    },
    images: ['/imagem/lapide1.jpeg', '/imagem/lapide2.jpeg'],
    sizes: ['20x20cm'],
    colors: ['Branco'],
    customizable: true,
    careInstructions: 'Limpar com pano úmido. Não usar produtos abrasivos.'
  },
  {
    id: 'azulejo-15x15',
    name: 'Azulejo Compacto 15x15cm',
    slug: 'azulejo-15x15',
    category: 'decoracao',
    price: 42.00,
    description: 'Azulejo menor ideal para composições em grupo ou espaços reduzidos. Mesma qualidade de impressão em tamanho compacto. Ótimo para montar murais personalizados.',
    specs: {
      material: 'Cerâmica vitrificada',
      dimensoes: '15cm × 15cm',
      espessura: '6mm',
      peso: '300g',
      acabamento: 'Brilhante'
    },
    images: ['/imagem/lapide3.jpeg'],
    sizes: ['15x15cm'],
    colors: ['Branco'],
    customizable: true
  },
  {
    id: 'azulejo-30x30',
    name: 'Azulejo Grande Premium 30x30cm',
    slug: 'azulejo-30x30',
    category: 'decoracao',
    price: 70.00,
    description: 'O maior azulejo da linha! 30x30cm de área para quadros de destaque. Ideal para fotos de família, paisagens ou artes que merecem grande visibilidade. Impressão de altíssima resolução.',
    specs: {
      material: 'Cerâmica premium',
      dimensoes: '30cm × 30cm',
      espessura: '8mm',
      peso: '750g',
      acabamento: 'Ultra brilhante',
      resolucao: 'HD 300dpi'
    },
    images: ['/imagem/lapide4.jpeg'],
    sizes: ['30x30cm'],
    colors: ['Branco'],
    customizable: true
  },
  {
    id: 'lapide-memorial',
    name: 'Lápide Memorial Personalizada 20x30cm',
    slug: 'lapide-memorial',
    category: 'decoracao',
    price: 85.00,
    description: 'Lápide em azulejo cerâmico para memorial e homenagens eternas. Resistente a intempéries, sol, chuva e maresia. Impressão que não desbota por décadas. Tratamento especial para uso em ambientes externos como cemitérios e memoriais.',
    specs: {
      material: 'Cerâmica de alta temperatura',
      dimensoes: '20cm × 30cm',
      espessura: '8mm',
      peso: '600g',
      resistencia: 'UV, chuva, maresia, temperatura',
      durabilidade: '50+ anos',
      acabamento: 'Vitrificado extra',
      uso: 'Interno e externo'
    },
    images: ['/imagem/lapide5.jpeg'],
    sizes: ['20x30cm'],
    colors: ['Branco'],
    customizable: true
  },
  {
    id: 'placa-porta',
    name: 'Placa de Porta Personalizada 10x15cm',
    slug: 'placa-porta',
    category: 'decoracao',
    price: 38.00,
    description: 'Placa pequena ideal para portas de quartos, escritórios ou banheiros. Personalize com nomes, avisos divertidos ou identificações. Tamanho compacto com grande impacto visual.',
    specs: {
      material: 'Cerâmica',
      dimensoes: '10cm × 15cm',
      espessura: '5mm',
      peso: '150g',
      fixacao: 'Fita dupla face inclusa'
    },
    images: ['/imagem/lapide6.jpeg'],
    sizes: ['10x15cm'],
    colors: ['Branco'],
    customizable: true
  },
  {
    id: 'quadro-azulejo-kit',
    name: 'Kit 3 Azulejos Decorativos 15x15cm',
    slug: 'quadro-azulejo-kit',
    category: 'decoracao',
    price: 135.00,
    originalPrice: 150.00,
    description: 'Kit com 3 azulejos de 15x15cm para criar composições artísticas na parede. Podem formar uma imagem única dividida em 3 partes ou 3 imagens complementares. Economia de 15% comparado a comprar separadamente.',
    specs: {
      material: 'Cerâmica vitrificada',
      quantidade: '3 unidades',
      dimensoes: '15cm × 15cm cada',
      area_total: '15cm × 45cm',
      inclui: '3 suportes de metal'
    },
    images: ['/imagem/lapide7.jpeg'],
    sizes: ['15x15cm'],
    colors: ['Branco'],
    customizable: true
  },
  
  // ========== OUTROS ==========
  {
    id: 'fronha-almofada',
    name: 'Fronha de Almofada Decorativa 40x40cm',
    slug: 'fronha-almofada',
    category: 'decoracao',
    price: 45.00,
    originalPrice: 55.00,
    description: 'Fronha decorativa em tecido de alta qualidade com zíper invisível. Impressão sublimática que não desbota na lavagem. Transforme seu sofá ou cama com almofadas personalizadas. NÃO inclui enchimento.',
    specs: {
      material: 'Oxford 100% poliéster',
      dimensoes: '40cm × 40cm',
      gramatura: '150g/m²',
      fechamento: 'Zíper invisível',
      impressao: 'Sublimação frente',
      verso: 'Branco liso',
      enchimento: 'Não incluso'
    },
    images: ['/imagem/body1.jpeg'],
    sizes: ['40x40cm'],
    colors: ['Branca'],
    customizable: true,
    careInstructions: 'Lavar na máquina em ciclo delicado. Secar à sombra. Passar em temperatura baixa.'
  },
  {
    id: 'mousepad-personalizado',
    name: 'Mousepad Personalizado Premium',
    slug: 'mousepad-personalizado',
    category: 'escritorio',
    price: 35.00,
    description: 'Mousepad em neoprene com superfície de tecido de alta precisão para mouse. Base emborrachada antiderrapante. Bordas costuradas que não descolam. Perfeito para home office, gamers ou uso corporativo.',
    specs: {
      material: 'Neoprene com tecido poliéster',
      dimensoes: '20cm × 25cm',
      espessura: '3mm',
      base: 'Borracha antiderrapante',
      bordas: 'Costuradas',
      impressao: 'Sublimação total'
    },
    images: ['/imagem/caneca1.jpeg'],
    sizes: ['20x25cm'],
    colors: ['Preto'],
    customizable: true,
    careInstructions: 'Limpar com pano úmido. Não lavar na máquina.'
  },
]

export const categories = [
  { id: 'todos', name: 'Todos os Produtos', icon: '🎨', description: 'Veja todo o catálogo' },
  { id: 'canecas', name: 'Canecas', icon: '☕', description: 'Cerâmica, vidro e mágicas' },
  { id: 'camisetas', name: 'Camisetas', icon: '👕', description: 'Todas as cores e tamanhos' },
  { id: 'bodies', name: 'Bodies Bebê', icon: '👶', description: 'Algodão premium 0-12 meses' },
  { id: 'chaveiros', name: 'Chaveiros', icon: '🔑', description: 'Acrílico cristal vários formatos' },
  { id: 'xicaras', name: 'Xícaras', icon: '🫖', description: 'Porcelana fina com pires' },
  { id: 'decoracao', name: 'Decoração', icon: '🖼️', description: 'Azulejos, lápides e quadros' },
  { id: 'escritorio', name: 'Escritório', icon: '💼', description: 'Mousepads e acessórios' }
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

export function getProductSpecs(product) {
  return product.specs || {}
}
