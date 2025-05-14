document.addEventListener("DOMContentLoaded", () => {
  // Testimonials Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const dots = document.querySelectorAll(".testimonial-dots .dot")
  const prevBtn = document.querySelector(".prev-testimonial")
  const nextBtn = document.querySelector(".next-testimonial")

  if (testimonials.length === 0 || !prevBtn || !nextBtn) return

  let currentTestimonial = 0
  const testimonialCount = testimonials.length

  // Initialize slider
  showTestimonial(currentTestimonial)

  // Previous button click
  prevBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCount) % testimonialCount
    showTestimonial(currentTestimonial)
  })

  // Next button click
  nextBtn.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCount
    showTestimonial(currentTestimonial)
  })

  // Dot click
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index
      showTestimonial(currentTestimonial)
    })
  })

  // Auto slide every 7 seconds
  let testimonialInterval = setInterval(autoSlideTestimonial, 7000)

  // Pause auto slide on hover
  const testimonialSlider = document.querySelector(".testimonial-slider")
  if (testimonialSlider) {
    testimonialSlider.addEventListener("mouseenter", () => {
      clearInterval(testimonialInterval)
    })

    testimonialSlider.addEventListener("mouseleave", () => {
      testimonialInterval = setInterval(autoSlideTestimonial, 7000)
    })
  }

  function autoSlideTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCount
    showTestimonial(currentTestimonial)
  }

  function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active")
    })

    // Deactivate all dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show current testimonial and activate current dot
    testimonials[index].classList.add("active")
    dots[index].classList.add("active")
  }
})
