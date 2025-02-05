document.addEventListener("DOMContentLoaded", function () {
    // Fade Effect for Hero Carousel
    const images = document.querySelectorAll(".fade-carousel img");
    let currentIndex = 0;
  
    function fadeCarousel() {
      images.forEach((img, index) => {
        img.classList.remove("active");
        if (index === currentIndex) {
          img.classList.add("active");
        }
      });
      currentIndex = (currentIndex + 1) % images.length;
    }
    setInterval(fadeCarousel, 3000);
  
    // WhatsApp Order Buttons
    document.querySelectorAll(".order-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const cakeName = this.dataset.cake || "Cake Order";
        const whatsappLink = `https://wa.me/2348109146013?text=Hi! I'm interested in ordering a ${cakeName}.`;
        window.open(whatsappLink, "_blank");
      });
    });
  
    // Modal for Image Slideshow
    const modal = document.querySelector(".modal");
    const modalImg = modal.querySelector("img");
    const closeBtn = document.querySelector(".close-btn");
  
    document.querySelectorAll(".grid-item img").forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
  