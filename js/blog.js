document.addEventListener("DOMContentLoaded", () => {
  // Blog posts data (in a real application, this would come from a server)
  const blogPosts = [
    {
      id: 1,
      title: "AI in Healthcare",
      excerpt: "How artificial intelligence is transforming medical diagnosis and treatment.",
      image: "images/blog-post-1.jpg",
      date: "May 7, 2025",
      category: "technology",
      author: "Vitalis Ngam",
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies in web development.",
      image: "images/blog-post-2.jpg",
      date: "May 6, 2025",
      category: "web",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Cybersecurity Essentials",
      excerpt: "Protecting your digital assets in an increasingly connected world.",
      image: "images/blog-post-3.jpg",
      date: "May 5, 2025",
      category: "security",
      author: "Mike Johnson",
    },
    {
      id: 4,
      title: "5G Technology",
      excerpt: "Understanding the impact of 5G on our connected world.",
      image: "images/blog-post-4.jpg",
      date: "May 4, 2025",
      category: "technology",
      author: "Sarah Williams",
    },
    {
      id: 5,
      title: "Cloud Computing",
      excerpt: "How businesses are leveraging cloud solutions for growth.",
      image: "images/blog-post-5.jpg",
      date: "May 3, 2025",
      category: "technology",
      author: "David Chen",
    },
    {
      id: 6,
      title: "Blockchain Basics",
      excerpt: "A beginner's guide to understanding blockchain technology.",
      image: "images/blog-post-6.jpg",
      date: "May 2, 2025",
      category: "technology",
      author: "Lisa Rodriguez",
    },
    {
      id: 7,
      title: "Machine Learning Fundamentals",
      excerpt: "An introduction to the core concepts of machine learning.",
      image: "images/blog-post-7.jpg",
      date: "May 1, 2025",
      category: "ai",
      author: "Robert Kim",
    },
    {
      id: 8,
      title: "The Rise of No-Code Platforms",
      excerpt: "How no-code tools are democratizing software development.",
      image: "images/blog-post-8.jpg",
      date: "April 30, 2025",
      category: "web",
      author: "Emily Johnson",
    },
    {
      id: 9,
      title: "Data Privacy in 2025",
      excerpt: "Current challenges and solutions in data protection.",
      image: "images/blog-post-9.jpg",
      date: "April 29, 2025",
      category: "security",
      author: "Alex Thompson",
    },
  ]

  const postsContainer = document.getElementById("posts-container")
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")
  const categorySelect = document.getElementById("category-select")
  const loadMoreBtn = document.getElementById("load-more")

  let currentPosts = [...blogPosts]
  const postsPerPage = 6
  let currentPage = 1

  // Initial load
  displayPosts()

  // Search functionality
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      filterPosts()
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        filterPosts()
      }
    })
  }

  // Category filter
  if (categorySelect) {
    categorySelect.addEventListener("change", () => {
      filterPosts()
    })
  }

  // Load more posts
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentPage++
      displayPosts(true)

      // Hide load more button if all posts are displayed
      if (currentPage * postsPerPage >= currentPosts.length) {
        loadMoreBtn.style.display = "none"
      }
    })
  }

  function filterPosts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : ""
    const category = categorySelect ? categorySelect.value : "all"

    currentPosts = blogPosts.filter((post) => {
      // Filter by search term
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm) || post.excerpt.toLowerCase().includes(searchTerm)

      // Filter by category
      const matchesCategory = category === "all" || post.category === category

      return matchesSearch && matchesCategory
    })

    // Reset pagination
    currentPage = 1

    // Display filtered posts
    displayPosts(false)

    // Show/hide load more button
    if (loadMoreBtn) {
      loadMoreBtn.style.display = currentPosts.length > postsPerPage ? "block" : "none"
    }
  }

  function displayPosts(append = false) {
    if (!postsContainer) return

    // Clear container if not appending
    if (!append) {
      postsContainer.innerHTML = ""
    }

    // Calculate posts to display
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = Math.min(startIndex + postsPerPage, currentPosts.length)
    const postsToDisplay = currentPosts.slice(startIndex, endIndex)

    // Display posts
    if (postsToDisplay.length === 0) {
      postsContainer.innerHTML = '<p class="no-results">No posts found. Try a different search term or category.</p>'
      return
    }

    postsToDisplay.forEach((post) => {
      const postHTML = `
        <div class="post-card">
          <img src="${post.image}" alt="${post.title}">
          <div class="post-content">
            <h3>${post.title}</h3>
            <p class="post-meta">${post.date} | ${capitalizeFirstLetter(post.category)}</p>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="btn">Read More</a>
          </div>
        </div>
      `

      postsContainer.insertAdjacentHTML("beforeend", postHTML)
    })
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
})
