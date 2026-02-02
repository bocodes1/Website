# CLAUDE.md - AI Assistant Guide for Portfolio Website

This document provides comprehensive guidance for AI assistants working with this portfolio website codebase.

## Project Overview

A personal portfolio website designed to showcase skills, projects, experience, and social presence (LinkedIn, Twitter/X, GitHub). Built with vanilla HTML, CSS, and JavaScript for simplicity, performance, and easy deployment.

### Key Features
- Responsive design with mobile-first approach
- Smooth scroll navigation
- Animated reveal effects on scroll
- Contact form with validation
- Social media integration
- Experience timeline
- Skills showcase with categorization
- Project portfolio grid

## Project Structure

```
Website/
├── index.html          # Main HTML file (single-page application)
├── css/
│   └── style.css       # All styles with CSS custom properties
├── js/
│   └── main.js         # JavaScript for interactivity
├── assets/             # Images, resume PDF, and other static files
│   └── resume.pdf      # (placeholder - add actual resume)
└── CLAUDE.md           # This file
```

## Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure and content |
| CSS3 | Styling with custom properties, Flexbox, Grid |
| JavaScript (ES6+) | Interactivity and DOM manipulation |
| Google Fonts (Inter) | Typography |
| SVG Icons | Inline social and UI icons |

## File Descriptions

### `index.html`
- Single-page structure with semantic sections
- Sections: Hero, About, Skills, Projects, Experience, Contact, Footer
- Inline SVG icons for social media (no external dependencies)
- Meta tags for SEO optimization

### `css/style.css`
- CSS custom properties (variables) in `:root` for theming
- Mobile-first responsive design with breakpoints at 1024px, 768px, 480px
- BEM-like naming convention for classes
- Animation classes for scroll reveal effects
- Print styles (if needed)

### `js/main.js`
- Modular function structure
- Navigation toggle and scroll spy
- Intersection Observer for reveal animations
- Contact form handling (mock submission - needs backend integration)
- Notification system for user feedback

## CSS Custom Properties (Theming)

Located at the top of `css/style.css`:

```css
:root {
    /* Primary brand colors */
    --color-primary: #2563eb;        /* Blue - main accent */
    --color-primary-dark: #1d4ed8;   /* Darker blue for hover */
    --color-primary-light: #3b82f6;  /* Lighter blue */

    /* Background colors */
    --bg-primary: #ffffff;           /* Main background */
    --bg-secondary: #f8fafc;         /* Section alternating bg */
    --bg-dark: #0f172a;              /* Footer background */

    /* Text colors */
    --text-primary: #1e293b;         /* Main text */
    --text-secondary: #64748b;       /* Secondary text */
    --text-light: #94a3b8;           /* Muted text */
}
```

To change the theme, modify these variables.

## Key Conventions

### HTML
- Use semantic elements (`<section>`, `<article>`, `<nav>`, `<footer>`)
- Include `aria-label` for accessibility on icon-only links
- All external links use `target="_blank"` with `rel="noopener noreferrer"`
- IDs are used for navigation anchors (e.g., `#about`, `#skills`)

### CSS
- BEM-inspired naming: `.block`, `.block-element`, `.block--modifier`
- CSS variables for all repeated values
- Mobile breakpoints: `@media (max-width: 768px)`
- Transitions use CSS variables: `var(--transition-base)`
- Avoid `!important` unless absolutely necessary

### JavaScript
- Pure vanilla JS (no frameworks/libraries)
- Functions follow single responsibility principle
- DOM elements cached at module level
- Event delegation where appropriate
- Use `const` by default, `let` when reassignment needed

## Common Tasks for AI Assistants

### Adding a New Project
Edit `index.html` and add within `.projects-grid`:

```html
<article class="project-card">
    <div class="project-image">
        <div class="image-placeholder project-placeholder">
            <span>Project Name</span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">
            Description of the project...
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link" target="_blank" rel="noopener noreferrer">
                Live Demo
            </a>
            <a href="#" class="project-link" target="_blank" rel="noopener noreferrer">
                Source Code
            </a>
        </div>
    </div>
</article>
```

### Adding a New Skill
Edit `index.html` within the appropriate `.skill-category`:

```html
<span class="skill-tag">New Skill</span>
```

### Adding Experience Entry
Edit `index.html` within `.timeline`:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3 class="timeline-title">Job Title</h3>
            <span class="timeline-company">Company Name</span>
        </div>
        <span class="timeline-date">Start - End</span>
        <ul class="timeline-description">
            <li>Accomplishment or responsibility</li>
        </ul>
    </div>
</div>
```

### Changing Color Theme
Edit `css/style.css` root variables:

```css
:root {
    --color-primary: #YOUR_COLOR;
    --color-primary-dark: #DARKER_SHADE;
    --color-primary-light: #LIGHTER_SHADE;
}
```

### Updating Social Links
Search for these URLs in `index.html` and replace:
- `https://linkedin.com/in/yourprofile`
- `https://twitter.com/yourhandle`
- `https://github.com/yourusername`

### Updating Personal Information
Search and replace in `index.html`:
- `Your Name` - Full name
- `your.email@example.com` - Email address
- `Your City, Country` - Location
- `Software Developer` - Job title/tagline

## Deployment Options

### GitHub Pages
1. Push code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Site will be available at `username.github.io/repo-name`

### Netlify
1. Connect GitHub repository
2. Build command: (none needed - static files)
3. Publish directory: `/`

### Vercel
1. Import GitHub repository
2. Framework preset: Other
3. Deploy

### Manual Hosting
Upload all files to any static hosting service (Apache, Nginx, S3, etc.)

## Form Integration

The contact form currently uses a mock submission. To integrate with a real backend:

### Option 1: Formspree (Recommended for static sites)
Replace form action:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 2: Netlify Forms
Add to form tag:
```html
<form class="contact-form" netlify>
```

### Option 3: Custom Backend
Modify `simulateFormSubmission()` in `js/main.js`:
```javascript
async function submitForm(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
```

## Performance Considerations

- No external JS libraries (fast load time)
- System font stack with Inter as primary
- Inline SVG icons (no HTTP requests)
- CSS animations use `transform` and `opacity` (GPU accelerated)
- Lazy loading for images when added: `loading="lazy"`

## Accessibility Features

- Semantic HTML structure
- `aria-label` on icon buttons
- Keyboard navigable menu
- Focus styles preserved
- Color contrast meets WCAG guidelines
- Form labels properly associated

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties: IE not supported
- Intersection Observer: IE not supported (needs polyfill)
- Smooth scroll: Native in modern browsers

## Files to Personalize

When setting up for a new user, update these:

1. **`index.html`**:
   - Hero section: Name, title, description
   - About section: Bio, location, email
   - Skills: Actual skill set
   - Projects: Real project details
   - Experience: Work history
   - Social links: Real profile URLs

2. **`assets/`**:
   - Add profile photo (update `.about-image`)
   - Add resume PDF
   - Add project screenshots

3. **Meta tags** in `<head>`:
   - `<title>` - Update page title
   - `<meta name="description">` - Update description
   - Add Open Graph tags for social sharing

## Development Workflow

1. **Local Development**: Open `index.html` directly in browser or use live server
2. **Make Changes**: Edit HTML/CSS/JS files
3. **Test**: Check responsive design at different breakpoints
4. **Commit**: Use descriptive commit messages
5. **Deploy**: Push to hosting platform

## Command Reference

```bash
# Start a local server (Python)
python -m http.server 8000

# Start a local server (Node.js with npx)
npx serve

# Open in browser
open http://localhost:8000
```

## Troubleshooting

### Styles not updating
- Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
- Check for CSS syntax errors in browser console

### JavaScript not working
- Check browser console for errors
- Ensure `main.js` is loaded at bottom of `<body>`
- Verify element IDs match between HTML and JS

### Mobile menu not working
- Ensure `nav-toggle` and `nav-menu` IDs are present
- Check that `main.js` is properly linked

### Animations not triggering
- Intersection Observer requires HTTPS or localhost
- Check browser support

## Future Enhancement Ideas

- [ ] Dark mode toggle with CSS variables
- [ ] Blog section integration
- [ ] Project filtering by technology
- [ ] Testimonials/recommendations section
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] PWA features (service worker, manifest)
- [ ] i18n for multiple languages
