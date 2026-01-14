/* ========================================
   ENGAGEMENT INVITATION - MAIN JAVASCRIPT
   Uzair & Maisara | January 31st, 2026
   ======================================== */

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
    eventDate: new Date('2026-01-31T19:00:00').getTime(),
    particleConfig: {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: ["#d4af37", "#f0d77a", "#b8962e"] },
            shape: { type: "circle" },
            opacity: { 
                value: 0.5, 
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: { 
                value: 3, 
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false }
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true
            },
            modes: {
                grab: { distance: 140, links: { opacity: 0.3, color: "#d4af37" } }
            }
        },
        background: { color: "transparent" },
        detectRetina: true
    }
};

// ========================================
// DOM ELEMENTS
// ========================================
const elements = {
    overlay: document.getElementById('openingOverlay'),
    mainContent: document.getElementById('mainContent'),
    countdown: {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    },
    rsvpButton: document.getElementById('rsvpButton'),
    rsvpConfirmed: document.getElementById('rsvpConfirmed'),
    confettiCanvas: document.getElementById('confettiCanvas')
};

// ========================================
// PARTICLES INITIALIZATION
// ========================================
async function initParticles() {
    try {
        await tsParticles.load("particles-js", CONFIG.particleConfig);
    } catch (error) {
        console.warn('Particles failed to load:', error);
    }
}

// ========================================
// OPENING ANIMATION
// ========================================
function initOpeningAnimation() {
    const overlay = elements.overlay;
    
    overlay.addEventListener('click', openEnvelope);
    overlay.addEventListener('touchstart', openEnvelope, { passive: true });
    
    function openEnvelope() {
        overlay.classList.add('opening');
        
        // Animate overlay out
        gsap.to(overlay, {
            opacity: 0,
            duration: 1,
            delay: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                overlay.style.display = 'none';
                revealContent();
            }
        });
    }
}

// ========================================
// CONTENT REVEAL ANIMATION
// ========================================
function revealContent() {
    const content = elements.mainContent;
    content.classList.add('visible');
    
    // Main timeline for hero section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.decorative-top', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8
    })
    .to('.decorative-top', {
        opacity: 1,
        duration: 0.5
    }, '<')
    .from('.pre-title', {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, '-=0.3')
    .to('.pre-title', {
        opacity: 1,
        duration: 0.5
    }, '<')
    .from('.name-1', {
        opacity: 0,
        y: 50,
        duration: 0.8
    }, '-=0.2')
    .to('.name-1', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '<')
    .from('.ampersand', {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.6
    }, '-=0.4')
    .to('.ampersand', {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6
    }, '<')
    .from('.name-2', {
        opacity: 0,
        y: 50,
        duration: 0.8
    }, '-=0.3')
    .to('.name-2', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '<')
    .from('.invitation-message', {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, '-=0.4')
    .to('.invitation-message', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '<')
    .from('.decorative-divider', {
        opacity: 0,
        scale: 0,
        duration: 0.5
    }, '-=0.3')
    .to('.decorative-divider', {
        opacity: 1,
        scale: 1,
        duration: 0.5
    }, '<');
    
    // Initialize scroll animations after reveal
    initScrollAnimations();
}

// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================
function initScrollAnimations() {
    // Detail cards
    gsap.utils.toArray('.detail-card').forEach((card, i) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Countdown title
    gsap.to('.countdown-title', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.countdown-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Countdown items
    gsap.utils.toArray('.countdown-item').forEach((item, i) => {
        gsap.to(item, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.countdown-timer',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // RSVP section
    gsap.to('.rsvp-title', {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.rsvp-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.to('.rsvp-button', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.rsvp-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Footer
    gsap.to('.invitation-footer', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.invitation-footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        }
    });
}

// ========================================
// COUNTDOWN TIMER
// ========================================
function updateCountdown() {
    const now = Date.now();
    const distance = CONFIG.eventDate - now;
    
    if (distance < 0) {
        // Event has started or passed
        elements.countdown.days.textContent = '00';
        elements.countdown.hours.textContent = '00';
        elements.countdown.minutes.textContent = '00';
        elements.countdown.seconds.textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    elements.countdown.days.textContent = String(days).padStart(2, '0');
    elements.countdown.hours.textContent = String(hours).padStart(2, '0');
    elements.countdown.minutes.textContent = String(minutes).padStart(2, '0');
    elements.countdown.seconds.textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========================================
// CONFETTI EFFECT
// ========================================
function createConfetti() {
    const canvas = elements.confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#d4af37', '#f0d77a', '#b8962e', '#722f37', '#faf8f5'];
    const confettiCount = 150;
    
    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 3 + 2,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.2,
            opacity: 1
        });
    }
    
    let animationFrame;
    let startTime = Date.now();
    const duration = 4000; // 4 seconds
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.y += piece.speed;
            piece.angle += piece.spin;
            piece.opacity = 1 - (progress * 0.5);
            
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.angle);
            ctx.globalAlpha = piece.opacity;
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
            ctx.restore();
            
            // Reset if off screen
            if (piece.y > canvas.height + 20) {
                piece.y = -20;
                piece.x = Math.random() * canvas.width;
            }
        });
        
        if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ========================================
// RSVP BUTTON HANDLER
// ========================================
function initRSVP() {
    const button = elements.rsvpButton;
    const confirmed = elements.rsvpConfirmed;
    
    button.addEventListener('click', () => {
        // Add click animation
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                button.classList.add('hidden');
                confirmed.classList.add('visible');
                createConfetti();
            }
        });
    });
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initOpeningAnimation();
    startCountdown();
    initRSVP();
});

// Handle window resize for particles
window.addEventListener('resize', () => {
    if (elements.confettiCanvas) {
        elements.confettiCanvas.width = window.innerWidth;
        elements.confettiCanvas.height = window.innerHeight;
    }
});
