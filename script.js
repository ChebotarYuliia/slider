const slides = document.querySelectorAll('.slide'),
      arrowPrev = document.querySelector('#prev'),
      arrowNext = document.querySelector('#next'),
      dots = document.querySelectorAll('.dot');

let current = 0;

const reset = () => {
    for( let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
        dots[i].classList.remove('current');
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
    dots[current].classList.add('current');
};

const toPrevSlide = () => {
    reset();
    slides[current - 1].style.display = 'block';
    dots[current - 1].classList.add('current');
    current --;
};

arrowPrev.addEventListener('click', function() {
    if( current === 0 ){
        current = slides.length;
    }
    toPrevSlide();
});

const toNextSlide = () => {
    reset();
    slides[current + 1].style.display = 'block';
    dots[current + 1].classList.add('current');
    current ++;
};

arrowNext.addEventListener('click', function() {
    if( current === slides.length - 1){
        current = -1;
    }
    toNextSlide();
});

initSlider();
