let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let intervalId;

function prevSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
  intervalId = setInterval(nextSlide, 3500);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
  intervalId = setInterval(nextSlide, 3500);
}

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

showSlide();
intervalId = setInterval(nextSlide, 3500);

document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
});

document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
});


document.querySelector('.prev').addEventListener('click', function() {
  clearInterval(intervalId);  
  intervalId = setInterval(nextSlide, 3500);  
});

document.querySelector('.next').addEventListener('click', function() {
  clearInterval(intervalId);  
  intervalId = setInterval(nextSlide, 3500); 
});
