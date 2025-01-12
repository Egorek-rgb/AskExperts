// Находим все элементы с классом second-header__list-wrapper
const wrappers = document.querySelectorAll('.second-header__list-wrapper');

// Добавляем обработчик клика для каждого элемента
wrappers.forEach((wrapper) => {
  const img = wrapper.querySelector('.dott'); // Находим изображение внутри обертки
  const text = wrapper.querySelector('.second-header__list-item'); // Находим текст

  wrapper.addEventListener('click', () => {
    // Меняем изображение
    const newImage = './static/img/Ellipse 2.png'; // Укажите путь к новому изображению
    const originalImage = './static/img/dott.png';

    img.src = img.src.includes('dott.png') ? newImage : originalImage;

    // Меняем цвет текста
    text.classList.toggle('active');
    setTimeout(() => {
        text.classList.remove('active');
         // Убираем класс через заданное время
         img.src = originalImage;
      }, 500); 
  });
});


const swiper = new Swiper('.feedback-container', {
  navigation: {
    nextEl: " .left-arrow",
    prevEl: ".right-arrow",
  }
  
});