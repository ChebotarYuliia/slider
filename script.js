const slides = document.querySelectorAll('.slide'),
      arrowPrev = document.querySelector('.prev'),
      arrowNext = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot');

let current = 0;

const reset = () => {
    for( let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
};

const initSlider = () => {
    reset();
    for( let i = 0; i < slides.length; i++){
        if( slides[i].classList == 'current') {
            current = i;
            console.log(i)
        }
    }
    slides[current].style.display = 'block';
}

const toPrevSlide = () => {
    reset();
    if(current === 0){
        current = slides.length;
    }
    slides[current - 1].style.display = 'block';
    current --;
}

const toNextSlider = () => {
    reset();
    
}

initSlider();
