document.addEventListener('DOMContentLoaded', function() {
  // Carousel Logic
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

  images[0].classList.add('active');

  // Valentine's Popup
  const popup = document.getElementById('valentine-popup');
  const closeBtn = document.querySelector('.close-btn');

  setTimeout(() => {
    popup.style.display = 'block';
  }, 2000); // Show after 2 seconds

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});
