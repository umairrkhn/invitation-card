/* ========================================
   ENGAGEMENT INVITATION - MAIN JAVASCRIPT
   Uzair & Maisara | January 31st, 2026
   ======================================== */

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
    particleConfig: {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
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
                speed: 0.6,
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
    let hasOpened = false;
    
    overlay.addEventListener('click', openEnvelope);
    overlay.addEventListener('touchstart', openEnvelope, { passive: true });
    
    function openEnvelope(e) {
        if (hasOpened) return;
        hasOpened = true;
        
        overlay.classList.add('opening');
        
        // Animate overlay out
        gsap.to(overlay, {
            opacity: 0,
            duration: 1.2,
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
    
    // Set initial states - all hidden
    gsap.set('.decorative-top', { opacity: 0, scale: 0.5 });
    gsap.set('.family-intro', { opacity: 0, y: 20 });
    gsap.set('.pre-title', { opacity: 0, y: 20 });
    gsap.set('.event-title', { opacity: 0, y: 30 });
    gsap.set('.of-text', { opacity: 0 });
    gsap.set('.name-1', { opacity: 0, y: 40 });
    gsap.set('.ampersand', { opacity: 0, scale: 0 });
    gsap.set('.name-2', { opacity: 0, y: 40 });
    gsap.set('.elegant-divider', { opacity: 0, scale: 0 });
    gsap.set('.event-details', { opacity: 0, y: 20 });
    gsap.set('.blessing', { opacity: 0 });
    gsap.set('.footer-ornament', { opacity: 0, scale: 0 });
    
    // Main timeline - elegant, smooth reveal
    const tl = gsap.timeline({ 
        defaults: { ease: 'power2.out' },
        onComplete: () => {
            // Ensure all elements stay visible
            gsap.set(['.decorative-top', '.family-intro', '.pre-title', '.event-title', '.of-text', '.name-1', '.ampersand', '.name-2', '.elegant-divider', '.event-details', '.blessing', '.footer-ornament'], { opacity: 1 });
            
            // Trigger confetti
            createConfetti();
        }
    });
    
    // Slow, elegant reveal sequence
    tl.to('.decorative-top', {
        opacity: 1,
        scale: 1,
        duration: 1.2
    })
    .to('.family-intro', {
        opacity: 1,
        y: 0,
        duration: 1.2
    }, '-=0.6')
    .to('.pre-title', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.6')
    .to('.event-title', {
        opacity: 1,
        y: 0,
        duration: 1.4
    }, '-=0.5')
    .to('.of-text', {
        opacity: 1,
        duration: 0.8
    }, '-=0.6')
    .to('.name-1', {
        opacity: 1,
        y: 0,
        duration: 1.5
    }, '-=0.4')
    .to('.ampersand', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.2)'
    }, '-=1')
    .to('.name-2', {
        opacity: 1,
        y: 0,
        duration: 1.5
    }, '-=0.8')
    .to('.elegant-divider', {
        opacity: 0.8,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)'
    }, '-=0.6')
    .to('.event-details', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.4')
    .to('.blessing', {
        opacity: 1,
        duration: 1
    }, '-=0.5')
    .to('.footer-ornament', {
        opacity: 0.8,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)'
    }, '-=0.4');
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
    const confettiCount = 100;
    
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
    
    let startTime = Date.now();
    const duration = 3000;
    
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
            
            if (piece.y > canvas.height + 20) {
                piece.y = -20;
                piece.x = Math.random() * canvas.width;
            }
        });
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initOpeningAnimation();
});

// Handle window resize
window.addEventListener('resize', () => {
    if (elements.confettiCanvas) {
        elements.confettiCanvas.width = window.innerWidth;
        elements.confettiCanvas.height = window.innerHeight;
    }
});
