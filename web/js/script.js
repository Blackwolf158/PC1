const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const elements = document.querySelectorAll('body *:not(.destacada):not(button)');
const images = document.querySelectorAll('body img:not(.destacada img)');
let fontSize = 16;

increaseButton.addEventListener('click', () => {
  fontSize += 2;
  elements.forEach(element => {
    const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentFontSize + 2}px`;
  });

  images.forEach(image => {
    const currentWidth = parseFloat(window.getComputedStyle(image).width);
    image.style.width = `${currentWidth + 20}px`; // Aumenta el ancho de la imagen en 20 píxeles (ajustable según tus necesidades)
  });
});

decreaseButton.addEventListener('click', () => {
  fontSize -= 2;
  elements.forEach(element => {
    const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    element.style.fontSize = `${currentFontSize - 2}px`;
  });

  images.forEach(image => {
    const currentWidth = parseFloat(window.getComputedStyle(image).width);
    image.style.width = `${currentWidth - 20}px`; // Reduce el ancho de la imagen en 20 píxeles (ajustable según tus necesidades)
  });
});
