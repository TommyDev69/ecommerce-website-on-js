// let slideIndex = 0;
// const image1= document.querySelectorAll('.caurosel');
// const image2 = document.querySelectorAll('.caurosel2');
// const combineImage = image1 + image2

// const totalSlides = slides.length;

// const carousels = document.querySelectorAll('.carousel');

// carousels.forEach(carousel => {
//     let slideIndex = 0;
//     const slides = carousel.querySelectorAll('.slide');
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.transform = `translateX(${100 * (i - index)}%)`;
//         });
//     }

    // Optional: Automatic sliding
    // setInterval(() => {
    //     slideIndex = (slideIndex + 1) % totalSlides;
    //     showSlide(slideIndex);
    // }, 5000); // Slide every 5 seconds

    // Optional: Add navigation buttons or controls
    // const prevButton = carousel.querySelector('.prev-button');
    // const nextButton = carousel.querySelector('.next-button');
    // prevButton.addEventListener('click', () => {
    //     slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    //     showSlide(slideIndex);
    // });
    // nextButton.addEventListener('click', () => {
    //     slideIndex = (slideIndex + 1) % totalSlides;
    //     showSlide(slideIndex);
    // });

    // Initial slide display
    // showSlide(slideIndex);
// });

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
console.log(slides);
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${n * 100}%)`;
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

// Optional: Automatic sliding
// setInterval(nextSlide, 5000); // Slide every 5 seconds

// Optional: Controls
// document.querySelector('.next').addEventListener('click', nextSlide);
// document.querySelector('.prev').addEventListener('click', prevSlide);

// Optional: Automatic sliding
// setInterval(nextSlide, 5000); // Slide every 5 seconds

// Optional: Controls
// document.querySelector('.next').addEventListener('click', nextSlide);
// document.querySelector('.prev').addEventListener('click', prevSlide);

