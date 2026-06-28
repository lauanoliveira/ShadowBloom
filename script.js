function revelarElementos() {
  const elementos = document.querySelectorAll('.reveal');

  elementos.forEach((el, index) => {
    const alturaJanela = window.innerHeight;
    const topoElemento = el.getBoundingClientRect().top;

    if (topoElemento < alturaJanela - 100) {
      setTimeout(() => { 
       el.classList.add('ativo');

if (el.tagName === "LI") {
  setTimeout(() => {
    el.classList.add('respirar');
  }, 800);
}
      }, index * 400); // atraso automático
    }
  });
}

window.addEventListener('scroll', revelarElementos);
window.addEventListener('load', revelarElementos);

const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 30;
  const rotateY = (x - centerX) / 30;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty('--x', `${x}px`);
  card.style.setProperty('--y', `${y}px`);
});