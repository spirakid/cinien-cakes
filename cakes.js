document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.carousel img');
  let index = 0;

  function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }

  setInterval(showNextImage, 3000);

  document.querySelector('.prev-btn').addEventListener('click', function() {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
  });

  document.querySelector('.next-btn').addEventListener('click', function() {
    showNextImage();
  });

  // Set the first image to be visible initially
  images[0].classList.add('active');
});

