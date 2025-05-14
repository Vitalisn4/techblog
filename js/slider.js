document.addEventListener("DOMContentLoaded", () => {
  // Image Slider
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  if (slides.length === 0 || !prevBtn || !nextBtn) return

  let currentSlide = 0
  const slideCount = slides.length

  // Initialize slider
  showSlide(currentSlide)

  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount
    showSlide(currentSlide)
  })

  // Next button click
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slideCount
    showSlide(currentSlide)
  })

  // Dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      showSlide(currentSlide)
    })
  })

  // Auto slide every 5 seconds
  let slideInterval = setInterval(autoSlide, 5000)

  // Pause auto slide on hover
  const sliderContainer = document.querySelector(".slider-container")
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", () => {
      clearInterval(slideInterval)
    })

    sliderContainer.addEventListener("mouseleave", () => {
      slideInterval = setInterval(autoSlide, 5000)
    })
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % slideCount
    showSlide(currentSlide)
  }

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active")
    })

    // Deactivate all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current slide and activate current dot
    slides[index].classList.add("active")
    dots[index].classList.add("active")
  }
})
