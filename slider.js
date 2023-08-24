document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = slider.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Mostrar la primera diapositiva al cargar la página
  showSlide(currentSlide);

  // Cambiar a la siguiente diapositiva cada 2 segundos (2000 milisegundos)
  setInterval(nextSlide, 2000);
});
