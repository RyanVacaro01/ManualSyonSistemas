/* Custom JavaScript for Syon Manual - Black & White */

// Enhanced search functionality
document.addEventListener("DOMContentLoaded", function() {
  initSearchEnhancements();
  initDarkModeEnhancements();
  initKeyboardShortcuts();
  initScrollToTop();
  initNavigationCollapse();
});

/**
 * Enhanced search functionality
 */
function initSearchEnhancements() {
  const searchInput = document.querySelector(".md-search__input");
  
  if (searchInput) {
    // Add placeholder
    searchInput.placeholder = "Buscar... (Ctrl+K)";
    
    // Add search debounce with faster response
    let searchTimeout;
    searchInput.addEventListener("input", function(e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function() {
        highlightSearchResults(e.target.value);
      }, 150);
    });
    
    // Focus search on Ctrl+K or Cmd+K
    document.addEventListener("keydown", function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      
      // Escape to clear search
      if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        searchInput.blur();
        clearSearchHighlights();
      }
    });
    
    // Clear highlights when search is cleared
    searchInput.addEventListener("input", function(e) {
      if (!e.target.value) {
        clearSearchHighlights();
      }
    });
  }
}

/**
 * Highlight search results in content
 */
function highlightSearchResults(query) {
  if (!query || query.length < 2) {
    clearSearchHighlights();
    return;
  }
  
  const content = document.querySelector(".md-content__inner");
  if (!content) return;
  
  // Remove existing highlights first
  clearSearchHighlights();
  
  // Find and highlight matching text
  const walker = document.createTreeWalker(
    content,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Skip script, style, and already highlighted elements
        const parent = node.parentElement;
        if (parent && (
          parent.tagName === "SCRIPT" ||
          parent.tagName === "STYLE" ||
          parent.classList.contains("search-highlight") ||
          parent.closest(".search-highlight")
        )) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );
  
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  
  const escapedQuery = escapeRegex(query);
  const regex = new RegExp("(" + escapedQuery + ")", "gi");
  
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
  
  // Scroll to first highlight
  const firstHighlight = content.querySelector(".search-highlight");
  if (firstHighlight) {
    firstHighlight.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

/**
 * Clear all search highlights
 */
function clearSearchHighlights() {
  const content = document.querySelector(".md-content__inner");
  if (!content) return;
  
  const highlights = content.querySelectorAll(".search-highlight");
  highlights.forEach(function(el) {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
    parent.normalize();
  });
}

/**
 * Escape regex special characters
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Navigation collapse/expand functionality
 */
function initNavigationCollapse() {
  // Find all expandable navigation items
  const nestedItems = document.querySelectorAll(".md-nav__item--nested");
  
  nestedItems.forEach(function(item) {
    const expandBtn = item.querySelector(":scope > .md-nav__expand");
    const nestedList = item.querySelector(":scope > .md-nav__list");
    
    if (expandBtn && nestedList) {
      // Set initial state - check if item or any child is active
      const hasActiveChild = item.querySelector(".md-nav__item--active");
      const isActive = item.classList.contains("md-nav__item--active") || hasActiveChild;
      item.setAttribute("aria-expanded", isActive ? "true" : "false");
      
      // Add click handler
      expandBtn.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isExpanded = item.getAttribute("aria-expanded") === "true";
        item.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      });
    }
  });
  
  // Auto-expand all parent items that contain active pages
  const activeItems = document.querySelectorAll(".md-nav__item--active");
  activeItems.forEach(function(item) {
    let parent = item.parentElement;
    while (parent) {
      if (parent.classList && parent.classList.contains("md-nav__item--nested")) {
        parent.setAttribute("aria-expanded", "true");
      }
      parent = parent.parentElement;
    }
  });
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
      }
    });
  });
  
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });
}

/**
 * Keyboard shortcuts
 */
function initKeyboardShortcuts() {
  document.addEventListener("keydown", function(e) {
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
  // Remove existing notification
  const existing = document.querySelector(".md-notification");
  if (existing) existing.remove();
  
  const notification = document.createElement("div");
  notification.className = "md-notification";
  notification.textContent = message;
  
  const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
  
  notification.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${isDark ? "#ffffff" : "#000000"};
    color: ${isDark ? "#000000" : "#ffffff"};
    padding: 12px 24px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slideIn 0.2s ease;
    font-size: 14px;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(function() {
    notification.style.animation = "slideOut 0.2s ease";
    setTimeout(function() {
      notification.remove();
    }, 200);
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
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.innerHTML = "↑";
  
  const isDark = document.body.getAttribute("data-md-color-scheme") === "slate";
  
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${isDark ? "#ffffff" : "#000000"};
    color: ${isDark ? "#000000" : "#ffffff"};
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 999;
    font-size: 18px;
    font-weight: bold;
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
    this.style.transform = "scale(1.1)";
  });
  
  scrollToTopBtn.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
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
    background: #000000;
    color: #ffffff;
    padding: 1px 4px;
    border-radius: 3px;
    font-weight: 500;
  }
  
  [data-md-color-scheme="slate"] .search-highlight {
    background: #ffffff;
    color: #000000;
  }
  
  /* Search result styling */
  .md-search-result__link {
    transition: background-color 0.15s ease;
  }
  
  .md-search-result__link:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  [data-md-color-scheme="slate"] .md-search-result__link:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
document.head.appendChild(style);

console.log("Syon Manual - Custom JS loaded successfully");
