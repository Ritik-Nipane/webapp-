// ================================
// VALENTINE'S DAY WEBSITE SCRIPTS
// ================================

// ================================
// CONFIGURATION SECTION
// Edit these values to customize your website!
// ================================

// Letter content - Edit this text to personalize your message
const LETTER_TEXT = `I don't know what the future holds exactly Harshita(radhee)...

But I know I want to experience it with you.

Not in a rush.
Not with pressure.

Just... happily.

Every day with you feels like a gift.
Every laugh, every moment, every little thing.

I'm just really happy we found each other.

And I can't wait for all the adventures waiting for us. 💕`;

// Gallery data - Add your own photos here!
// To add photos:
// 1. Upload your images to the /public/static/ folder
// 2. Update the paths below (e.g., '/static/photo1.jpg')
// 3. Add captions and descriptions
const GALLERY_DATA = [
    {
        image: '/static/Images/9.jpeg',
        caption: 'Our First Date',
        description: 'The day everything started ❤️'
    },
    {
        image: '/static/Images/6.jpeg',
        caption: 'Sunset Together',
        description: 'Watching the sky change colors'
    },
    {
        image: '/static/Images/10.jpeg',
        caption: 'Mandir Date',
        description: 'Hamari pehli date, wo bhi Radhe aur Krishna ji ke mandir mein ❤️'
    },
    {
        image: '/static/Images/7.jpeg',
        caption: 'Movie Time',
        description: 'Your hand in my hand during the movie was the best feeling ever'
    },
    {
        image: '/static/Images/1.jpeg',
        caption: 'Zoo Date',
        description: 'When you hold me like that, I feel like the luckiest person alive'
    },
    {
        image: '/static/Images/2.jpeg',
        caption: 'Just Us',
        description: 'Every moment with you is special'
    }
];

// Future plans/adventures - Add more if you want!
const FUTURE_PLANS = [
    'Visit a new city together',
    'Try exotic food we\'ve never had',
    'Learn something new together',
    'Have a picnic under the stars',
    'Create a scrapbook of our adventures'
];

// ================================
// MAIN SCRIPT
// ================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeHearts();
    initializeSparkles();
    initializeIntro();
    initializeScrollAnimations();
    initializeTimeline();
    initializeLetter();
    initializeSurprise();
    initializeGallery();
    initializeBucketList();
    initializeMusic();
});

// ================================
// FLOATING HEARTS BACKGROUND
// ================================
function initializeHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 1000);
    }
    
    // Continuously create hearts
    setInterval(createHeart, 2000);
}

// ================================
// SPARKLES FOR INTRO
// ================================
function initializeSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }
    
    // Create sparkles continuously
    for (let i = 0; i < 30; i++) {
        setTimeout(createSparkle, i * 100);
    }
    
    setInterval(createSparkle, 300);
}

// ================================
// INTRO SECTION
// ================================
function initializeIntro() {
    const startButton = document.getElementById('start-button');
    const introSection = document.getElementById('intro-section');
    
    startButton.addEventListener('click', () => {
        // Create particle effect
        createParticles(startButton);
        
        // Scroll to timeline section
        setTimeout(() => {
            document.getElementById('timeline-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }, 300);
    });
}

function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.background = '#FFB6C1';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(particle);
        
        let x = 0, y = 0;
        const animation = setInterval(() => {
            x += vx * 0.05;
            y += vy * 0.05;
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = Math.max(0, 1 - Math.abs(x) / 200);
            
            if (Math.abs(x) > 200) {
                clearInterval(animation);
                particle.remove();
            }
        }, 16);
    }
}

// ================================
// SCROLL ANIMATIONS
// ================================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ================================
// TIMELINE SECTION
// ================================
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// ================================
// LETTER SECTION (TYPEWRITER EFFECT)
// ================================
function initializeLetter() {
    const letterContent = document.getElementById('letter-content');
    let charIndex = 0;
    
    // Observer to start typewriter when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                typeWriter();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(letterContent);
    
    function typeWriter() {
        if (charIndex < LETTER_TEXT.length) {
            const char = LETTER_TEXT.charAt(charIndex);
            
            if (char === '\n') {
                letterContent.innerHTML += '<br>';
            } else {
                letterContent.innerHTML += char;
            }
            
            charIndex++;
            
            // Variable speed for more natural typing
            const speed = char === '.' || char === ',' ? 200 : 30;
            setTimeout(typeWriter, speed);
        }
    }
}

// ================================
// SURPRISE BUTTON & MODAL
// ================================
function initializeSurprise() {
    const surpriseButton = document.getElementById('surprise-button');
    const surpriseModal = document.getElementById('surprise-modal');
    
    surpriseButton.addEventListener('click', () => {
        // Show modal
        surpriseModal.classList.add('active');
        
        // Create confetti
        createConfetti();
        
        // Play heartbeat sound effect (optional - you can add actual sound)
        // playSound('heartbeat');
        
        // Close modal on click
        surpriseModal.addEventListener('click', () => {
            surpriseModal.classList.remove('active');
        });
    });
}

function createConfetti() {
    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#C71585', '#DB7093'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.position = 'fixed';
            confetti.style.zIndex = '10000';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 20);
    }
}

// ================================
// GALLERY SECTION
// ================================
function initializeGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    GALLERY_DATA.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in';
        
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}" loading="lazy">
            <div class="gallery-caption">
                <h4>${item.caption}</h4>
                <p>${item.description}</p>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
        
        // Re-observe for scroll animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(galleryItem);
    });
}

// ================================
// BUCKET LIST
// ================================
function initializeBucketList() {
    const bucketItems = document.querySelectorAll('.bucket-item');
    
    // Load saved state from localStorage
    bucketItems.forEach(item => {
        const id = item.dataset.id;
        const isChecked = localStorage.getItem(`bucket-${id}`) === 'true';
        
        if (isChecked) {
            item.classList.add('checked');
        }
        
        item.addEventListener('click', () => {
            item.classList.toggle('checked');
            
            // Save state
            const checked = item.classList.contains('checked');
            localStorage.setItem(`bucket-${id}`, checked);
            
            // Create heart animation
            if (checked) {
                createHeartBurst(item);
            }
        });
    });
}

function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        document.body.appendChild(heart);
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => heart.remove();
    }
}

// ================================
// BACKGROUND MUSIC
// ================================
function initializeMusic() {
    const musicControl = document.getElementById('music-control');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    
    let isPlaying = false;
    
    // Set volume to low
    backgroundMusic.volume = 0.2;
    
    musicControl.addEventListener('click', () => {
        if (isPlaying) {
            backgroundMusic.pause();
            musicIcon.textContent = '🎵';
            musicControl.classList.remove('playing');
        } else {
            backgroundMusic.play().catch(err => {
                console.log('Music play failed:', err);
            });
            musicIcon.textContent = '🎶';
            musicControl.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
}

// ================================
// UTILITY FUNCTIONS
// ================================

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add parallax effect to sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.intro-section');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Log to console
console.log('%c💖 Made with Love 💖', 'color: #FF69B4; font-size: 24px; font-weight: bold;');
console.log('%cHappy Valentine\'s Day! 🌹', 'color: #FFB6C1; font-size: 18px;');
