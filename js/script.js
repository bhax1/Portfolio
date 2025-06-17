// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('.header');
const yearSpan = document.getElementById('year');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const journeyTabs = document.querySelectorAll('.journey-tab');
const journeyContents = document.querySelectorAll('.journey-content');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const skillProgressCircles = document.querySelectorAll('.progress-fill');
const form = document.querySelector('form');

// Theme Toggle
const toggleTheme = () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.innerHTML = isDark 
        ? '<i class="fas fa-moon" aria-hidden="true"></i>' 
        : '<i class="fas fa-sun" aria-hidden="true"></i>';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
};

// Load saved theme
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' 
        ? '<i class="fas fa-sun" aria-hidden="true"></i>' 
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
};

// Mobile Menu Toggle
const toggleMobileMenu = () => {
    navList.classList.toggle('active');
    mobileMenuBtn.innerHTML = navList.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
};

// Tab Switching
const switchTab = (e) => {
    // Remove active class from all buttons and contents
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Show corresponding content
    const tabId = e.target.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
};

// Journey Tab Switching
const switchJourneyTab = (e) => {
    // Remove active class from all buttons and contents
    journeyTabs.forEach(btn => btn.classList.remove('active'));
    journeyContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    // Show corresponding content
    const tabId = e.target.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
};

// Animate skill bars on scroll
const animateSkills = () => {
    skillProgressBars.forEach(bar => {
        const percent = bar.parentElement.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });
    
    skillProgressCircles.forEach(circle => {
        const percent = circle.parentElement.parentElement.getAttribute('data-percent');
        circle.style.strokeDashoffset = `calc(220 - (220 * ${percent}) / 100)`;
    });
};

// Form submission
const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
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
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
        setTimeout(() => {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }, 2000);
    }
};

// Header scroll effect
const handleScroll = () => {
    // Header shadow effect
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

// Initialize skill animations when they come into view
const initSkillAnimations = () => {
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(skillsSection);
};

// Set current year
const setCurrentYear = () => {
    yearSpan.textContent = new Date().getFullYear();
};

// Smooth scrolling for anchor links
const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navList.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
};

// Initialize animations when elements come into view
const initScrollAnimations = () => {
    const animateElements = document.querySelectorAll('.animate, .animate__animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
};

// Initialize
const init = () => {
    loadTheme();
    setCurrentYear();
    initSmoothScrolling();
    initScrollAnimations();
    initSkillAnimations();
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    window.addEventListener('scroll', handleScroll);
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', switchTab);
    });
    
    journeyTabs.forEach(tab => {
        tab.addEventListener('click', switchJourneyTab);
    });
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', init);