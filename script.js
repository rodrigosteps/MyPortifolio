const sections = document.querySelectorAll('.section');
let currentIndex = 0;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    // Scroll para baixo
    if (currentIndex < sections.length - 1) currentIndex++;
  } else {
    // Scroll para cima
    if (currentIndex > 0) currentIndex--;
  }

  isScrolling = true;
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    isScrolling = false;
  }, 100); // tempo de debounce
});
 
  // Mostrar o botão quando rolar a página para baixo
  window.onscroll = function () {
    const btn = document.getElementById("btnTopo");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Função para rolar para o topo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }