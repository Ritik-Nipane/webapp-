import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Happy Valentine's Day ❤️</title>
        <link rel="stylesheet" href="/static/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <!-- Floating Hearts Background -->
        <div class="hearts-container" id="hearts-container"></div>
        
        <!-- Music Control -->
        <button class="music-control" id="music-control" aria-label="Toggle Music">
            <span id="music-icon">🎵</span>
        </button>
        
        <!-- Hidden Audio Element -->
        <audio id="background-music" loop>
            <source src="https://www.bensound.com/bensound-music/bensound-love.mp3" type="audio/mpeg">
        </audio>

        <!-- SECTION 1: CINEMATIC INTRO -->
        <section class="intro-section" id="intro-section">
            <div class="sparkles" id="sparkles"></div>
            <div class="intro-content">
                <h1 class="intro-title" id="intro-title">Happy Valentine's Day, My Lovee❤️</h1>
                <p class="intro-subtitle" id="intro-subtitle">2 months… and already so many beautiful moments.</p>
                <button class="start-button" id="start-button">Start Our Story 💖</button>
            </div>
        </section>

        <!-- SECTION 2: HOW IT STARTED -->
        <section class="timeline-section" id="timeline-section">
            <div class="container">
                <h2 class="section-title fade-in">How We Started...</h2>
                <div class="timeline">
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">💬</div>
                        <div class="timeline-content">
                            <h3>The First Time Our Eyes Met</h3>
                            <p class="typewriter">That moment i seen your eyes i Knew you were mine..Lovee</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">😊</div>
                        <div class="timeline-content">
                            <h3>The First time you hold my hand</h3>
                            <p class="typewriter">When i was walking you hold my hand because you were falling and i fallen in your love</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">💭</div>
                        <div class="timeline-content">
                            <h3>The Moment you said Yes</h3>
                            <p class="typewriter">The moment when we both fallen in love</p>
                        </div>
                    </div>
                    <div class="timeline-item fade-in">
                        <div class="timeline-icon">🤗</div>
                        <div class="timeline-content">
                            <h3>Our First Time Together</h3>
                            <p class="typewriter">That Day is very special because it was the first time we were together and i felt so happy and loved</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 3: OUR FUTURE ADVENTURES -->
        <section class="adventures-section" id="adventures-section">
            <div class="container">
                <h2 class="section-title fade-in">The Adventures Waiting for Us...</h2>
                <div class="adventure-grid">
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🌍</div>
                            <h3>Traveling Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Watching sunsets in new places, mountain trips, beach walks, and late-night city strolls. Creating stories everywhere we go.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🍫</div>
                            <h3>Chocolate Dates</h3>
                        </div>
                        <div class="card-back">
                            <p>Trying new cafes, sharing desserts, feeding each other chocolate playfully, and finding our favorite spots together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🎬</div>
                            <h3>Movie Nights</h3>
                        </div>
                        <div class="card-back">
                            <p>Arguing over what to watch, falling asleep during movies, random pillow fights, and making every night an adventure.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">📸</div>
                            <h3>Creating Memories</h3>
                        </div>
                        <div class="card-back">
                            <p>Taking silly selfies, random dance videos, laughing at nothing, and capturing every beautiful moment together.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🧠</div>
                            <h3>Growing Together</h3>
                        </div>
                        <div class="card-back">
                            <p>Supporting each other's goals, motivating during tough days, and celebrating every small win on this journey.</p>
                        </div>
                    </div>
                    <div class="adventure-card fade-in">
                        <div class="card-front">
                            <div class="card-icon">🌟</div>
                            <h3>Making Magic</h3>
                        </div>
                        <div class="card-back">
                            <p>Creating our own little world, building inside jokes, having spontaneous adventures, and just being happy together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: A LETTER TO HER -->
        <section class="letter-section" id="letter-section">
            <div class="container">
                <div class="letter-container fade-in">
                    <div class="letter-header">💌</div>
                    <div class="letter-content" id="letter-content">
                        <!-- Content will be added via JavaScript typewriter effect -->
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: SURPRISE BUTTON -->
        <section class="surprise-section" id="surprise-section">
            <div class="container">
                <button class="surprise-button" id="surprise-button">Click for a Surprise ❤️</button>
            </div>
        </section>

        <!-- Surprise Modal -->
        <div class="surprise-modal" id="surprise-modal">
            <div class="surprise-content">
                <div class="gift-box" id="gift-box">🎁</div>
                <div class="surprise-message" id="surprise-message">
                    <h2>You are already my Heart</h2>
                    <p>Every moment with you is a gift Blessed By God 💝</p>
                </div>
            </div>
        </div>

        <!-- SECTION 6: MEMORY GALLERY -->
        <section class="gallery-section" id="gallery-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Beautiful Moments 📸</h2>
                <div class="gallery-grid" id="gallery-grid">
                    <!-- Gallery items will be dynamically generated -->
                </div>
            </div>
        </section>

        <!-- SECTION 7: OUR MINI BUCKET LIST -->
        <section class="bucketlist-section" id="bucketlist-section">
            <div class="container">
                <h2 class="section-title fade-in">Our Mini Bucket List 💕</h2>
                <p class="bucketlist-subtitle fade-in">Adventures we'll check off together Lovee...</p>
                <div class="bucketlist-grid">
                    <div class="bucket-item fade-in" data-id="1">
                        <div class="checkbox"></div>
                        <span>Travel Together to a New Place</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="2">
                        <div class="checkbox"></div>
                        <span>A cafes Date</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="3">
                        <div class="checkbox"></div>
                        <span>Watch the sunrise together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="4">
                        <div class="checkbox"></div>
                        <span>Have a spontaneous day trip somewhere in mountain</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="5">
                        <div class="checkbox"></div>
                        <span>Drawing together</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="6">
                        <div class="checkbox"></div>
                        <span>Dance in the rain</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="7">
                        <div class="checkbox"></div>
                        <span>Cook a meal together aapko na kha jau mai ..heheh</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="8">
                        <div class="checkbox"></div>
                        <span>Take a thousand silly photos</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="9">
                        <div class="checkbox"></div>
                        <span>Build a playlist of "our songs"..i use youtube music</span>
                    </div>
                    <div class="bucket-item fade-in" data-id="10">
                        <div class="checkbox"></div>
                        <span>Just keep being this happy together</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="footer">
            <p>Made with endless love 💖</p>
            <p class="footer-note">2 months down, countless adventures to go...</p>
        </footer>

        <script src="/static/script.js"></script>
    </body>
    </html>
  `)
})

export default app
