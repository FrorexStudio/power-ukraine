
// infinity stroke text 

$(function(){
    $('.primary-divider__text').marquee({
  
    //Если вы хотите всегда анимировать с помощью jQuery
    allowCss3Support: true,
  
    //работает, когда allowCss3Support имеет значение true - полный список см.http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
    css3easing: 'linear',
  
    //Требуется плагин JQuery. По умолчанию это «линейный»
    easing: 'linear',
  
    //время паузы до следующего поворота анимации в миллисекундах
    // delayBeforeStart: 0,
    //'left', 'right', 'up' or 'down'
    direction: 'left',
  
    //true или false - следует ли дублировать выделение, чтобы показать эффект продолжения потока
    duplicated: true,
  
    //скорость в миллисекундах
    duration: 5000,
  
    //разрыв в пикселях между тикерами
    gap: 30,
  
    //пауза
    pauseOnCycle: false,
  
    //при наведении курсора на паузу - с помощью плагина jQuery https://github.com/tobia/Pause
    pauseOnHover: false,
  
    startVisible: true
    
    });
  });



// Navbar Button 
$('.navbar-toggle').click(function(){
    $('.navbar-collapse').toggle();
});



// Initialize Swiper
    
const swiper = new Swiper(".partnersSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },}
});
