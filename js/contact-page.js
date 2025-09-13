// Contact page JavaScript functionality

// Contact form validation and submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        toastr.error(languageData[currentLanguage].fill_all_fields);
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        toastr.error(languageData[currentLanguage].enter_valid_email);
        return;
    }
    
    // Simulate form submission
    toastr.success(languageData[currentLanguage].message_sent_success);
    this.reset();
});

// Initialize language on page load
document.addEventListener("DOMContentLoaded", function() {
    loadLanguage();
});

// Language toggle button
document.getElementById("language-toggle").addEventListener("click", function() {
    toggleLanguage();
});

