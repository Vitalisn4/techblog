document.addEventListener("DOMContentLoaded", () => {
  // Contact Form Validation
  const contactForm = document.getElementById("contact-form")
  const formMessage = document.getElementById("form-message")

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form fields
      const name = document.getElementById("name")
      const email = document.getElementById("email")
      const subject = document.getElementById("subject")
      const message = document.getElementById("message")

      // Reset error messages
      resetErrors()

      // Validate fields
      let isValid = true

      if (!name.value.trim()) {
        showError("name-error", "Name is required")
        isValid = false
      }

      if (!email.value.trim()) {
        showError("email-error", "Email is required")
        isValid = false
      } else if (!validateEmail(email.value)) {
        showError("email-error", "Please enter a valid email address")
        isValid = false
      }

      if (!subject.value.trim()) {
        showError("subject-error", "Subject is required")
        isValid = false
      }

      if (!message.value.trim()) {
        showError("message-error", "Message is required")
        isValid = false
      }

      // If form is valid, submit it
      if (isValid) {
        // Simulate form submission
        formMessage.textContent = "Thank you for your message! We will get back to you soon."
        formMessage.className = "success-message"
        contactForm.reset()

        // Hide success message after 5 seconds
        setTimeout(() => {
          formMessage.textContent = ""
          formMessage.className = ""
        }, 5000)
      }
    })
  }

  // Comment Form Validation
  const commentForm = document.getElementById("comment-form")
  const commentMessage = document.getElementById("comment-message")

  if (commentForm && commentMessage) {
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const comment = document.getElementById("comment").value

      // Simple validation
      if (!name.trim() || !email.trim() || !comment.trim()) {
        commentMessage.textContent = "Please fill in all fields"
        commentMessage.className = "error-message"
        return
      }

      if (!validateEmail(email)) {
        commentMessage.textContent = "Please enter a valid email address"
        commentMessage.className = "error-message"
        return
      }

      // Simulate comment submission
      commentMessage.textContent = "Thank you for your comment!"
      commentMessage.className = "success-message"
      commentForm.reset()

      // Add the comment to the page (for demo purposes)
      addComment(name, comment)

      // Hide success message after 5 seconds
      setTimeout(() => {
        commentMessage.textContent = ""
        commentMessage.className = ""
      }, 5000)
    })
  }

  // Helper functions
  function resetErrors() {
    const errorElements = document.querySelectorAll(".error-message")
    errorElements.forEach((element) => {
      element.style.display = "none"
      element.textContent = ""
    })
  }

  function showError(id, message) {
    const errorElement = document.getElementById(id)
    if (errorElement) {
      errorElement.textContent = message
      errorElement.style.display = "block"
    }
  }

  function addComment(name, comment) {
    const commentsList = document.getElementById("comments-list")
    if (commentsList) {
      // Remove "no comments" message if it exists
      if (commentsList.textContent.includes("No comments yet")) {
        commentsList.innerHTML = ""
      }

      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      const commentHTML = `
        <div class="comment">
          <div class="comment-header">
            <span class="comment-author">${name}</span>
            <span class="comment-date">${date}</span>
          </div>
          <div class="comment-body">
            <p>${comment}</p>
          </div>
        </div>
      `

      commentsList.insertAdjacentHTML("afterbegin", commentHTML)
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
})
