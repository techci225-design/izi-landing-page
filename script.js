document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const icon = mobileMenuBtn.querySelector('ion-icon');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            icon.setAttribute('name', 'close-outline');
        } else {
            icon.setAttribute('name', 'menu-outline');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.setAttribute('name', 'menu-outline');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.fade-in, .fade-up, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Contact Modal Logic
    const contactModal = document.getElementById('contact-modal');
    const modalClose = document.querySelector('.modal-close');
    const contactButtons = document.querySelectorAll('.header .btn-primary, .pricing-card a');

    if (contactModal) {
        contactButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                contactModal.classList.add('active');
            });
        });

        modalClose.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });

        // Close when clicking outside the modal content
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });

        // Form submission simulation
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Merci ! Votre demande a été envoyée avec succès.');
                contactModal.classList.remove('active');
                contactForm.reset();
            });
        }
    }
});
