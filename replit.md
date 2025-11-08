# Teaching Tunes

## Overview
Teaching Tunes is a static educational website that showcases music-based learning resources for middle and high school classrooms. The site features:
- Studio-grade music aligned with Common Core and NGSS standards
- Sample tracks including "Shout It Out (Interjections)"
- Contact form for inquiries
- Clean, modern purple-themed design

## Project Architecture
This is a simple static website with:
- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Assets**: MP3 audio file (ShoutItOut.mp3)
- **Server**: Python HTTP server for development

### File Structure
```
.
├── index.html       # Main HTML page
├── style.css        # Styling with purple theme
├── script.js        # Simple scroll & form behavior
├── ShoutItOut.mp3   # Sample audio track
└── .gitignore       # Python-specific ignores
```

## Recent Changes
- **2025-11-08**: Initial Replit setup
  - Installed Python 3.11 for HTTP server
  - Configured webserver workflow on port 5000
  - Added .gitignore for Python
  - Verified site functionality

## Technical Details
- **Development Server**: Python's built-in HTTP server (`python -m http.server 5000`)
- **Port**: 5000 (frontend webview)
- **Host**: 0.0.0.0 for Replit compatibility
- **No build process required**: Static HTML/CSS/JS

## User Preferences
None specified yet.

## Current State
✅ Fully functional and ready to use
✅ All assets loading correctly
✅ Interactive features working (scroll to songs, contact form)
