(() => {
  const w = 'https://wa.me/5551995765088';
  const faq = document.querySelector('#faq');
  const addBeforeFaq = (id, className, html) => {
    if (!faq || document.getElementById(id)) return;
    const section = document.createElement('section');
    section.id = id;
    section.className = className;
    section.innerHTML = html;
    faq.before(section);
  };
  addBeforeFaq('diferenciais', 'showcase-dark', '<div class="wrap"><div class="showcase-grid"><article><i>&#9889;</i><h3>Entrega R&aacute;pida</h3><p>Grande parte dos pedidos prontos em at&eacute; 24 horas.</p></article><article><i>&#127912;</i><h3>Personaliza&ccedil;&atilde;o Total</h3><p>Voc&ecirc; participa de todas as etapas da cria&ccedil;&atilde;o.</p></article><article><i>&#11088;</i><h3>+10 Anos de Experi&ecirc;ncia</h3><p>Desde 2015 criando produtos &uacute;nicos.</p></article><article><i>&#128175;</i><h3>Qualidade Garantida</h3><p>Sublima&ccedil;&atilde;o profissional e acabamento caprichado.</p></article></div></div>');
  addBeforeFaq('como-funciona', 'showcase-dark process', '<div class="wrap"><div class="showcase-title"><h2>Como <em>funciona</em></h2><p>Um processo simples e transparente, do pedido &agrave; entrega.</p></div><div class="process-grid"><article><b>01</b><i>&#128717;&#65039;</i><h3>Escolha o produto</h3><p>Navegue pelo cat&aacute;logo e escolha o que mais combina com voc&ecirc;.</p></article><article><b>02</b><i>&#127912;</i><h3>Envie sua ideia</h3><p>Fale com a Renata pelo WhatsApp e envie foto, nome ou frase.</p></article><article><b>03</b><i>&#128179;</i><h3>Confirme o pedido</h3><p>Voc&ecirc; recebe o or&ccedil;amento e combina todos os detalhes.</p></article><article><b>04</b><i>&#128230;</i><h3>Receba ou retire</h3><p>Produ&ccedil;&atilde;o com carinho, entrega ou retirada em Cap&atilde;o da Canoa.</p></article></div></div>');
  addBeforeFaq('depoimentos', 'showcase-dark testimonials', '<div class="wrap"><div class="showcase-title"><h2>O que nossos <em>clientes dizem</em></h2><p>Carinho em cada pedido e milhares de momentos especiais.</p></div><div class="testimonial-grid"><article><b>M</b><div><h3>Maria Silva <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>Produto de excelente qualidade! A personaliza&ccedil;&atilde;o ficou perfeita e a entrega foi super r&aacute;pida.</p></div></article><article><b>J</b><div><h3>Jo&atilde;o Santos <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>Atendimento incr&iacute;vel da Renata. Fez exatamente o que eu pedi.</p></div></article><article><b>A</b><div><h3>Ana Costa <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>Caneca muito bonita, chegou bem embalada. Vou comprar mais para presentear!</p></div></article><article><b>P</b><div><h3>Pedro Oliveira <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>Fez os chaveiros para o casamento da minha filha. Pre&ccedil;o justo e qualidade impec&aacute;vel.</p></div></article><article><b>C</b><div><h3>Carla Mendes <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>As camisetas ficaram lindas! Todos elogiaram a qualidade.</p></div></article><article><b>R</b><div><h3>Roberto Almeida <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></h3><p>&Oacute;timo produto. A cor ficou um pouco diferente do que imaginei, mas ficou muito bonito.</p></div></article></div></div>');

  const keychainCategory = [...document.querySelectorAll('.product-category')].find(section =>
    section.querySelector('.product-category__head h3')?.textContent?.trim() === 'Chaveiros e enfeites'
  );
  if (keychainCategory && !document.getElementById('almochaveiro-card')) {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = 'almochaveiro-card';
    card.innerHTML = `<div class="shirt-photo almochaveiro-photo">
      <img src="almochaveiro-1.png" alt="Almochaveiro personalizado 7 x 7 cm">
      <button class="carousel-arrow carousel-prev" type="button" aria-label="Ver foto anterior">&#8249;</button>
      <button class="carousel-arrow carousel-next" type="button" aria-label="Ver pr&oacute;xima foto">&#8250;</button>
    </div><div class="cardbody"><div class="kind">Lembran&ccedil;as</div><h3>Almochaveiro personalizado 7 x 7 cm</h3><div class="price">Personalizado - Valor sob consulta<br><small>Personalize com foto, frase ou arte especial.</small></div></div>`;
    keychainCategory.querySelector('.category-grid')?.appendChild(card);
    const images = ['almochaveiro-1.png', 'almochaveiro-2.png', 'almochaveiro-3.png', 'almochaveiro-4.png'];
    const productImage = card.querySelector('img');
    let currentImage = 0;
    const showImage = step => {
      currentImage = (currentImage + step + images.length) % images.length;
      productImage.src = images[currentImage];
    };
    card.querySelector('.carousel-prev').addEventListener('click', () => showImage(-1));
    card.querySelector('.carousel-next').addEventListener('click', () => showImage(1));
  }

  const mugCategory = [...document.querySelectorAll('.product-category')].find(section =>
    section.querySelector('.product-category__head h3')?.textContent?.includes('Canecas')
  );
  if (mugCategory && !document.getElementById('xicara-pires-card')) {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = 'xicara-pires-card';
    card.innerHTML = `<div class="shirt-photo xicara-pires-photo">
      <img src="xicara-pires-1.png" alt="X&iacute;cara com pires personalizada de 180 ml">
      <button class="carousel-arrow carousel-prev" type="button" aria-label="Ver foto anterior">&#8249;</button>
      <button class="carousel-arrow carousel-next" type="button" aria-label="Ver pr&oacute;xima foto">&#8250;</button>
    </div><div class="cardbody"><div class="kind">Canecas e x&iacute;caras</div><h3>X&iacute;cara com pires personalizada - 180 ml</h3><div class="price">Personalizada - Valor sob consulta<br><small>Ideal para presentes, empresas e lembran&ccedil;as especiais.</small></div></div>`;
    mugCategory.querySelector('.category-grid')?.appendChild(card);
    const images = ['xicara-pires-1.png', 'xicara-pires-2.png', 'xicara-pires-3.png', 'xicara-pires-4.png'];
    const productImage = card.querySelector('img');
    let currentImage = 0;
    const showImage = step => {
      currentImage = (currentImage + step + images.length) % images.length;
      productImage.src = images[currentImage];
    };
    card.querySelector('.carousel-prev').addEventListener('click', () => showImage(-1));
    card.querySelector('.carousel-next').addEventListener('click', () => showImage(1));
  }

  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const price = card.querySelector('.price');
    if (!title || !price || card.querySelector('.product-whatsapp')) return;
    price.hidden = true;
    const button = document.createElement('a');
    button.className = 'product-whatsapp';
    button.href = w + '?text=' + encodeURIComponent('Olá, quero pedir um orçamento para: ' + title);
    button.target = '_blank';
    button.rel = 'noopener';
    button.textContent = 'Pedir orçamento no WhatsApp';
    price.after(button);
  });

  document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('h3')?.textContent?.trim() || '';
    const body = card.querySelector('.cardbody');
    if (!/^Camiseta/i.test(title) || !body || body.querySelector('.product-material')) return;
    const material = document.createElement('p');
    material.className = 'product-material';
    material.textContent = 'Malha 100% poliéster';
    const kind = body.querySelector('.kind');
    if (kind) kind.after(material); else body.prepend(material);
  });

  document.querySelectorAll('.card .cardbody').forEach(body => {
    [...body.children].forEach(item => {
      if (!item.matches('.kind, h3, .price, .product-whatsapp, .product-details-trigger')) {
        item.classList.add('product-detail-source');
      }
    });
  });

  const catalog = document.querySelector('#camisetas');
  const categoryGroups = catalog?.querySelector('.catalog-groups');
  if (catalog && categoryGroups && !catalog.querySelector('.catalog-filters')) {
    const categoryMap = {
      'Camisetas': 'camisetas',
      'Canecas e xícaras': 'canecas',
      'Chaveiros e enfeites': 'chaveiros',
      'Body de bebê': 'body',
      'Almofadas': 'almofadas',
      'Azulejos': 'azulejos',
      'Squeezes': 'squeezes',
      'Outros produtos': 'outros'
    };
    [...categoryGroups.querySelectorAll('.product-category')].forEach(group => {
      const title = group.querySelector('.product-category__head h3')?.textContent?.trim();
      group.dataset.category = categoryMap[title] || 'outros';
    });

    const filters = [
      ['all', 'Todos'], ['camisetas', 'Camisetas'], ['canecas', 'Canecas'],
      ['almofadas', 'Almofadas'], ['azulejos', 'Azulejos'], ['body', 'Body bebê'],
      ['chaveiros', 'Chaveiros'], ['squeezes', 'Squeezes']
    ];
    const controls = document.createElement('div');
    controls.className = 'catalog-filters';
    controls.setAttribute('aria-label', 'Filtrar produtos por categoria');
    controls.innerHTML = '<span>Filtrar por categoria:</span>' + filters.map(([value, label], index) =>
      `<button type="button" class="catalog-filter${index === 0 ? ' is-active' : ''}" data-filter="${value}" aria-pressed="${index === 0}">${label}</button>`
    ).join('');
    catalog.querySelector('.heading')?.after(controls);

    controls.addEventListener('click', event => {
      const button = event.target.closest('.catalog-filter');
      if (!button) return;
      const selected = button.dataset.filter;
      controls.querySelectorAll('.catalog-filter').forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      categoryGroups.querySelectorAll('.product-category').forEach(group => {
        group.hidden = selected !== 'all' && group.dataset.category !== selected;
      });
    });
  }

  if (!document.querySelector('.product-lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.className = 'product-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = '<button type="button" class="product-lightbox__close" aria-label="Fechar foto ampliada">×</button><figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    const caption = lightbox.querySelector('figcaption');
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    const open = (image, title) => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || title || 'Foto do produto';
      caption.textContent = title || 'Produto personalizado';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      lightbox.querySelector('.product-lightbox__close').focus();
    };
    document.querySelectorAll('.shirt-photo').forEach(photo => {
      const image = photo.querySelector('img');
      if (!image) return;
      const title = photo.closest('.card')?.querySelector('h3')?.textContent?.trim() || '';
      photo.classList.add('photo-zoomable');
      photo.tabIndex = 0;
      photo.setAttribute('role', 'button');
      photo.setAttribute('aria-label', `Ampliar foto: ${title}`);
      photo.addEventListener('click', event => {
        if (event.target.closest('button')) return;
        open(image, title);
      });
      photo.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(image, title); }
      });
    });
    lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
    lightbox.querySelector('.product-lightbox__close').addEventListener('click', close);
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
  }

  const productDetailsModal = document.querySelector('.product-lightbox');
  if (productDetailsModal && !productDetailsModal.dataset.detailsReady) {
    productDetailsModal.dataset.detailsReady = 'true';
    productDetailsModal.innerHTML = '<section class="product-dialog" role="dialog" aria-modal="true" aria-label="Detalhes do produto"><button type="button" class="product-lightbox__close" aria-label="Fechar detalhes do produto">&times;</button><div class="product-dialog__media"><img alt=""></div><div class="product-dialog__content"><div class="product-dialog__actions"><button type="button" class="product-favorite" aria-label="Adicionar aos favoritos" title="Favoritar">&#9825;</button><button type="button" class="product-share" aria-label="Compartilhar produto" title="Compartilhar">&#10548;</button></div><div class="kind product-dialog__kind"></div><h2></h2><p class="product-dialog__intro">Produto personalizado com a sua ideia, foto, frase ou arte especial.</p><div class="product-dialog__details"></div><a class="product-dialog__whatsapp" target="_blank" rel="noopener">Pedir or&ccedil;amento no WhatsApp</a></div></section>';
    const modalImage = productDetailsModal.querySelector('img');
    const modalKind = productDetailsModal.querySelector('.product-dialog__kind');
    const modalTitle = productDetailsModal.querySelector('h2');
    const modalDetails = productDetailsModal.querySelector('.product-dialog__details');
    const modalWhatsApp = productDetailsModal.querySelector('.product-dialog__whatsapp');
    const favoriteButton = productDetailsModal.querySelector('.product-favorite');
    const shareButton = productDetailsModal.querySelector('.product-share');
    let openProductTitle = '';
    const readFavorites = () => {
      try { return JSON.parse(localStorage.getItem('fina-estampa-favorites') || '[]'); }
      catch { return []; }
    };
    const saveFavorites = favorites => localStorage.setItem('fina-estampa-favorites', JSON.stringify(favorites));
    const updateFavoriteButton = title => {
      const isFavorite = readFavorites().includes(title);
      favoriteButton.classList.toggle('is-favorite', isFavorite);
      favoriteButton.innerHTML = isFavorite ? '&#9829;' : '&#9825;';
      favoriteButton.setAttribute('aria-label', isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos');
      favoriteButton.title = isFavorite ? 'Remover dos favoritos' : 'Favoritar';
    };
    const closeDetails = () => {
      productDetailsModal.classList.remove('is-open');
      productDetailsModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
    };
    const openDetails = (card, image) => {
      const title = card.querySelector('h3')?.textContent?.trim() || 'Produto personalizado';
      openProductTitle = title;
      modalImage.src = image.currentSrc || image.src;
      modalImage.alt = image.alt || title;
      modalImage.classList.toggle('is-xicara-pires', card.id === 'xicara-pires-card' || /^X[i&iacute]cara com pires/i.test(title));
      modalKind.textContent = card.querySelector('.kind')?.textContent?.trim() || 'Produto personalizado';
      modalTitle.textContent = title;
      modalDetails.replaceChildren();
      const material = card.querySelector('.product-material');
      if (material) modalDetails.appendChild(material.cloneNode(true));
      [...(card.querySelector('.cardbody')?.children || [])].filter(item => {
        const isBaseInformation = item.matches('.kind, h3, .price, .product-whatsapp, .product-material, .product-details-trigger');
        const isSizeSummary = /Tamanhos e medidas/i.test(item.textContent || '');
        return !isBaseInformation && !isSizeSummary;
      }).forEach(item => modalDetails.appendChild(item.cloneNode(true)));
      const adultSizes = { P: ['68 cm', '50 cm'], M: ['70 cm', '52 cm'], G: ['72 cm', '54 cm'], GG: ['74 cm', '56 cm'], G1: ['76 cm', '60 cm'], G2: ['78 cm', '62 cm'], G3: ['80 cm', '64 cm'] };
      const childSizes = { N01: ['40 cm', '29 cm'], N02: ['46 cm', '32 cm'], N04: ['48 cm', '34 cm'], N06: ['50 cm', '36 cm'], N08: ['52 cm', '38 cm'], N10: ['54 cm', '40 cm'], N12: ['56 cm', '42 cm'], N14: ['58 cm', '44 cm'] };
      const sizeOptions = /^Camiseta branca infantil/i.test(title) ? childSizes : /^Camiseta/i.test(title) ? adultSizes : null;
      if (sizeOptions) {
        const picker = document.createElement('div');
        picker.className = 'size-picker';
        picker.innerHTML = '<p><strong>Tamanho:</strong> <span>Escolha um tamanho</span></p><div class="size-picker__buttons"></div><div class="size-picker__measure" aria-live="polite">Selecione um tamanho para ver as medidas.</div>';
        const status = picker.querySelector('span');
        const measure = picker.querySelector('.size-picker__measure');
        const buttons = picker.querySelector('.size-picker__buttons');
        Object.entries(sizeOptions).forEach(([size, dimensions]) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = size;
          button.addEventListener('click', () => {
            buttons.querySelectorAll('button').forEach(item => item.classList.toggle('is-selected', item === button));
            status.textContent = size;
            measure.innerHTML = `<b>Medidas do tamanho ${size}</b><span>Altura: ${dimensions[0]}</span><span>Largura: ${dimensions[1]}</span>`;
          });
          buttons.appendChild(button);
        });
        modalDetails.prepend(picker);
      }
      if (/^Camiseta/i.test(title)) {
        const care = document.createElement('section');
        care.className = 'shirt-care';
        care.innerHTML = '<h3>Composi&ccedil;&atilde;o e conforto</h3><p>Tecido PP branco liso, malha fria 100% poli&eacute;ster, malha PP 30/1 fiado com 150 de gramatura. Leve, macio, agrad&aacute;vel ao toque, com costura refor&ccedil;ada, secagem r&aacute;pida e f&aacute;cil de passar.</p><p>Por ser poli&eacute;ster, n&atilde;o encolhe e mant&eacute;m o tamanho mesmo ap&oacute;s as lavagens. A malha possui pouca elasticidade.</p><h3>Dicas de conserva&ccedil;&atilde;o</h3><ul><li>Lave &agrave; m&atilde;o ou do avesso.</li><li>Evite deixar de molho e n&atilde;o use alvejante.</li><li>Evite muito tempo de exposi&ccedil;&atilde;o direta ao sol.</li><li>Se for passar, passe do avesso e n&atilde;o encoste o ferro na arte.</li></ul><h3>Processo e qualidade da estampa</h3><p>A estampa &eacute; produzida por sublima&ccedil;&atilde;o, atrav&eacute;s de temperatura, garantindo acabamento sem relevo, cores vivas e excelente qualidade visual. N&atilde;o sai na lavagem.</p><p class="shirt-care__notice">Aten&ccedil;&atilde;o: as medidas podem variar um pouco. As cores tamb&eacute;m podem sofrer pequenas altera&ccedil;&otilde;es conforme a configura&ccedil;&atilde;o de cada monitor.</p>';
        modalDetails.appendChild(care);
      }
      if (/^Caneca/i.test(title) && !/m[a&aacute]gica/i.test(title)) {
        const mugDetails = document.createElement('section');
        mugDetails.className = 'mug-care';
        const isGlitterMug = /glitter/i.test(title);
        const useInfo = isGlitterMug
          ? '<p class="mug-care__warning">Aten&ccedil;&atilde;o: caneca glitter n&atilde;o pode ir ao micro-ondas nem &agrave; lava-lou&ccedil;as.</p><p>Para preservar o acabamento glitter, lave &agrave; m&atilde;o e evite produtos abrasivos.</p>'
          : '<p>Adequada para uso no micro-ondas e na lava-lou&ccedil;as. A cer&acirc;mica oferece resist&ecirc;ncia, estabilidade e transfer&ecirc;ncia gradual de calor para um manuseio mais confort&aacute;vel ap&oacute;s o aquecimento.</p>';
        mugDetails.innerHTML = '<h3>O que voc&ecirc; precisa saber</h3><p>Caneca de cer&acirc;mica com formato cil&iacute;ndrico, personalizada com a arte escolhida. Ideal para bebidas quentes ou frias.</p><h3>Especifica&ccedil;&otilde;es t&eacute;cnicas</h3><dl class="mug-specs"><div><dt>Venda</dt><dd>Unidade (kit com 1)</dd></div><div><dt>Capacidade</dt><dd>325 ml</dd></div><div><dt>Altura</dt><dd>9,5 cm</dd></div><div><dt>Di&acirc;metro</dt><dd>12 cm</dd></div><div><dt>Material</dt><dd>Cer&acirc;mica</dd></div><div><dt>Formato</dt><dd>Cil&iacute;ndrico</dd></div></dl><h3>Uso e conserva&ccedil;&atilde;o</h3>' + useInfo + '<p class="mug-care__notice">Produto vendido por unidade. Esta informa&ccedil;&atilde;o &eacute; para as canecas tradicionais de 325 ml; a caneca m&aacute;gica possui caracter&iacute;sticas diferentes.</p>';
        modalDetails.appendChild(mugDetails);
      }
      if (card.id === 'xicara-pires-card' || /^X[i&iacute]cara com pires/i.test(title)) {
        const cupDetails = document.createElement('section');
        cupDetails.className = 'mug-care';
        cupDetails.innerHTML = '<h3>O que voc&ecirc; precisa saber</h3><p>X&iacute;cara com pires em porcelana, personalizada com logo, foto ou imagem. Ideal para caf&eacute;, presentes e divulga&ccedil;&atilde;o de empresas, com op&ccedil;&atilde;o de QR Code para Instagram ou site.</p><h3>Especifica&ccedil;&otilde;es t&eacute;cnicas</h3><dl class="mug-specs"><div><dt>Formato de venda</dt><dd>Kit x&iacute;cara e pires</dd></div><div><dt>Capacidade</dt><dd>180 ml</dd></div><div><dt>Material</dt><dd>Porcelana</dd></div><div><dt>Altura</dt><dd>6,5 cm</dd></div><div><dt>Di&acirc;metro</dt><dd>8 cm</dd></div><div><dt>Uso</dt><dd>Micro-ondas</dd></div></dl><h3>Uso e qualidade</h3><p>Possui acabamento refinado, alta defini&ccedil;&atilde;o na aplica&ccedil;&atilde;o da arte e materiais selecionados. As x&iacute;caras s&atilde;o empilh&aacute;veis, facilitando a organiza&ccedil;&atilde;o.</p><h3>Conte&uacute;do do kit</h3><p class="mug-care__notice">1 x&iacute;cara de porcelana personalizada de 180 ml e 1 pires.</p>';
        modalDetails.appendChild(cupDetails);
      }
      if (/kit torre/i.test(title)) {
        const towerDetails = document.createElement('section');
        towerDetails.className = 'mug-care';
        towerDetails.innerHTML = '<h3>O que voc&ecirc; precisa saber</h3><p>Torre de x&iacute;caras personalizadas que une funcionalidade e estilo. Ideal para apreciar caf&eacute;, ch&aacute; ou outras bebidas quentes, presentear ou dar um toque especial &agrave; cozinha.</p><h3>Especifica&ccedil;&otilde;es t&eacute;cnicas</h3><dl class="mug-specs"><div><dt>Formato de venda</dt><dd>Kit</dd></div><div><dt>Unidades por kit</dt><dd>4 x&iacute;caras</dd></div><div><dt>Material</dt><dd>Cer&acirc;mica</dd></div><div><dt>Capacidade</dt><dd>180 ml cada</dd></div><div><dt>Acess&oacute;rio</dt><dd>Suporte de metal preto</dd></div><div><dt>Uso</dt><dd>Micro-ondas e lava-lou&ccedil;as</dd></div></dl><h3>Praticidade e personaliza&ccedil;&atilde;o</h3><p>As quatro x&iacute;caras s&atilde;o empilh&aacute;veis e podem receber personagens, frases, nomes, fotos ou artes especiais. O suporte organiza o conjunto e adiciona um toque moderno ao ambiente.</p><p class="mug-care__notice">Produto vendido como kit completo com 4 x&iacute;caras de 180 ml e suporte.</p>';
        modalDetails.appendChild(towerDetails);
      }
      if (/^Squeeze de alum/i.test(title)) {
        const squeezeDetails = document.createElement('section');
        squeezeDetails.className = 'mug-care';
        squeezeDetails.innerHTML = '<h3>Descri&ccedil;&atilde;o</h3><p>A garrafa branca de alum&iacute;nio de 500 ml &eacute; pr&aacute;tica, resistente e ideal para manter sua hidrata&ccedil;&atilde;o durante o dia. Personalize com arte, foto, nome, frase ou logo para criar um produto &uacute;nico.</p><h3>Especifica&ccedil;&otilde;es t&eacute;cnicas</h3><dl class="mug-specs"><div><dt>Capacidade</dt><dd>500 ml</dd></div><div><dt>Material</dt><dd>Alum&iacute;nio</dd></div><div><dt>Cor base</dt><dd>Branca</dd></div><div><dt>Tampa</dt><dd>Rosca com bolinha</dd></div><div><dt>Veda&ccedil;&atilde;o</dt><dd>Evita vazamentos</dd></div><div><dt>Composi&ccedil;&atilde;o</dt><dd>Livre de BPA</dd></div></dl><h3>Uso e praticidade</h3><p>A tampa de rosca garante uma veda&ccedil;&atilde;o segura, enquanto a tampa bolinha facilita o consumo da sua bebida. Leve para a rotina, trabalho, estudos, passeios e atividades do dia a dia.</p><h3>Design consciente</h3><p>Com visual moderno e material dur&aacute;vel, &eacute; uma escolha pr&aacute;tica para quem busca reduzir o uso de descart&aacute;veis e manter a bebida sempre por perto.</p>';
        modalDetails.appendChild(squeezeDetails);
      }
      if (/^Body infantil branco personalizado$/i.test(title)) {
        const bodyDetails = document.createElement('section');
        bodyDetails.className = 'mug-care';
        bodyDetails.innerHTML = '<h3>O que voc&ecirc; precisa saber</h3><p>Body branco para beb&ecirc;s, modelo de manga curta, ideal para estampar e personalizar com foto, nome, frase ou arte especial.</p><h3>Composi&ccedil;&atilde;o e conforto</h3><dl class="mug-specs"><div><dt>Material</dt><dd>96% poli&eacute;ster</dd></div><div><dt>Elastano</dt><dd>4%</dd></div><div><dt>Gramatura</dt><dd>220 g</dd></div><div><dt>Modelo</dt><dd>Manga curta</dd></div><div><dt>Cor</dt><dd>Branca</dd></div><div><dt>Acabamento</dt><dd>Ribana</dd></div></dl><p>O acabamento em ribana oferece mais conforto para o beb&ecirc; e a malha &eacute; ideal para receber a personaliza&ccedil;&atilde;o.</p><h3>Tamanhos e medidas</h3><dl class="mug-specs"><div><dt>P</dt><dd>20 x 36 cm</dd></div><div><dt>M</dt><dd>22 x 38 cm</dd></div><div><dt>G</dt><dd>24 x 40 cm</dd></div><div><dt>GG</dt><dd>26 x 42 cm</dd></div></dl><p class="mug-care__notice">Medidas em largura x comprimento. Podem ocorrer varia&ccedil;&otilde;es de at&eacute; 1 cm.</p>';
        modalDetails.appendChild(bodyDetails);
      }
      if (/^Body infantil branco - manga longa$/i.test(title)) {
        const longBodyDetails = document.createElement('section');
        longBodyDetails.className = 'mug-care';
        longBodyDetails.innerHTML = '<h3>O que voc&ecirc; precisa saber</h3><p>Body branco liso para beb&ecirc;s, de manga longa, ideal para sublima&ccedil;&atilde;o, estamparia e personaliza&ccedil;&atilde;o com foto, nome, frase ou arte especial.</p><h3>Composi&ccedil;&atilde;o e conforto</h3><dl class="mug-specs"><div><dt>Material</dt><dd>96% poli&eacute;ster</dd></div><div><dt>Elastano</dt><dd>4%</dd></div><div><dt>Gramatura</dt><dd>220 g</dd></div><div><dt>Modelo</dt><dd>Manga longa</dd></div><div><dt>Cor</dt><dd>Branca</dd></div><div><dt>Acabamento</dt><dd>Ribana</dd></div></dl><p>O tecido flex&iacute;vel de poli&eacute;ster e elastano facilita as trocas de roupa. O acabamento em ribana ajusta a pe&ccedil;a ao corpo com estabilidade e mais conforto.</p><h3>Praticidade para o beb&ecirc;</h3><p>Possui pesco&ccedil;o cruzado, que amplia a abertura da gola e facilita a passagem da cabe&ccedil;a. A estrutura t&ecirc;xtil preserva a integridade das fibras mesmo ap&oacute;s a aplica&ccedil;&atilde;o da estampa.</p><h3>Tamanhos e medidas</h3><dl class="mug-specs"><div><dt>P</dt><dd>20 x 36 cm</dd></div><div><dt>M</dt><dd>22 x 38 cm</dd></div><div><dt>G</dt><dd>24 x 40 cm</dd></div><div><dt>GG</dt><dd>26 x 42 cm</dd></div></dl><p class="mug-care__notice">Medidas em largura x comprimento. Podem ocorrer varia&ccedil;&otilde;es de at&eacute; 1 cm.</p>';
        modalDetails.appendChild(longBodyDetails);
      }
      const price = card.querySelector('.price')?.textContent?.trim();
      if (price) {
        const priceLine = document.createElement('p');
        priceLine.className = 'product-dialog__price';
        priceLine.textContent = price;
        modalDetails.appendChild(priceLine);
      }
      modalWhatsApp.href = w + '?text=' + encodeURIComponent('Quero um orcamento para: ' + title);
      updateFavoriteButton(title);
      productDetailsModal.classList.add('is-open');
      productDetailsModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      productDetailsModal.querySelector('.product-lightbox__close').focus();
    };
    favoriteButton.addEventListener('click', () => {
      if (!openProductTitle) return;
      const favorites = readFavorites();
      const position = favorites.indexOf(openProductTitle);
      if (position === -1) favorites.push(openProductTitle); else favorites.splice(position, 1);
      saveFavorites(favorites);
      updateFavoriteButton(openProductTitle);
    });
    shareButton.addEventListener('click', async () => {
      if (!openProductTitle) return;
      const shareData = { title: openProductTitle, text: `Confira este produto da Fina Estampa: ${openProductTitle}`, url: window.location.href };
      try {
        if (navigator.share) await navigator.share(shareData);
        else if (navigator.clipboard) {
          await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
          shareButton.textContent = 'Link copiado';
          setTimeout(() => { shareButton.innerHTML = '&#10548;'; }, 1600);
        }
      } catch (error) {
        if (error?.name !== 'AbortError') shareButton.textContent = 'Compartilhe';
      }
    });
    document.querySelectorAll('.shirt-photo').forEach(photo => {
      const image = photo.querySelector('img');
      const card = photo.closest('.card');
      if (!image || !card) return;
      photo.addEventListener('click', event => {
        if (event.target.closest('button')) return;
        event.stopImmediatePropagation();
        openDetails(card, image);
      }, true);
      photo.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          event.stopImmediatePropagation();
          openDetails(card, image);
        }
      }, true);
      const cardBody = card.querySelector('.cardbody');
      if (cardBody) cardBody.addEventListener('click', event => {
        if (event.target.closest('a, button')) return;
        openDetails(card, image);
      });
      let detailsButton = card.querySelector('.product-details-trigger');
      if (!detailsButton && cardBody) {
        detailsButton = document.createElement('button');
        detailsButton.type = 'button';
        detailsButton.className = 'product-details-trigger';
        detailsButton.textContent = 'Ver detalhes do produto';
        cardBody.appendChild(detailsButton);
      }
      detailsButton?.addEventListener('click', () => openDetails(card, image));
    });
    productDetailsModal.querySelector('.product-lightbox__close').addEventListener('click', closeDetails);
    productDetailsModal.addEventListener('click', event => { if (event.target === productDetailsModal) closeDetails(); });
  }
})();
