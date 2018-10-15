function Slider (name) {
    const elem = document.querySelector(name);
    elem.classList.add('slider');
    const defaultSlides = elem.innerHTML;
    const slidesWrapper = `<div class="slidesWrapper"> ${defaultSlides} </div>`;
    elem.innerHTML = '';
    elem.innerHTML = slidesWrapper;
    const slides = elem.querySelector('.slidesWrapper').children;
    const sliderLength = slides.length;
    let arrowPrev,
        arrowNext;
    let current = 0;

    const options = {
        arrows: true,
        dots: true,
        fade: true
    };

    // ARROWS

    if (options.arrows === true) {

        prevArrow = document.createElement('button')
        prevArrow.className = 'arrow prev';
        prevArrow.innerHTML = 'previous';

        nextArrow = document.createElement('button')
        nextArrow.className = 'arrow next';
        nextArrow.innerHTML = 'next';

        elem.insertBefore(prevArrow, elem.firstChild);
        elem.appendChild(nextArrow);

        arrowPrev = elem.querySelector('.prev');
        arrowNext = elem.querySelector('.next');

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
    };


    // DOTS

    if (options.dots === true) {
        const setDots = document.createElement('ul');
        setDots.className = 'dots';
        for( let i = 0; i < sliderLength; i++ ){
            let setDot = document.createElement('li');
            setDot.className = 'dot'
            setDots.appendChild(setDot);
        };
        elem.appendChild(setDots);
    };

    const dots = elem.querySelector('.dots').children;

    // FADE EFFECT

    if (options.fade === true) {
        for( let i = 0; i < sliderLength; i++ ){
            slides[i].classList.add('fade');
        };
    }

    const reset = () => {
        for( let i = 0; i < sliderLength; i++){
            slides[i].style.display = 'none';
            dots[i].classList.remove('current');
        }
    };

    const initSlider = () => {
        reset();
        slides[current].classList == 'current';
        slides[current].style.display = 'block';
        dots[current].classList.add('current');
    };
    
    initSlider();
};

const s1 = Slider('#slider');

const s2 = Slider('#slider-1');