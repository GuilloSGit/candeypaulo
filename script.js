// Video Player System
class VideoPlayer {
    constructor() {
        this.modal = document.getElementById('videoModal');
        this.videoFrame = document.getElementById('videoFrame');
        this.videoTitle = document.getElementById('videoTitle');
        this.closeBtn = document.getElementById('closeVideoModal');
        
        this.videos = [
            { id: 'm9_mH2SMnNQ', title: 'Cande y Paulo – Tuyo' },
            { id: 'ZoxKkGpRbtk', title: 'Cande y Paulo: Tiny Desk (Home) Concert' },
            { id: 'GBwyswcHbmk', title: 'Cande y Paulo – Deja Atrás (San Juan Live Sessions)' },
            { id: 'RQ27QndY3SI', title: 'Meet Cande y Paulo' },
            { id: 'kZ-Ep8YQRdk', title: 'Cande y Paulo – Therefore I Am (Billie Eilish Cover)' },
            { id: 'VI1fXDvGJ_Q', title: 'Cande y Paulo – Limite En Tu Amor' },
            { id: '8371CuHpSJQ', title: 'Cande y Paulo – Treaty (San Juan Live Sessions)' },
            { id: 'Y08Y4LnYVWM', title: 'Treaty' },
            { id: 'a89svm9dSOg', title: 'Cande y Paulo – Barro Tal Vez Mahogany Home Edition' },
            { id: 'lmqDi00GmcI', title: 'Barro tal vez (Luis Alberto Spinetta)' },
            { id: 's_-1C82J0Io', title: 'Cande y Paulo – Barro Tal Vez' }
        ];
        
        this.init();
    }
    
    init() {
        // Setup event listeners for video cards
        this.setupVideoCards();
        
        // Setup modal controls
        this.setupModalControls();
    }
    
    setupVideoCards() {
        document.querySelectorAll('.video-card').forEach((card, index) => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const videoId = this.videos[index].id;
                const videoTitle = this.videos[index].title;
                this.openVideo(videoId, videoTitle);
            });
        });
    }
    
    setupModalControls() {
        this.closeBtn.addEventListener('click', () => this.closeModal());
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openVideo(videoId, title) {
        this.videoTitle.textContent = title;
        
        // Show modal first
        this.modal.style.display = 'flex';
        setTimeout(() => {
            this.modal.classList.add('active');
            
            // Load video with better parameters for embed compatibility
            setTimeout(() => {
                // Handle special cases like timestamps
                let embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=1&fs=1&iv_load_policy=3&cc_load_policy=1`;
                
                // For videos with timestamps or special requirements, add additional parameters
                if (videoId === 'GBwyswcHbmk') {
                    embedUrl += '&start=3'; // Start at 3 seconds for Deja Atrás
                }
                
                this.videoFrame.src = embedUrl;
                
                // Clear any previous error messages
                const existingErrors = this.modal.querySelectorAll('.video-error');
                existingErrors.forEach(el => el.remove());
                this.videoFrame.style.display = 'block';

                
                // Add error handling for iframe loading
                this.videoFrame.onerror = () => {
                    this.showVideoError(videoId, title);
                };
            }, 300);
        }, 10);
    }
    
    showVideoError(videoId, title) {
        // Show error message in modal
        this.videoFrame.style.display = 'none';
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'video-error';
        errorDiv.innerHTML = `
            <div class="error-content">
                <h3>Video no disponible</h3>
                <p>El video "${title}" no puede reproducirse en este sitio.</p>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn btn-primary">
                    Ver en YouTube
                </a>
            </div>
        `;
        
        // Insert error message after iframe
        this.videoFrame.parentNode.insertBefore(errorDiv, this.videoFrame.nextSibling);
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        setTimeout(() => {
            this.modal.style.display = 'none';
            // Stop video
            this.videoFrame.src = '';
            
            // Remove any error messages
            const errorElements = this.modal.querySelectorAll('.video-error');
            errorElements.forEach(el => el.remove());
            
            // Show iframe again
            this.videoFrame.style.display = 'block';
        }, 300);
    }
}
class SparkleCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'sparkle-cursor';
        document.body.appendChild(this.cursor);
        
        this.lastSparkleTime = 0;
        this.sparkleDelay = 6; // Reduced sparkles by 20% (from 5 to 6)
        
        this.init();
    }
    
    init() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        document.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        
        // Add sparkle effect to buttons on hover
        this.addButtonSparkleEffects();
    }
    
    addButtonSparkleEffects() {
        // Get all buttons and links except menu buttons
        const interactiveElements = document.querySelectorAll('a:not(.menu-btn):not(.nav-content a):not(.lang-option):not(.dropdown-toggle), button:not(.menu-btn), .btn');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.createButtonSparkles(e.target);
            });
            
            element.addEventListener('click', (e) => {
                this.createButtonSparkles(e.target, true);
            });
        });
    }
    
    createButtonSparkles(element, isClick = false) {
        const rect = element.getBoundingClientRect();
        const sparkleCount = isClick ? 15 : 8; // More sparkles on click
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'button-sparkle';
                
                // Random position within the button bounds
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                
                sparkle.style.left = x + 'px';
                sparkle.style.top = y + 'px';
                
                // Random size and color
                const size = Math.random() * 8 + 4;
                sparkle.style.width = size + 'px';
                sparkle.style.height = size + 'px';
                
                const colors = [
                    'radial-gradient(circle, #ffffff 0%, #d4af37 30%, transparent 70%)',
                    'radial-gradient(circle, #fff8dc 0%, #ffd700 40%, transparent 75%)',
                    'radial-gradient(circle, #fafad2 0%, #f0e68c 35%, transparent 80%)'
                ];
                sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                document.body.appendChild(sparkle);
                
                // Remove sparkle after animation
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }, i * (isClick ? 20 : 50));
        }
    }
    
    handleMouseMove(e) {
        this.cursor.style.left = e.clientX - 30 + 'px';
        this.cursor.style.top = e.clientY - 30 + 'px';
        
        const currentTime = Date.now();
        if (currentTime - this.lastSparkleTime > this.sparkleDelay) {
            // Debug: Check if we're in contact section
            const contactSection = document.getElementById('contact');
            const isInContact = contactSection && contactSection.classList.contains('active');
            
            // Create fewer sparkles with circular distribution
            const sparkleCount = 3; // Reduced from 8 to 3
            for (let i = 0; i < sparkleCount; i++) {
                setTimeout(() => {
                    this.createSparkle(e.clientX, e.clientY);
                }, i * 3);
            }
            this.lastSparkleTime = currentTime;
        }
    }
    
    handleTouchMove(e) {
        const touch = e.touches[0];
        this.cursor.style.left = touch.clientX - 30 + 'px';
        this.cursor.style.top = touch.clientY - 30 + 'px';
        
        const currentTime = Date.now();
        if (currentTime - this.lastSparkleTime > this.sparkleDelay) {
            const sparkleCount = 3; // Same as mouse
            for (let i = 0; i < sparkleCount; i++) {
                setTimeout(() => {
                    this.createSparkle(touch.clientX, touch.clientY);
                }, i * 3);
            }
            this.lastSparkleTime = currentTime;
        }
    }
    
    createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Circular distribution with distance-based probability
        const maxRadius = 80; // Reduced from 200
        const angle = Math.random() * Math.PI * 2;
        
        // Higher probability for sparkles closer to center
        const distance = Math.random() * Math.sqrt(Math.random()) * maxRadius;
        
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;
        
        sparkle.style.left = x + offsetX + 'px';
        sparkle.style.top = y + offsetY + 'px';
        
        // Smaller, more subtle sparkles
        const size = Math.random() * 4 + 1; // 1-5px instead of 2-8px
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        // More color variations with better gradients
        const colors = [
            'radial-gradient(circle, #ffffff 0%, #d4af37 20%, transparent 60%)',
            'radial-gradient(circle, #fff8dc 0%, #ffd700 25%, transparent 65%)',
            'radial-gradient(circle, #fafad2 0%, #f0e68c 30%, transparent 70%)',
            'radial-gradient(circle, #ffebcd 0%, #daa520 25%, transparent 65%)',
            'radial-gradient(circle, #ffffff 0%, #ffdf00 20%, transparent 60%)'
        ];
        sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation - increased duration
        setTimeout(() => {
            sparkle.remove();
        }, 2500); // Increased from 1500 to 2500
    }
}

// Language System
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.dropdownTimeout = null;
        this.translations = {
            en: {
                pageTitle: 'Cande y Paulo - Official Site',
                htmlLang: 'en'
            },
            es: {
                pageTitle: 'Cande y Paulo - Sitio Oficial',
                htmlLang: 'es'
            },
            pt: {
                pageTitle: 'Cande y Paulo - Site Oficial',
                htmlLang: 'pt'
            }
        };
        this.init();
    }
    
    detectLanguage() {
        // Check localStorage first
        const saved = localStorage.getItem('candeypaulo-lang');
        if (saved && ['en', 'es', 'pt'].includes(saved)) return saved;
        
        // Check browser language - prioritize English
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'en') return 'en';
        if (['es', 'pt'].includes(browserLang)) return browserLang;
        
        // Default to English
        return 'en';
    }
    
    init() {
        // Set initial language
        this.setLanguage(this.currentLang);
        
        // Add click handlers to language options in dropdown
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
        
        // Handle dropdown hover behavior
        const dropdown = document.querySelector('.language-dropdown');
        const menu = document.querySelector('.dropdown-menu');
        
        if (dropdown && menu) {
            dropdown.addEventListener('mouseenter', () => {
                clearTimeout(this.dropdownTimeout);
                menu.style.display = 'block';
                setTimeout(() => {
                    menu.style.opacity = '1';
                    menu.style.visibility = 'visible';
                }, 10);
            });
            
            dropdown.addEventListener('mouseleave', () => {
                this.dropdownTimeout = setTimeout(() => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    setTimeout(() => {
                        menu.style.display = 'none';
                    }, 300);
                }, 200);
            });
            
            menu.addEventListener('mouseenter', () => {
                clearTimeout(this.dropdownTimeout);
            });
            
            menu.addEventListener('mouseleave', () => {
                this.dropdownTimeout = setTimeout(() => {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    setTimeout(() => {
                        menu.style.display = 'none';
                    }, 300);
                }, 200);
            });
        }
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        
        // Save to localStorage
        localStorage.setItem('candeypaulo-lang', lang);
        
        // Update page title and HTML lang
        document.title = this.translations[lang].pageTitle;
        document.documentElement.lang = this.translations[lang].htmlLang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(element => {
            const translation = element.dataset[lang];
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update dropdown menu items to show current language
        document.querySelectorAll('.lang-option').forEach(option => {
            option.style.fontWeight = option.dataset.lang === lang ? '600' : '300';
            option.style.color = option.dataset.lang === lang ? 'var(--gold)' : 'var(--white)';
        });
    }
}

// Navigation functionality
const menuBtns = document.querySelectorAll('.menu-btn');
const navOverlay = document.getElementById('navOverlay');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-content a');

// Initialize sparkle cursor and language manager
const sparkleCursor = new SparkleCursor();
const languageManager = new LanguageManager();

// Toggle menu for all menu buttons
menuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navOverlay.classList.toggle('active');
    });
});

// Close menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        navOverlay.classList.remove('active');
    });
});

// Close menu when clicking outside
navOverlay.addEventListener('click', (e) => {
    if (e.target === navOverlay) {
        navOverlay.classList.remove('active');
    }
});

// Show specific section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Update URL without page reload
        history.pushState(null, null, '#' + sectionId);
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home');
    }
});

// Handle initial page load with hash
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home');
    }
});

// Initialize with home section if no hash
if (!window.location.hash) {
    showSection('home');
}

// Handle contact form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
                
        // Show success message
        alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
        
        // Reset form
        contactForm.reset();
    });
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add parallax effect to hero title
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroTitle = document.querySelector('.hero-title h1');
    if (heroTitle) {
        heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add hover effects to cards
const cards = document.querySelectorAll('.music-card, .video-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
        navOverlay.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
    new SparkleCursor();
    
    // Initialize EmailJS
    (function() {
        // EmailJS configuration with Public Key
        emailjs.init("m81W5h9xLDrcWpBO9");
    })();
    
    // Handle contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
});

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Get form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };
    
    // Send email using EmailJS with configured credentials
    emailjs.send('service_1713pas', 'template_sibhhwd', formData)
        .then(function(response) {
            // Show success message
            messageDiv.innerHTML = '<div class="success-message"  data-en="Message sent successfully! We\'ll get back to you soon." data-es="Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto." data-pt="Mensagem enviada com sucesso! Entraremos em contato com você em breve.">Message sent successfully! We\'ll get back to you soon.</div>';
            messageDiv.className = 'form-message success';
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.innerHTML = '';
                messageDiv.className = 'form-message';
            }, 5000);
            
        }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            messageDiv.innerHTML = '<div class="error-message" data-en="Failed to send message. Please try again or contact us directly." data-es="Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctanos directamente." data-pt="Falha ao enviar a mensagem. Por favor, tente novamente ou entre em contato diretamente.">Failed to send message. Please try again or contact us directly.</div>';
            messageDiv.className = 'form-message error';
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.innerHTML = '';
                messageDiv.className = 'form-message';
            }, 5000);
        });
}

// Mobile menu handling
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Add dynamic year to footer if needed
const currentYear = new Date().getFullYear();

// Performance optimization - lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add console welcome message
console.log('%c🎵 Cande y Paulo - Sitio Oficial', 'color: #d4af37; font-size: 15px; font-weight: bold;');
console.log('%cBienvenidos al sitio oficial del dúo musical', 'color: #ffffff; font-size: 14px;');
console.log('%cCreado por Guillermo Andrada', 'color: #d4af37; font-size: 12px;');
console.log('https://ga-software.dev - guillermoandrada@gmail.com');
