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
})();
