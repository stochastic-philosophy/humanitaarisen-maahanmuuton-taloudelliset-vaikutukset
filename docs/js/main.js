// Theme and Cookie Consent Management for Multi-Country Research Site
class SiteManager {
  constructor() {
    this.hasConsent = false;
    this.currentTheme = 'light';
    this.init();
  }

  init() {
    this.checkConsent();
    this.setupEventListeners();
    this.setupSmoothScrolling();
    this.updateThemeIcon();
    this.setupMobileMenu();
  }

  // Cookie Consent Management
  checkConsent() {
    // Check if user has already given or declined consent
    const consentStatus = localStorage.getItem('cookie-consent');
    
    if (!consentStatus) {
      this.showCookieConsent();
    } else {
      this.hasConsent = consentStatus === 'accepted';
      if (this.hasConsent) {
        this.loadThemePreference();
      }
    }
  }

  showCookieConsent() {
    const consentBanner = document.getElementById('cookie-consent');
    if (consentBanner) {
      consentBanner.style.display = 'block';
    }
  }

  hideCookieConsent() {
    const consentBanner = document.getElementById('cookie-consent');
    if (consentBanner) {
      consentBanner.style.display = 'none';
    }
  }

  acceptCookies() {
    this.hasConsent = true;
    localStorage.setItem('cookie-consent', 'accepted');
    this.hideCookieConsent();
    this.loadThemePreference();
  }

  declineCookies() {
    this.hasConsent = false;
    localStorage.setItem('cookie-consent', 'declined');
    this.hideCookieConsent();
    // Don't load theme preferences, use default
    this.applyTheme('light');
  }

  // Theme Management
  loadThemePreference() {
    if (!this.hasConsent) return;
    
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      this.applyTheme(this.currentTheme);
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    
    if (this.hasConsent) {
      localStorage.setItem('site-theme', this.currentTheme);
    }
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
      themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }

  // Event Listeners
  setupEventListeners() {
    // Cookie consent buttons
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => this.acceptCookies());
    }
    
    if (declineBtn) {
      declineBtn.addEventListener('click', () => this.declineCookies());
    }

    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.hasConsent && !localStorage.getItem('site-theme')) {
        this.currentTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
      }
    });
  }

  // Mobile Menu
  setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
        mobileToggle.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.classList.remove('mobile-active');
          mobileToggle.classList.remove('active');
        }
      });

      // Close menu when clicking on a link (mobile)
      const navLinks = navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            navMenu.classList.remove('mobile-active');
            mobileToggle.classList.remove('active');
          }
        });
      });
    }
  }

  // Smooth Scrolling Navigation
  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only handle anchor links (starting with #) on the same page
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const navHeight = document.querySelector('.main-nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
        // For other links (different pages), let them navigate normally
      });
    });
  }

  // Highlight active navigation link
  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('.main-nav')?.offsetHeight || 70;
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
}

// Navigation scroll effects
class NavigationEffects {
  constructor() {
    this.nav = document.querySelector('.main-nav');
    this.init();
  }

  init() {
    this.setupScrollEffects();
  }

  setupScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add shadow on scroll
      if (this.nav) {
        if (scrollTop > 10) {
          this.nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
          this.nav.style.boxShadow = 'none';
        }
      }
      
      lastScrollTop = scrollTop;
    });
  }
}

// Hero Actions (for download buttons etc.)
class HeroActions {
  constructor() {
    this.init();
  }

  init() {
    this.setupDownloadTracking();
    this.setupHeroAnimations();
  }

  setupDownloadTracking() {
    const downloadLinks = document.querySelectorAll('a[download]');
    downloadLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Track download if analytics is available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'download', {
            'file_name': link.getAttribute('href'),
            'file_type': 'pdf'
          });
        }
      });
    });
  }

  setupHeroAnimations() {
    // Smooth entrance animations for hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero-subtitle, .hero-description, .hero-actions');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    heroElements.forEach((element, index) => {
      // Initial state
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      
      observer.observe(element);
    });
  }
}

// Country Card Interactions
class CountryCards {
  constructor() {
    this.init();
  }

  init() {
    this.setupCardInteractions();
  }

  setupCardInteractions() {
    const cards = document.querySelectorAll('.country-card, .innovation-item, .finding-item');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
}

// Utility functions
class Utils {
  static formatCurrency(value, locale = 'fi-FI') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }

  static formatPercentage(value, decimals = 1) {
    return `${value.toFixed(decimals)}%`;
  }

  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Accessibility enhancements
class Accessibility {
  constructor() {
    this.init();
  }

  init() {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupARIA();
  }

  setupKeyboardNavigation() {
    // Escape key to close mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const mobileMenu = document.querySelector('.nav-menu.mobile-active');
        const mobileToggle = document.querySelector('.mobile-menu-toggle.active');
        
        if (mobileMenu && mobileToggle) {
          mobileMenu.classList.remove('mobile-active');
          mobileToggle.classList.remove('active');
        }
      }
    });
  }

  setupFocusManagement() {
    // Ensure focus is visible for keyboard users
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-navigation');
    });
  }

  setupARIA() {
    // Add ARIA labels to interactive elements that need them
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle && !themeToggle.getAttribute('aria-label')) {
      themeToggle.setAttribute('aria-label', 'Vaihda tumman ja vaalean teeman välillä');
    }

    // Mobile menu button
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-label', 'Avaa navigointivalikko');
      mobileToggle.setAttribute('aria-expanded', 'false');
      
      mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      });
    }
  }
}

// Performance monitoring
class Performance {
  constructor() {
    this.init();
  }

  init() {
    this.measurePageLoad();
    this.setupLazyLoading();
  }

  measurePageLoad() {
    window.addEventListener('load', () => {
      if ('performance' in window) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
        
        // Track to analytics if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            custom_parameter: 'milliseconds'
          });
        }
      }
    });
  }

  setupLazyLoading() {
    // Lazy load images if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const siteManager = new SiteManager();
  const navEffects = new NavigationEffects();
  const heroActions = new HeroActions();
  const countryCards = new CountryCards();
  const accessibility = new Accessibility();
  const performance = new Performance();
  
  // Update active nav link on scroll (throttled for performance)
  const throttledNavUpdate = Utils.throttle(() => {
    siteManager.updateActiveNavLink();
  }, 100);
  
  window.addEventListener('scroll', throttledNavUpdate);
  
  // Global error handling
  window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // Don't break the site for users, just log the error
  });
  
  // Make utilities globally available
  window.SiteUtils = Utils;
});

// Handle page visibility change (for better UX)
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Page became visible, check if theme needs updating
    const siteManager = window.siteManager;
    if (siteManager && siteManager.hasConsent) {
      siteManager.loadThemePreference();
    }
  }
});

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SiteManager, NavigationEffects, Utils, Accessibility };
}
