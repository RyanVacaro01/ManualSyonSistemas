/* Custom JavaScript for Syon Manual */

// Enhanced search functionality
document.addEventListener("DOMContentLoaded", function() {
  // Initialize search enhancements
  initSearchEnhancements();
  
  // Initialize dark mode toggle enhancements
  initDarkModeEnhancements();
  
  // Initialize keyboard shortcuts
  initKeyboardShortcuts();
  
  // Initialize scroll to top
  initScrollToTop();
});

/**
 * Enhanced search functionality
 */
function initSearchEnhancements() {
  const searchInput = document.querySelector(".md-search__input");
  const searchResults = document.querySelector(".md-search-result__list");
  
  if (searchInput) {
    // Add search debounce
    let searchTimeout;
    searchInput.addEventListener("input", function(e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function() {
        // Custom search logic can be added here
        highlightSearchResults(e.target.value);
      }, 300);
    });
    
    // Focus search on Ctrl+K or Cmd+K
    document.addEventListener("keydown", function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }
}

/**
 * Highlight search results
 */
function highlightSearchResults(query) {
  if (!query) return;
  
  const content = document.querySelector(".md-content__inner");
  if (!content) return;
  
  // Remove existing highlights
  const existingHighlights = content.querySelectorAll(".search-highlight");
  existingHighlights.forEach(function(el) {
    el.classList.remove("search-highlight");
  });
  
  if (query.length < 2) return;
  
  // Find and highlight matching text
  const walker = document.createTreeWalker(
    content,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  
  const regex = new RegExp("(" + escapeRegex(query) + ")", "gi");
  textNodes.forEach(function(node) {
    if (regex.test(node.textContent)) {
      const span = document.createElement("span");
      span.innerHTML = node.textContent.replace(
        regex,
        '<mark class="search-highlight">$1</mark>'
      );
      node.parentNode.replaceChild(span, node);
    }
  });
}

/**
 * Escape regex special characters
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Dark mode enhancements
 */
function initDarkModeEnhancements() {
  // Check for saved preference
  const savedTheme = localStorage.getItem("md-theme");
  if (savedTheme) {
    document.body.setAttribute("data-md-color-scheme", savedTheme);
  }
  
  // Watch for theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "data-md-color-scheme") {
        const newTheme = document.body.getAttribute("data-md-color-scheme");
        localStorage.setItem("md-theme", newTheme);
        updateThemeColors(newTheme);
      }
    });
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
}

/**
 * Update theme colors dynamically
 */
function updateThemeColors(theme) {
  const root = document.documentElement;
  if (theme === "slate") {
    root.style.setProperty("--md-background-fg-color", "#121212");
    root.style.setProperty("--md-surface-fg-color", "#1e1e1e");
  } else {
    root.style.setProperty("--md-background-fg-color", "#ffffff");
    root.style.setProperty("--md-surface-fg-color", "#ffffff");
  }
}

/**
 * Keyboard shortcuts
 */
function initKeyboardShortcuts() {
  document.addEventListener("keydown", function(e) {
    // Ctrl/Cmd + N: New
    if ((e.ctrlKey || e.metaKey) && e.key === "n") {
      e.preventDefault();
      showNotification("Atalho: Novo registro");
    }
    
    // Ctrl/Cmd + S: Save
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault();
      showNotification("Atalho: Salvar");
    }
    
    // Ctrl/Cmd + P: Print
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault();
      window.print();
    }
    
    // Escape: Close modals
    if (e.key === "Escape") {
      closeAllModals();
    }
  });
}

/**
 * Show notification
 */
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "md-notification";
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: linear-gradient(135deg, #673ab7, #9c27b0);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(103, 58, 183, 0.4);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(function() {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(function() {
      notification.remove();
    }, 300);
  }, 2000);
}

/**
 * Close all modals
 */
function closeAllModals() {
  const modals = document.querySelectorAll(".md-modal");
  modals.forEach(function(modal) {
    modal.classList.remove("md-modal--active");
  });
}

/**
 * Scroll to top functionality
 */
function initScrollToTop() {
  // Create scroll to top button
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.innerHTML = "↑";
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #673ab7, #9c27b0);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(103, 58, 183, 0.4);
    z-index: 999;
    font-size: 20px;
  `;
  
  document.body.appendChild(scrollToTopBtn);
  
  // Show/hide on scroll
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });
  
  // Scroll to top on click
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // Hover effect
  scrollToTopBtn.addEventListener("mouseenter", function() {
    this.style.transform = "translateY(-4px)";
  });
  
  scrollToTopBtn.addEventListener("mouseleave", function() {
    this.style.transform = "translateY(0)";
  });
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/**
 * Add animation to cards on scroll
 */
function animateCardsOnScroll() {
  const cards = document.querySelectorAll(".module-card");
  
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );
  
  cards.forEach(function(card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";
    observer.observe(card);
  });
}

// Initialize card animations when on homepage
if (document.querySelector(".module-grid")) {
  animateCardsOnScroll();
}

/**
 * Copy code button functionality
 */
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("md-clipboard")) {
    const codeBlock = e.target.closest(".highlight");
    if (codeBlock) {
      const code = codeBlock.querySelector("code").textContent;
      navigator.clipboard.writeText(code).then(function() {
        showNotification("Codigo copiado!");
      });
    }
  }
});

/**
 * Add CSS animations dynamically
 */
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .search-highlight {
    background: linear-gradient(135deg, #673ab7, #9c27b0);
    color: white;
    padding: 2px 4px;
    border-radius: 4px;
  }
  
  [data-md-color-scheme="slate"] .search-highlight {
    background: linear-gradient(135deg, #9575cd, #ce93d8);
  }
`;
document.head.appendChild(style);

console.log("Syon Manual - Custom JS loaded successfully");
