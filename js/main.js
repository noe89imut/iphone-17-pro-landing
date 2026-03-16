/**
 * iPhone 17 Pro Landing Page - Main JavaScript
 * GSAP-powered scroll-triggered animations
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all animations
    initAnimations();
});

/**
 * Initialize all page animations
 */
function initAnimations() {
    // Hero section animations (already handled by CSS)
    initHeroAnimations();

    // Navigation scroll effect
    initNavigationScroll();

    // Scroll-reveal animations for all sections
    initScrollReveals();

    // Camera section animations
    initCameraSection();

    // Chip section animations
    initChipSection();

    // Battery section animations
    initBatterySection();

    // Color cards animations
    initColorCards();

    // Parallax effects
    initParallaxEffects();

    // Smooth scroll for navigation links
    initSmoothScroll();
}

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
    const hero = document.querySelector('#hero');
    
    if (hero) {
        // Staggered fade-in for elements
        gsap.from(hero.querySelectorAll('h1, p'), {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.5
        });

        // iPhone mockup entrance
        gsap.from(hero.querySelector('.aspect-\[9\/16\]'), {
            opacity: 0,
            y: 100,
            scale: 0.8,
            duration: 1.2,
            ease: 'elastic.out(1, 0.5)',
            delay: 1
        });

        // Color options entrance
        gsap.from(hero.querySelectorAll('.w-8.h-8'), {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            delay: 1.5
        });

        // Price text entrance
        gsap.from(hero.querySelector('p.text-gray-400'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out',
            delay: 1.8
        });
    }
}

/**
 * Navigation Scroll Effect
 */
function initNavigationScroll() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

/**
 * Scroll-Reveal Animations for all elements
 */
function initScrollReveals() {
    const reveals = document.querySelectorAll('.scroll-reveal');

    reveals.forEach((element, index) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        // Add active class for CSS transitions
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => element.classList.add('active'),
            onLeaveBack: () => element.classList.remove('active')
        });
    });
}

/**
 * Camera Section Animations
 */
function initCameraSection() {
    const cameraSection = document.querySelector('#camera');
    
    if (cameraSection) {
        // Animate camera feature cards
        gsap.from(cameraSection.querySelectorAll('.scroll-reveal.delay-\\d+'), {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: cameraSection,
                start: 'top 75%'
            }
        });

        // Zoom levels animation
        const zoomLevels = cameraSection.querySelector('.flex.flex-wrap');
        if (zoomLevels) {
            gsap.from(zoomLevels.querySelectorAll('span'), {
                opacity: 0,
                scale: 0.5,
                duration: 0.6,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: zoomLevels,
                    start: 'top 80%'
                }
            });
        }
    }
}

/**
 * Chip Section Animations
 */
function initChipSection() {
    const chipSection = document.querySelector('#chip');
    
    if (chipSection) {
        // Chip visualization entrance
        const chipVis = chipSection.querySelector('.aspect-square');
        if (chipVis) {
            gsap.from(chipVis, {
                opacity: 0,
                scale: 0.5,
                rotation: 180,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: chipSection,
                    start: 'top 70%'
                }
            });

            // Add glow effect on scroll
            ScrollTrigger.create({
                trigger: chipVis,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => chipVis.classList.add('glow'),
                onLeaveBack: () => chipVis.classList.remove('glow')
            });
        }

        // Performance stats entrance
        gsap.from(chipSection.querySelectorAll('.text-center.p-6'), {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: chipSection,
                start: 'top 75%'
            }
        });

        // Number counter animation
        const numbers = chipSection.querySelectorAll('.text-4xl.font-bold');
        numbers.forEach((num, index) => {
            const targetValue = num.textContent;
            
            gsap.to(num, {
                innerHTML: parseFloat(targetValue.replace(/%/g, '')),
                duration: 2,
                snap: { innerHTML: 0.1 },
                scrollTrigger: {
                    trigger: num,
                    start: 'top 85%',
                    once: true
                }
            });
        });
    }
}

/**
 * Battery Section Animations
 */
function initBatterySection() {
    const batterySection = document.querySelector('#battery');
    
    if (batterySection) {
        // Battery icon entrance
        const batteryIcon = batterySection.querySelector('.w-32.h-48');
        if (batteryIcon) {
            gsap.from(batteryIcon, {
                opacity: 0,
                x: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: batterySection,
                    start: 'top 75%'
                }
            });

            // Animate battery fill
            const batteryFill = batteryIcon.querySelector('.bg-gradient-to-b');
            if (batteryFill) {
                gsap.to(batteryFill, {
                    height: '85%',
                    duration: 2,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: batterySection,
                        start: 'top 70%'
                    }
                });
            }
        }

        // Battery cards entrance
        gsap.from(batterySection.querySelectorAll('.bg-black.rounded-3xl'), {
            opacity: 0,
            x: -50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: batterySection,
                start: 'top 70%'
            }
        });

        // Battery cards entrance (right side)
        gsap.from(batterySection.querySelectorAll('.bg-black.rounded-3xl'), {
            opacity: 0,
            x: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: batterySection,
                start: 'top 70%'
            }
        });
    }
}

/**
 * Color Cards Animations
 */
function initColorCards() {
    const colorsSection = document.querySelector('#colors');
    
    if (colorsSection) {
        // Color cards entrance with stagger
        gsap.from(colorsSection.querySelectorAll('.group'), {
            opacity: 0,
            y: 60,
            scale: 0.9,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: colorsSection,
                start: 'top 75%'
            }
        });

        // Add hover effect enhancement
        const colorCards = colorsSection.querySelectorAll('.group');
        colorCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card.querySelector('div'), {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card.querySelector('div'), {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

/**
 * Parallax Effects
 */
function initParallaxEffects() {
    // Subtle parallax for background elements
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.to(section, {
            y: (i) => -100 * i,
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Parallax for hero background
    const hero = document.querySelector('#hero');
    if (hero) {
        gsap.to(hero, {
            yPercent: 20,
            scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy Loading Images (if added later)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Performance Optimization - Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize lazy loading on page load
 */
window.addEventListener('load', initLazyLoading);

// Log initialization
console.log('iPhone 17 Pro Landing Page initialized with GSAP animations');
