// Heritage Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and sections
            tabBtns.forEach(tab => tab.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding section
            const targetSection = document.getElementById(targetTab);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Gallery lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            createLightbox(this.src, this.alt);
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content cards and info cards
    const animatedElements = document.querySelectorAll('.content-card, .info-card, .decoration-item, .castle-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Parallax effect for page hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.page-hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Dynamic content loading animation
    setTimeout(() => {
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            activeSection.style.opacity = '1';
            activeSection.style.transform = 'translateY(0)';
        }
    }, 100);
});

// Create lightbox for images
function createLightbox(imageSrc, imageAlt) {
    // Remove existing lightbox
    const existingLightbox = document.querySelector('.lightbox');
    if (existingLightbox) {
        existingLightbox.remove();
    }
    
    // Create new lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="${imageAlt}">
            <span class="lightbox-close">&times;</span>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Show lightbox with animation
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    // Close lightbox functionality
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox(lightbox);
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox(lightbox);
        }
    });
}

// Close lightbox with animation
function closeLightbox(lightbox) {
    lightbox.classList.remove('active');
    setTimeout(() => {
        if (lightbox.parentNode) {
            lightbox.remove();
        }
    }, 300);
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
});

// Add search functionality for heritage content
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'ابحث في محتوى التراث...';
    searchInput.className = 'heritage-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 1rem;
        border: 2px solid var(--primary-color);
        border-radius: 25px;
        font-size: 1rem;
        margin: 1rem auto;
        display: block;
        background: var(--bg-card);
    `;
    
    const container = document.querySelector('.heritage-nav .container');
    if (container) {
        container.appendChild(searchInput);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const contentElements = document.querySelectorAll('.content-card, .info-card, .decoration-item, .castle-card');
            
            contentElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm) || searchTerm === '') {
                    element.style.display = 'block';
                    element.style.opacity = '1';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }
}

// Initialize search functionality
setTimeout(addSearchFunctionality, 1000);



// Additional heritage page functionality
$(document).ready(function() {
    // Show welcome notification for heritage pages
    const pageTitle = document.title;
    let welcomeMessage = 'مرحباً بك في صفحة التراث!';
    
    if (pageTitle.includes('Architectural')) {
        welcomeMessage = 'مرحباً بك في صفحة التراث المعماري!';
    } else if (pageTitle.includes('Cultural')) {
        welcomeMessage = 'مرحباً بك في صفحة التراث الثقافي والفني!';
    } else if (pageTitle.includes('Traditional Clothing')) {
        welcomeMessage = 'مرحباً بك في صفحة الأزياء التقليدية!';
    } else if (pageTitle.includes('Food')) {
        welcomeMessage = 'مرحباً بك في صفحة التراث الغذائي!';
    } else if (pageTitle.includes('Music')) {
        welcomeMessage = 'مرحباً بك في صفحة التراث الموسيقي!';
    }
    
    toastr.success(welcomeMessage, 'أهلاً وسهلاً');
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
});

