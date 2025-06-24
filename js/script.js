// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const form = document.querySelector('form');
const currentYear = document.getElementById('current-year');
const skillMeters = document.querySelectorAll('.meter-bar');
const scrollLinks = document.querySelectorAll('a[href^="#"]');

// Theme Toggle
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
};

// Load saved theme
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
};

// Mobile Navigation Toggle
const toggleMobileNav = () => {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    primaryNav.classList.toggle('active');
    document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
};

// Tab Switching
const switchTab = (e) => {
    // Prevent default if it's a button click
    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();
    }
    
    const targetTab = e.target.dataset.tab;
    
    // Update active tab button
    tabButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.tab === targetTab) {
            button.classList.add('active');
        }
    });
    
    // Show corresponding content
    tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === targetTab) {
            content.classList.add('active');
        }
    });
};

// Form Submission
const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Show success state
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
            form.reset();
            
            // Reset button after delay
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitButton.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
        setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    }
};

// Animate skill meters when in view
const animateSkillMeters = () => {
    skillMeters.forEach(meter => {
        const level = meter.style.getPropertyValue('--level');
        meter.style.width = level;
    });
};

// Smooth scrolling for anchor links
const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (primaryNav.classList.contains('active')) {
            toggleMobileNav();
        }
    }
};

// Set current year in footer
const setCurrentYear = () => {
    const year = new Date().getFullYear();
    currentYear.textContent = year;
};

// Initialize Intersection Observer for animations
const initIntersectionObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special case for skill meters
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillMeters();
                }
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

// Initialize event listeners
const initEventListeners = () => {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile navigation toggle
    mobileNavToggle.addEventListener('click', toggleMobileNav);
    
    // Tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
    
    // Form submission
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Smooth scrolling
    scrollLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav.classList.contains('active')) {
                toggleMobileNav();
            }
        });
    });
};

// Initialize the app
const init = () => {
    loadTheme();
    setCurrentYear();
    initEventListeners();
    initIntersectionObserver();
};

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);