let masonry = null;

window.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 480px');

  if (isMobile.matches) {
    setMasonryGrid();
  }
  
  isMobile.addEventListener('change', setMasonryGrid);

});

function setMasonryGrid() {
  if (!masonry) {
    masonry = new MiniMasonry({
      container: '.catalog__list',
      gutter: 20,
      ultimateGutter: 20,
      baseWidth: 120,
    });
    
    setTimeout(() => {
      masonry.layout();
    }, 100);
  } else {
    masonry.destroy();
    masonry = null;
  }
}