// Login page JavaScript functionality

// Login form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Language switcher for login page
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('lang-switch-login')) {
            const lang = e.target.dataset.lang;
            
            // Update active state
            document.querySelectorAll('.lang-switch-login').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Switch language
            if (window.languageSwitcher) {
                window.languageSwitcher.switchLanguage(lang);
            }
        }
    });
    
    // Form validation functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePassword(password) {
        return password.length >= 6;
    }
    
    function showFieldError(field, message) {
        field.classList.add('is-invalid');
        field.classList.remove('is-valid');
        const feedback = field.parentNode.querySelector('.invalid-feedback');
        if (feedback) {
            feedback.textContent = message;
        }
    }
    
    function showFieldSuccess(field) {
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
    }
    
    function clearFieldValidation(field) {
        field.classList.remove('is-valid', 'is-invalid');
    }
    
    // Real-time validation
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        if (!email) {
            showFieldError(this, 'البريد الإلكتروني مطلوب');
        } else if (!validateEmail(email)) {
            showFieldError(this, 'يرجى إدخال بريد إلكتروني صحيح');
        } else {
            showFieldSuccess(this);
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
            const email = this.value.trim();
            if (email && validateEmail(email)) {
                showFieldSuccess(this);
            } else if (email) {
                showFieldError(this, 'يرجى إدخال بريد إلكتروني صحيح');
            } else {
                clearFieldValidation(this);
            }
        }
    });
    
    passwordInput.addEventListener('blur', function() {
        const password = this.value;
        if (!password) {
            showFieldError(this, 'كلمة المرور مطلوبة');
        } else if (!validatePassword(password)) {
            showFieldError(this, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
        } else {
            showFieldSuccess(this);
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
            const password = this.value;
            if (password && validatePassword(password)) {
                showFieldSuccess(this);
            } else if (password) {
                showFieldError(this, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            } else {
                clearFieldValidation(this);
            }
        }
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        let isValid = true;
        
        // Validate email
        if (!email) {
            showFieldError(emailInput, 'البريد الإلكتروني مطلوب');
            isValid = false;
        } else if (!validateEmail(email)) {
            showFieldError(emailInput, 'يرجى إدخال بريد إلكتروني صحيح');
            isValid = false;
        } else {
            showFieldSuccess(emailInput);
        }
        
        // Validate password
        if (!password) {
            showFieldError(passwordInput, 'كلمة المرور مطلوبة');
            isValid = false;
        } else if (!validatePassword(password)) {
            showFieldError(passwordInput, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            isValid = false;
        } else {
            showFieldSuccess(passwordInput);
        }
        
        if (isValid) {
            // Simulate login process
            const submitBtn = this.querySelector('.login-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'جاري تسجيل الدخول...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'ar';
                const successMessage = currentLang === 'ar' 
                    ? 'تم تسجيل الدخول بنجاح!' 
                    : 'Login successful!';
                
                toastr.success(successMessage);
                
                // Reset form
                this.reset();
                clearFieldValidation(emailInput);
                clearFieldValidation(passwordInput);
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Redirect after 2 seconds
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }, 1500);
        }
    });
});

