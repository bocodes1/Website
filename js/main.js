/**
 * Wenbo Zhao Portfolio - Main JavaScript
 * Handles navigation, project modals, and animations
 */

// Project Data
const projectData = {
    'guyu': {
        category: 'Ecommerce & Growth',
        title: 'GUYU — Front-End & Growth',
        timeline: 'June 2025 — January 2026',
        overview: 'Led market research, Shopify store setup, and influencer-driven social presence growth for an emerging brand.',
        role: 'Business Builder / Growth + Front-End Execution',
        tools: ['Shopify', 'Google Ads', 'Meta Ads', 'Adobe Photoshop', 'GA4', 'Google Tag Manager'],
        problem: 'GUYU needed to establish a market presence from scratch with limited resources. The challenge was to build a compelling storefront, understand competitive positioning, and grow social presence organically through strategic influencer partnerships.',
        solution: [
            'Conducted thorough market research: positioning analysis, competitor scan, and offer structuring',
            'Built and optimized the Shopify storefront with conversion-focused design',
            'Developed influencer strategy to grow social presence authentically',
            'Coordinated with content creators for UGC and brand awareness campaigns',
            'Set up analytics and tracking to measure growth metrics'
        ],
        outcomes: [
            'Established clear brand positioning in a competitive market',
            'Launched fully functional Shopify store with optimized user experience',
            'Built growing social presence through strategic influencer partnerships',
            'Created foundation for scalable paid acquisition'
        ]
    },
    'refined-concept': {
        category: 'Ecommerce Brand Build',
        title: 'Refined Concept — Ecommerce Brand Build',
        overview: 'Co-founded an ecommerce brand with Edison (University of Western Ontario) selling modern furniture and home decor with IKEA-level affordability but a more premium, prestige feel.',
        role: 'Co-Founder / Brand & Growth Lead',
        tools: ['Shopify', 'Adobe Photoshop', 'Figma', 'Google Ads', 'Meta Ads'],
        problem: 'The modern furniture market is dominated by either expensive designer brands or cheap, generic options. We saw an opportunity to create a brand that offers quality modern furniture at accessible prices while maintaining a premium aesthetic.',
        solution: [
            'Defined brand positioning: affordable prestige — IKEA pricing with elevated design',
            'Developed product direction focused on modern couches, furniture, and home decor',
            'Built premium Shopify storefront with sophisticated UI and clear brand identity',
            'Created collection structure and merchandising logic for intuitive browsing',
            'Established visual language and brand guidelines for consistent presentation'
        ],
        outcomes: [
            'Launched cohesive brand with clear market differentiation',
            'Built storefront that communicates premium value at accessible prices',
            'Created scalable collection framework for product expansion',
            'Established partnership workflow for ongoing collaboration'
        ]
    },
    'creative-system': {
        category: 'Marketing Strategy',
        title: 'Growth + Creative System',
        overview: 'Built a systematic ad creative testing framework for Google Ads and Meta Ads, using Photoshop, Premiere Pro, and After Effects to produce UGC-style creatives with a focus on stronger hooks and rapid iteration.',
        role: 'Marketing Strategist & Creative Director',
        tools: ['Google Ads', 'Meta Ads', 'GA4', 'Google Tag Manager', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects'],
        problem: 'Creative fatigue was killing ad performance across Google and Meta platforms. The team was producing content without a clear testing methodology, leading to inconsistent results and wasted ad spend. Hooks weren\'t grabbing attention in the first 2 seconds, and there was no systematic way to identify what creative elements were actually driving conversions.',
        solution: [
            'Designed a modular creative testing framework that isolates variables (hooks, offers, CTAs, formats)',
            'Used Photoshop, Premiere Pro, and After Effects to produce UGC-style creatives',
            'Focused on better hooks and stronger first 2 seconds to improve CTR',
            'Built a tracking system to measure creative performance beyond surface-level metrics',
            'Created a rapid iteration loop: test → analyze → iterate in short cycles',
            'Established creative briefs and UGC direction guidelines for consistent output'
        ],
        outcomes: [
            'Reduced time-to-insight on creative performance from weeks to days',
            'Established repeatable process that identified winning hooks consistently',
            'Improved hook quality leading to better first-impression engagement',
            'Created documentation and playbooks for scaling creative production'
        ]
    },
    'shopify-storefront': {
        category: 'Ecommerce',
        title: 'Shopify Storefront Build',
        overview: 'Designed and built a premium Shopify storefront focused on conversion optimization, brand presentation, and seamless user experience.',
        role: 'Front-End Developer & UI Designer',
        tools: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Adobe Photoshop'],
        problem: 'The existing store had poor conversion rates due to a generic template that didn\'t communicate brand value. Product pages lacked trust signals, the mobile experience was clunky, and the checkout flow had unnecessary friction points.',
        solution: [
            'Designed custom sections for hero, product showcases, and social proof',
            'Built conversion-focused product pages with urgency elements and clear CTAs',
            'Optimized mobile experience with thumb-friendly navigation and fast load times',
            'Implemented trust badges, reviews integration, and FAQ sections strategically',
            'Created custom landing page templates for campaign-specific traffic'
        ],
        outcomes: [
            'Improved mobile usability scores and reduced bounce rate',
            'Streamlined checkout flow by reducing unnecessary steps',
            'Created reusable section templates for future marketing campaigns',
            'Delivered fully documented codebase for ongoing maintenance'
        ]
    },
    'google-ads': {
        category: 'Performance Marketing',
        title: 'Google Ads Setup',
        overview: 'Built a complete Google Ads infrastructure from scratch — campaign structure, conversion tracking, and attribution setup ready for scaling.',
        role: 'Performance Marketing Specialist',
        tools: ['Google Ads', 'GA4', 'Google Tag Manager', 'Google Merchant Center', 'Looker Studio'],
        problem: 'The business had no paid acquisition channel and needed to launch Google Ads from zero. Previous attempts failed due to poor campaign structure and no conversion tracking, making it impossible to measure ROI or optimize effectively.',
        solution: [
            'Audited business goals and identified high-intent keywords and audiences',
            'Built Search campaign structure with proper ad group theming and negative keywords',
            'Set up Shopping campaigns with optimized product feed and bidding strategy',
            'Implemented full conversion tracking: purchases, add-to-carts, and micro-conversions',
            'Created GA4 integration with custom events and attribution modeling',
            'Built reporting dashboard for ongoing performance monitoring'
        ],
        outcomes: [
            'Launched campaigns with proper structure from day one',
            'Achieved accurate conversion tracking across all touchpoints',
            'Created foundation for data-driven optimization and scaling',
            'Delivered documentation for ongoing campaign management'
        ]
    },
    'portfolio-platform': {
        category: 'Development',
        title: 'Front-End Portfolio Platform',
        overview: 'Built a modern portfolio website using component-based architecture, focusing on performance, accessibility, and maintainable code.',
        role: 'Front-End Developer',
        tools: ['Next.js', 'React', 'CSS', 'JavaScript', 'HTML'],
        problem: 'Needed a portfolio that could showcase work effectively while demonstrating front-end capabilities. Template solutions felt generic and didn\'t allow for the custom interactions and design details that would differentiate the presentation.',
        solution: [
            'Architected component-based structure for reusability and maintainability',
            'Implemented responsive design system with CSS custom properties',
            'Built smooth animations and transitions using CSS and vanilla JavaScript',
            'Created modal system for project case studies with accessible focus management',
            'Optimized for performance with semantic HTML and minimal dependencies'
        ],
        outcomes: [
            'Zero external JavaScript dependencies for fast load times',
            'Achieved accessibility compliance with proper ARIA labels and keyboard navigation',
            'Created reusable component patterns for future expansion',
            'Built clean, documented codebase that demonstrates coding standards'
        ]
    }
};

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const currentYearSpan = document.getElementById('current-year');

/**
 * Initialize the application
 */
function init() {
    setupNavigation();
    setupScrollEffects();
    setupProjectModals();
    setupRevealAnimations();
    setCurrentYear();
}

/**
 * Navigation functionality
 */
function setupNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

/**
 * Scroll effects for navbar
 */
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Project modal functionality
 */
function setupProjectModals() {
    // Open modal on project card click
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            openProjectModal(projectId);
        });

        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = card.dataset.project;
                openProjectModal(projectId);
            }
        });
    });

    // Close modal handlers
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
}

/**
 * Open project modal with data
 */
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Build modal content
    const toolsHTML = project.tools.map(tool =>
        `<span class="modal-tool">${tool}</span>`
    ).join('');

    const solutionHTML = project.solution.map(item =>
        `<li>${item}</li>`
    ).join('');

    const outcomesHTML = project.outcomes.map(item =>
        `<li>${item}</li>`
    ).join('');

    const timelineHTML = project.timeline
        ? `<div class="modal-section">
            <h3 class="modal-section-title">Timeline</h3>
            <p class="modal-section-content modal-timeline">${project.timeline}</p>
        </div>`
        : '';

    modalContent.innerHTML = `
        <div class="modal-header">
            <span class="modal-category">${project.category}</span>
            <h2 class="modal-title" id="modal-title">${project.title}</h2>
            <p class="modal-overview">${project.overview}</p>
        </div>

        ${timelineHTML}

        <div class="modal-section">
            <h3 class="modal-section-title">My Role</h3>
            <p class="modal-section-content">${project.role}</p>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">Tools & Skills</h3>
            <div class="modal-tools">${toolsHTML}</div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">The Problem</h3>
            <p class="modal-section-content">${project.problem}</p>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">The Solution</h3>
            <div class="modal-section-content">
                <ul>${solutionHTML}</ul>
            </div>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title">Outcomes</h3>
            <div class="modal-section-content">
                <ul>${outcomesHTML}</ul>
            </div>
        </div>
    `;

    // Show modal
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    // Focus management
    modalClose.focus();

    // Trap focus within modal
    trapFocus(modal);
}

/**
 * Close modal
 */
function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';

    // Return focus to the trigger element
    const activeCard = document.querySelector('.project-card:focus');
    if (activeCard) {
        activeCard.focus();
    }
}

/**
 * Trap focus within modal for accessibility
 */
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

/**
 * Setup reveal animations on scroll
 */
function setupRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.bento-card, .project-card, .skill-group, .education-card'
    );

    // Add reveal class to elements
    revealElements.forEach(el => el.classList.add('reveal'));

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    revealElements.forEach(el => observer.observe(el));
}

/**
 * Set current year in footer
 */
function setCurrentYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
