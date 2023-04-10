const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slider = document.querySelector('.carousel-slider');
const sliderImages = Array.from(slider.children);

const slideWidth = sliderImages[0].naturalWidth;
const imgGap = 16;
const moveAmount = slideWidth + imgGap;

var imgPosition = 0;

const setImagePosition = (imgPosition) => {
    sliderImages.forEach(image => {
        image.style.transform = 'translateX(' + imgPosition + 'px)'
    })
}

prevBtn.addEventListener('click', () => {
    
    const currentSlide = slider.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
    
    imgPosition = imgPosition + moveAmount;

    setImagePosition(imgPosition);
    
    const newCurrentSlide = slider.querySelector('.current-slide');

    if (newCurrentSlide === sliderImages[0]) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }

})

nextBtn.addEventListener('click', () => {

    const currentSlide = slider.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

    imgPosition = imgPosition - moveAmount;

    setImagePosition(imgPosition);

    const newCurrentSlide = slider.querySelector('.current-slide');

    if (newCurrentSlide === sliderImages[sliderImages.length - 1]) {
        nextBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }

})