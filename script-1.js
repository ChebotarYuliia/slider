class Slider {
    constructor(elem, value1, value2, value3) {
        this.elem = document.querySelector(elem);
        this.arrow = value1;
        this.dots = value2;
        this.fade = value3;
        this.elem.classList.add('slider');
        this.defaultSlides = this.elem.innerHTML;
        this.slidesWrapper = `<div class="slidesWrapper"> ${this.defaultSlides} </div>`;
        this.elem.innerHTML = '';
        this.elem.innerHTML = this.slidesWrapper;
        this.slides = this.elem.querySelector('.slidesWrapper').children;
        this.sliderLength = this.slides.length;
        this.current = 0;
    }
    reset(){
        for( let i = 0; i < this.sliderLength; i++){
            this.slides[i].style.display = 'none';
            this.dots[i].classList.remove('current');
        }
    }
    initSlider(){
        reset();
        this.slides[this.current].classList == 'current';
        this.slides[this.current].style.display = 'block';
        this.dots[this.current].classList.add('current');
    }
    initSlider(){
        reset();
        this.slides[this.current].classList == 'current';
        this.slides[this.current].style.display = 'block';
        this.dots[this.current].classList.add('current');
    }
    // ARROWS
    setArrow(){
        let arrowPrev,
            arrowNext;
        if (this.arrows === true) {
    
            prevArrow = document.createElement('button')
            prevArrow.className = 'arrow prev';
            prevArrow.innerHTML = 'previous';
    
            nextArrow = document.createElement('button')
            nextArrow.className = 'arrow next';
            nextArrow.innerHTML = 'next';
    
            this.elem.insertBefore(prevArrow, this.elem.firstChild);
            this.elem.appendChild(nextArrow);
    
            arrowPrev = elem.querySelector('.prev');
            arrowNext = elem.querySelector('.next');
    
            const toPrevSlide = () => {
                reset();
                this.slides[this.current - 1].style.display = 'block';
                this.dots[this.current - 1].classList.add('current');
                current --;
            };
            
            arrowPrev.addEventListener('click', function() {
                if( this.current === 0 ){
                    this.current = this.slides.length;
                }
                toPrevSlide();
            });
            
            const toNextSlide = () => {
                reset();
                this.slides[this.current + 1].style.display = 'block';
                this.dots[this.current + 1].classList.add('current');
                this.current ++;
            };
            
            arrowNext.addEventListener('click', function() {
                if( this.current === this.slides.length - 1){
                    this.current = -1;
                }
                toNextSlide();
            });
        };
    }
    // DOTS
    setDots() {
        if (this.dots === true) {
            const setDots = document.createElement('ul');
            setDots.className = 'dots';
            for( let i = 0; i < this.sliderLength; i++ ){
                let setDot = document.createElement('li');
                setDot.className = 'dot'
                setDots.appendChild(setDot);
            };
            this.elem.appendChild(setDots);
        };
        const dots = this.elem.querySelector('.dots').children;
    }
    // FADE EFFECT
    setFade(){
        if (this.fade === true) {
            for( let i = 0; i < this.sliderLength; i++ ){
                this.slides[i].classList.add('fade');
            };
        }
    }
};

// const element = document.getElementById('#slider');
const s1 = new Slider('#slider', true, true, true);

// const element2 = document.getElementById('#slider-1');
// const s1 = new Slider(element2);