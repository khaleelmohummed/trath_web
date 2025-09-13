// Modal functionality with Ajax support
class Modal {
    constructor(modalId, options = {}) {
        this.modal = document.getElementById(modalId);
        this.options = {
            backdrop: options.backdrop !== false,
            keyboard: options.keyboard !== false,
            focus: options.focus !== false,
            ...options
        };
        
        this.init();
    }
    
    init() {
        if (!this.modal) return;
        
        this.setupEventListeners();
        this.createBackdrop();
    }
    
    setupEventListeners() {
        // Close button
        const closeButtons = this.modal.querySelectorAll('[data-dismiss="modal"]');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.hide());
        });
        
        // Escape key
        if (this.options.keyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isVisible()) {
                    this.hide();
                }
            });
        }
        
        // Backdrop click
        if (this.options.backdrop) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hide();
                }
            });
        }
    }
    
    createBackdrop() {
        if (!this.modal.querySelector('.modal-backdrop')) {
            const backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop';
            this.modal.appendChild(backdrop);
        }
    }
    
    show() {
        this.modal.style.display = 'block';
        this.modal.classList.add('show');
        document.body.classList.add('modal-open');
        
        if (this.options.focus) {
            this.modal.focus();
        }
        
        // Trigger show event
        this.modal.dispatchEvent(new CustomEvent('modal:show'));
    }
    
    hide() {
        this.modal.classList.remove('show');
        
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }, 300);
        
        // Trigger hide event
        this.modal.dispatchEvent(new CustomEvent('modal:hide'));
    }
    
    isVisible() {
        return this.modal.classList.contains('show');
    }
    
    // Load content via Ajax
    loadContent(url, callback) {
        const modalBody = this.modal.querySelector('.modal-body');
        if (!modalBody) return;
        
        // Show loading
        modalBody.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="sr-only">جاري التحميل...</span></div></div>';
        
        fetch(url)
            .then(response => response.text())
            .then(html => {
                modalBody.innerHTML = html;
                if (callback) callback();
            })
            .catch(error => {
                modalBody.innerHTML = '<div class="alert alert-danger">حدث خطأ في تحميل المحتوى</div>';
                console.error('Error loading modal content:', error);
            });
    }
}

// Global modal functions
window.showModal = function(modalId, ajaxUrl = null) {
    const modal = new Modal(modalId);
    
    if (ajaxUrl) {
        modal.loadContent(ajaxUrl, () => {
            modal.show();
        });
    } else {
        modal.show();
    }
};

window.hideModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }, 300);
    }
};

// Initialize modals when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Auto-initialize modals
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        new Modal(modal.id);
    });
    
    // Handle modal triggers
    const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetModal = this.getAttribute('data-target');
            const ajaxUrl = this.getAttribute('data-ajax-url');
            
            if (targetModal) {
                showModal(targetModal.replace('#', ''), ajaxUrl);
            }
        });
    });
});

