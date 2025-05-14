// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate hamburger menu
      const spans = menuToggle.querySelectorAll("span")
      spans.forEach((span) => span.classList.toggle("active"))

      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })
  }

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form")
  const newsletterMessage = document.getElementById("newsletter-message")

  if (newsletterForm && newsletterMessage) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("email").value

      // Simple email validation
      if (!validateEmail(email)) {
        showMessage(newsletterMessage, "Please enter a valid email address.", "error")
        return
      }

      // Simulate form submission
      showMessage(newsletterMessage, "Thank you for subscribing!", "success")
      newsletterForm.reset()
    })
  }
})

// Email validation function
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Show message function
function showMessage(element, message, type) {
  element.textContent = message
  element.className = type === "success" ? "success-message" : "error-message"

  // Hide message after 5 seconds
  setTimeout(() => {
    element.textContent = ""
    element.className = ""
  }, 5000)
}
