// Image Slider (WowSlider alternative)
class ImageSlider {
    constructor(container, options = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.autoPlay = options.autoPlay !== false;
        this.interval = options.interval || 3000;
        this.showDots = options.showDots !== false;
        this.showArrows = options.showArrows !== false;
        
        this.init();
    }
    
    init() {
        this.createControls();
        this.setupEventListeners();
        if (this.autoPlay) {
            this.startAutoPlay();
        }
        this.showSlide(0);
    }
    
    createControls() {
        // Create arrows
        if (this.showArrows) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'slider-arrow slider-prev';
            prevBtn.innerHTML = '&#8249;';
            
            const nextBtn = document.createElement('button');
            nextBtn.className = 'slider-arrow slider-next';
            nextBtn.innerHTML = '&#8250;';
            
            this.container.appendChild(prevBtn);
            this.container.appendChild(nextBtn);
        }
        
        // Create dots
        if (this.showDots) {
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'slider-dots';
            
            for (let i = 0; i < this.slides.length; i++) {
                const dot = document.createElement('button');
                dot.className = 'slider-dot';
                dot.dataset.slide = i;
                dotsContainer.appendChild(dot);
            }
            
            this.container.appendChild(dotsContainer);
        }
    }
    
    setupEventListeners() {
        // Arrow navigation
        const prevBtn = this.container.querySelector('.slider-prev');
        const nextBtn = this.container.querySelector('.slider-next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Dot navigation
        const dots = this.container.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.container.addEventListener('mouseleave', () => this.resumeAutoPlay());
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        this.slides[index].classList.add('active');
        
        // Update dots
        const dots = this.container.querySelectorAll('.slider-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.interval);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
        }
    }
    
    resumeAutoPlay() {
        if (this.autoPlay) {
            this.startAutoPlay();
        }
    }
}

// Initialize sliders when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main hero slider
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        new ImageSlider('.hero-slider', {
            autoPlay: true,
            interval: 4000,
            showDots: true,
            showArrows: true
        });
    }
    
    // Initialize gallery sliders
    const gallerySliders = document.querySelectorAll('.gallery-slider');
    gallerySliders.forEach(slider => {
        new ImageSlider(`#${slider.id}`, {
            autoPlay: true,
            interval: 3000,
            showDots: true,
            showArrows: true
        });
    });
});

