AOS.init({
  disable: () => {
    return window.matchMedia('(max-width: 550px)').matches;
  }
});

const isMobile = window.matchMedia('(max-width: 550px').matches;

if (isMobile) {
  const masonry = new MiniMasonry({
    container: '.catalog__list',
    gutter: 20,
    ultimateGutter: 20,
    baseWidth: 120,
  })
}