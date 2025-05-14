document.addEventListener("DOMContentLoaded", () => {
  // FAQ Accordion
  const accordionItems = document.querySelectorAll(".accordion-item")

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header")

    if (header) {
      header.addEventListener("click", () => {
        // Toggle active class on the clicked item
        item.classList.toggle("active")

        // Close other accordion items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })
      })
    }
  })
})
