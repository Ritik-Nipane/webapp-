# 🎨 QUICK CUSTOMIZATION GUIDE

This guide will help you personalize your Valentine's website in just a few minutes!

## 🚀 Quick Start - 3 Main Things to Edit

### 1️⃣ Edit the Love Letter (2 minutes)

**File**: `/home/user/webapp/public/static/script.js`

**Find this section** (around line 11):

```javascript
const LETTER_TEXT = `I don't know what the future holds exactly...

But I know I want to experience it with you.

Not in a rush.
Not with pressure.

Just... happily.

Every day with you feels like a gift.
Every laugh, every moment, every little thing.

I'm just really happy we found each other.

And I can't wait for all the adventures waiting for us. 💕`;
```

**Replace with your own message!** Keep the backticks (\`) at the start and end.

---

### 2️⃣ Add Your Own Photos (5 minutes)

**Step 1**: Upload your photos to `/home/user/webapp/public/static/`

Example:
```bash
# Upload photos to this folder
/home/user/webapp/public/static/our-first-date.jpg
/home/user/webapp/public/static/sunset-together.jpg
/home/user/webapp/public/static/coffee-date.jpg
```

**Step 2**: Edit the gallery in `/home/user/webapp/public/static/script.js`

**Find this section** (around line 30):

```javascript
const GALLERY_DATA = [
    {
        image: '/static/our-first-date.jpg',  // ← Your photo path
        caption: 'Our First Date',             // ← Title
        description: 'The day everything started ❤️'  // ← Description
    },
    {
        image: '/static/sunset-together.jpg',
        caption: 'Sunset Together',
        description: 'Watching the sky change colors'
    },
    {
        image: '/static/coffee-date.jpg',
        caption: 'Coffee Date',
        description: 'Our favorite cafe moment'
    },
    // Add more photos like this!
];
```

**Replace the image paths** with your own photos!

---

### 3️⃣ Customize Timeline Moments (5 minutes)

**File**: `/home/user/webapp/src/index.tsx`

**Find the timeline section** (search for "How We Started"):

```html
<div class="timeline-item fade-in">
    <div class="timeline-icon">💬</div>  <!-- Change emoji -->
    <div class="timeline-content">
        <h3>The First Conversation</h3>  <!-- Change title -->
        <p class="typewriter">That moment when we started talking and time just... disappeared.</p>  <!-- Change text -->
    </div>
</div>
```

**Edit**:
- Change the emoji (💬, 😊, 💭, 🤗, or any emoji you like)
- Change the title text
- Change the description text

Do this for all 4 timeline items!

---

## 🎯 Additional Customizations

### Add More Bucket List Items

**File**: `/home/user/webapp/src/index.tsx`

**Find the bucket list section** (search for "bucket-item"):

```html
<div class="bucket-item fade-in" data-id="11">
    <div class="checkbox"></div>
    <span>Your new adventure here!</span>
</div>
```

**Important**: Increase the `data-id` number for each new item (11, 12, 13, etc.)

---

### Customize Future Adventure Cards

**File**: `/home/user/webapp/src/index.tsx`

**Find the adventure cards** (search for "adventure-card"):

```html
<div class="adventure-card fade-in">
    <div class="card-front">
        <div class="card-icon">🌍</div>  <!-- Change emoji -->
        <h3>Traveling Together</h3>      <!-- Change title -->
    </div>
    <div class="card-back">
        <p>Your description here...</p>  <!-- Change description -->
    </div>
</div>
```

---

### Change Colors

**File**: `/home/user/webapp/public/static/style.css`

**Find the color variables** (around line 11):

```css
:root {
    --deep-red: #8B1538;      /* Main red color */
    --soft-pink: #FFB6C1;     /* Light pink */
    --rose-gold: #B76E79;     /* Rose gold accents */
    --champagne: #F7E7CE;     /* Light beige */
    --soft-purple: #D8BFD8;   /* Light purple */
}
```

**Replace the hex codes** with your preferred colors!

---

### Add Your Own Music

**Step 1**: Upload your music file to `/home/user/webapp/public/static/`

```bash
/home/user/webapp/public/static/our-song.mp3
```

**Step 2**: Update the audio source in `/home/user/webapp/src/index.tsx`

**Find this line** (search for "background-music"):

```html
<audio id="background-music" loop>
    <source src="/static/our-song.mp3" type="audio/mpeg">
</audio>
```

---

## 🔄 After Making Changes

### Rebuild and Restart

```bash
cd /home/user/webapp
npm run build
pm2 restart valentine-webapp
```

### View the Updated Site

Open: https://3000-ir3uw8dr091rf9sht1zqw-c81df28e.sandbox.novita.ai

---

## 📱 Preview on Mobile

1. Open the URL on your phone
2. Test all interactions (swipe, tap, scroll)
3. Check if everything looks good

---

## ✅ Pre-Deployment Checklist

Before sharing with your girlfriend:

- [ ] Edited the love letter with your personal message
- [ ] Added your own photos to the gallery
- [ ] Updated timeline moments with your real story
- [ ] Customized bucket list items
- [ ] Added your own music (optional)
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Verified all animations are smooth

---

## 🚀 Deploy to Production

When you're ready to make it permanent:

```bash
# Setup Cloudflare API key
# (Call setup_cloudflare_api_key tool first)

# Build and deploy
cd /home/user/webapp
npm run build
npx wrangler pages deploy dist --project-name webapp
```

You'll get a permanent URL like: `https://webapp.pages.dev`

---

## 🆘 Common Issues

### Photos Not Showing?
- Make sure photos are in `/home/user/webapp/public/static/`
- Use correct paths: `/static/your-photo.jpg` (not `./` or `../`)
- Run `npm run build` and `pm2 restart valentine-webapp`

### Changes Not Showing?
- Always rebuild: `npm run build`
- Restart PM2: `pm2 restart valentine-webapp`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Music Not Playing?
- Some browsers block autoplay
- User must click the music button first
- Make sure audio file is in `/public/static/`

---

## 💡 Pro Tips

1. **Test Early**: Make small changes and test frequently
2. **Keep Backups**: Save original texts before editing
3. **Mobile First**: Always check on mobile phone
4. **Less is More**: Don't overcomplicate the message
5. **Personal Touch**: Use inside jokes and personal memories

---

## 📸 Example Photo Upload Workflow

```bash
# 1. Navigate to static folder
cd /home/user/webapp/public/static

# 2. Upload your photos (use file manager or upload tool)
# Photos should be named clearly:
# - first-date.jpg
# - sunset-pic.jpg
# - cafe-selfie.jpg

# 3. Edit script.js to reference them
# 4. Rebuild and restart
cd /home/user/webapp
npm run build
pm2 restart valentine-webapp
```

---

## 🎉 You're Ready!

Your Valentine's website is now customized and ready to share!

**Remember**: The website is about celebrating your journey together, not about perfection. Your girlfriend will love the effort and thought you put into it! 💕

---

**Need More Help?**

- Check the main README.md for detailed documentation
- Review the code comments in each file
- All customizable sections are clearly marked

**Happy Valentine's Day!** 🌹✨
