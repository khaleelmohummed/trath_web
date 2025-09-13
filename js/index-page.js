// Index page JavaScript functionality

// Initialize Bootstrap components
function initializeBootstrapComponents() {
    // Initialize Bootstrap tooltips and popovers
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Show welcome notification
function showWelcomeNotification() {
    setTimeout(() => {
        const message = window.languageSwitcher && window.languageSwitcher.getCurrentLanguage() === 'ar' 
            ? 'مرحباً بك في موقع التراث اليمني!' 
            : 'Welcome to Yemeni Heritage Website!';
        toastr.info(message);
    }, 2000);
}

// Initialize page when DOM is ready
$(document).ready(function() {
    initializeBootstrapComponents();
    showWelcomeNotification();
});

