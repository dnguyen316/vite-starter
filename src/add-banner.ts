export const addBanner = (text: string) => {
  console.log('render');
  const content = document.createElement('p');
  content.textContent = text;
  const mainSection = document.querySelector('main');
  mainSection?.appendChild(content);
  for (const [, module] of Object.entries(
    import.meta.glob('./logos/**/*.svg'),
  )) {
    module().then((url) => {
      const img = document.createElement('img');
      img.src = (url as { default: string }).default;
      img.width = 200;
      mainSection?.appendChild(img);
    });
  }
};
