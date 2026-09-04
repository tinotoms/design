/**
 * Tinoj Thomas Portfolio — Interactive Architecture & Dynamic Motion Engine
 * Reference: monopo saigon (https://monopo.vn/) & Desktop-1 Reference
 *
 * Implements:
 * 1. Background of last section (#contact) turns black ONLY when previous section (#about) is 100% out of view.
 * 2. Seamless continuous background blend between landing and work sections.
 * 3. Increased nav items spacing; only selection items visible while scrolling back up, with negative solid text.
 * 4. Interactive work cards with 3D cursor-tracking skewing physics & natural varied heights.
 * 5. Smooth scroll for all items.
 * 6. Smooth experience accordion toggle (CSS Grid 0fr->1fr).
 * 7. Negative solid custom cursor with arrow expansion ↗ on work cards.
 */

const PROJECTS = [
  {
    "id": "night-wolf",
    "index": "01",
    "category": "Illustration",
    "categorySlug": "illustration",
    "title": "Night Wolf",
    "hook": "Practice, not a brief.",
    "cover": "assets/images/Night Wolf.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Night_wolf_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Night Wolf",
        "caption": "Wolf silhouette against layered moon and starfield"
      }
    ],
    "brief": "A self-directed flat-vector illustration — a wolf howling on a ridge, set against a layered moon and scattered stars. Built to show control of silhouette, atmosphere, and depth through flat shape layering alone, with no client constraints to work around.",
    "decision": "Constructed entirely with vector paths and a restrained nocturnal palette. Depth is achieved without drop shadows or artificial blurs — purely through scale contrast, geometric silhouette precision, and value layering.",
    "tags": [
      "Vector Illustration",
      "Silhouette Control",
      "Editorial Art"
    ]
  },
  {
    "id": "mountain",
    "index": "02",
    "category": "Illustration",
    "categorySlug": "illustration",
    "title": "Mountain",
    "hook": "Same technique, wider canvas.",
    "cover": "assets/images/Mountain.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Mountain_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Mountain",
        "caption": "Layered ridge contours and distant forest silhouettes"
      }
    ],
    "brief": "A layered mountain-and-forest scene in flat vector, demonstrating how limited-palette atmospheric perspective creates expansive scale without visual clutter.",
    "decision": "Using overlapping silhouettes and a tight blue-grey palette to build depth and distance. Birds in flight add scale and introduce a single deliberate point of motion to an otherwise quiet, monumental composition.",
    "tags": [
      "Atmospheric Perspective",
      "Limited Palette",
      "Landscape Art"
    ]
  },
  {
    "id": "oak-street",
    "index": "03",
    "category": "Brand Identity",
    "categorySlug": "identity",
    "title": "Oak Street",
    "hook": "A tree that had to stay a tree.",
    "cover": "assets/images/Oakstreet_Logo New.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Oak_street_New.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Reworked Mark — Dark & Gold Palette",
        "caption": "Reworked brand mark on a dark, gold-toned background"
      },
      {
        "src": "assets/images/reference/Oak_street_old.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Original Mark (Before)",
        "caption": "The legacy tree mark, kept intact and rebuilt around"
      }
    ],
    "brief": "Oak Street's original mark lacked the premium feel the brand needed — but business cards and print collateral were already out in the world using it. No room for a redesign, only a rework.",
    "decision": "Kept the tree intact and rebuilt everything around it — swapped the palette to a dark-and-gold combination that reads premium without touching a single line of the existing mark.",
    "tags": [
      "Brand Identity",
      "Identity Rework",
      "Print Collateral"
    ]
  },
  {
    "id": "revup",
    "index": "04",
    "category": "Brand Identity",
    "categorySlug": "identity",
    "title": "RevUp",
    "hook": "A tachometer that spells out a name.",
    "cover": "assets/images/Revup.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Revup_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "RevUp",
        "caption": "Tachometer arc and flame sweep event mark"
      }
    ],
    "brief": "Logo for RevUp, an IEEE event built around vehicles and cars.",
    "decision": "Crafted a text-led mark where the dynamic arc sweeping above the name doubles as a tachometer needle heading into the redline — literally revving up — capped with a flame flourish for a high-octane Hot Wheels energy that matches the event's theme.",
    "tags": [
      "Event Identity",
      "Automotive",
      "Typographic Logo"
    ]
  },
  {
    "id": "nuclex",
    "index": "05",
    "category": "Brand Identity",
    "categorySlug": "identity",
    "title": "NucleX",
    "hook": "One mark, every platform.",
    "cover": "assets/images/NucleX.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Nuclex_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "NucleX",
        "caption": "Negative-space N/X monogram"
      }
    ],
    "brief": "A gaming community required a logo that performed with equal clarity as a tiny 16px Discord server icon, an animated stream overlay, a social avatar, and an in-game squad emblem.",
    "decision": "Constructed directly from the community's own name — an 'N' with an 'X' nested inside using negative space in a single flat color. Because it relies on silhouette rather than fine line work, it holds up shrunk down or blown up on a billboard without redrawing.",
    "tags": [
      "Monogram",
      "Negative Space",
      "Cross-Platform Scalability"
    ]
  },
  {
    "id": "everite",
    "index": "06",
    "category": "Packaging",
    "categorySlug": "packaging",
    "title": "Everite Power",
    "hook": "Fitting a spec sheet onto a battery box without it looking like one.",
    "cover": "assets/images/Everite_Box.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Everite_battery_old.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Original Label (Before)",
        "caption": "The legacy EPT 100 label before the redesign"
      },
      {
        "src": "assets/images/reference/Everite_battery_new.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "New Label (After)",
        "caption": "EPT 100 battery label carrying the redesigned typography and warranty seal"
      },
      {
        "src": "assets/images/reference/Everite_battery_box.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Package Box Design",
        "caption": "Finished box artwork with brand colors and certification icons"
      },
      {
        "src": "assets/images/reference/Everite_battery_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Package Box — Print Dimensions",
        "caption": "Box die-line with exact print dimensions"
      }
    ],
    "brief": "Redesign the product packaging (container labels and corrugated box die-line) for Everite Power's EPT-series tubular batteries. Locked strictly to existing brand colors, corporate logo, and fonts, with exact manufacturing print dimensions.",
    "decision": "The real problem was space, not style — certifications, specs, and safety icons all needed real estate without crowding. Rebuilt the layout to give every element room to breathe while keeping the print specs exact across both container stickers and outer shipping cartons.",
    "tags": [
      "Packaging Design",
      "Industrial Die-Line",
      "Technical Blueprint",
      "Hierarchy & Regulatory"
    ]
  },
  {
    "id": "frame-it",
    "index": "07",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "Frame It",
    "hook": "Designed for exactly where it would live — a phone screen, mid-scroll.",
    "cover": "assets/images/Frameit.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Frameit.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Frame It",
        "caption": "Instagram frame metaphor with direct QR entry"
      }
    ],
    "brief": "Last-minute promotional poster for a photo-frame contest run through e-KITES, IEEE Education Society Kerala Chapter — needed to be instantly legible on a screen people are scrolling past.",
    "decision": "Built the whole layout around a recognizable Instagram post frame — like, comment, save icons, negative space for the entry photo — with the contest name breaking out past the frame edge ('think outside the box'). Since the poster would live entirely on WhatsApp Status and Instagram Story, a clickable link was useless — swapped it for a QR code straight to the registration form. Stayed inside IEEE's brand guidelines throughout.",
    "tags": [
      "Campaign Poster",
      "Mobile-First Design",
      "IEEE Brand Guidelines"
    ]
  },
  {
    "id": "scoopso",
    "index": "08",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "Scoopso",
    "hook": "Telling a new town what kind of shop just opened.",
    "cover": "assets/images/Scoopso.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Scoopso_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Scoopso",
        "caption": "Launch poster with mascot and ice-cream doodles"
      }
    ],
    "brief": "Launch poster for Scoopso's first Thrissur outlet — first outlet in the area, so the poster was doing double duty: announce the opening and explain what the business even is.",
    "decision": "Leaned hard on the brand's colors and mascot, with popsicle and ice-cream doodles doing the job of a signboard — you know what's inside before you read a word. 'GRAND OPENING' carries the headline, and the location sits in an Instagram-style location sticker so it reads like something you'd actually see in a story.",
    "tags": [
      "Retail Launch",
      "Illustration & Doodles",
      "Local Advertising"
    ]
  },
  {
    "id": "transeduverse-ai",
    "index": "09",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "TransEduverse — AI Internship",
    "hook": "One flyer, two brand colors, no exceptions.",
    "cover": "assets/images/Transeduverse_Poster_AI_internship.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Transeduverse_internship.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "AI Internship Flyer",
        "caption": "Two-color, glassmorphic card layout"
      }
    ],
    "brief": "Informational poster for TransEduverse's AI/Robotics internship program, restricted to the brand's blue-and-white palette only.",
    "decision": "Used a card-style layout with glassmorphism to separate the text block from the background image — kept legibility high without breaking the color constraint. A stock AI-robot image anchors the subject at a glance.",
    "tags": [
      "Corporate Flyer",
      "Palette Governance",
      "Glassmorphism"
    ]
  },
  {
    "id": "transeduverse-promo",
    "index": "10",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "TransEduverse — Course Promo",
    "hook": "Same brand, warmer read.",
    "cover": "assets/images/Transeduverse_Poster_malayalam.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Transeduverse_course_promo.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Course Promo (Malayalam)",
        "caption": "Regional campaign poster in the brand's blue-and-white system"
      }
    ],
    "brief": "Malayalam-language poster promoting TransEduverse's next course intake — same brand-color restriction, needed to feel approachable rather than corporate.",
    "decision": "Held the blue-and-white system but let yellow do the work of marking key details, and cast a model in a blue t-shirt whose read is trustworthy-but-relatable rather than stock-photo-stiff.",
    "tags": [
      "Regional Outreach",
      "Malayalam Typography",
      "Relatable Art Direction"
    ]
  },
  {
    "id": "circuit-nova",
    "index": "11",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "Circuit Nova",
    "hook": "A circuit board standing in for a star going nova.",
    "cover": "assets/images/reference/circuitnova.png",
    "coverFallback": "assets/images/placeholder.svg",
    "missingAsset": true,
    "images": [
      {
        "src": "assets/images/reference/circuitnova_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Image not yet added — see note below",
        "caption": "Add assets/images/Circuitnova.png (already exists on the live site) to complete this entry"
      }
    ],
    "brief": "Promotional poster for Circuit Nova, an IEEE event — needed to follow IEEE brand guidelines while making the event name itself feel like part of the visual.",
    "decision": "Built a white circuit-trace graphic that doubles as the 'Circuit' half of the name, kept to a single color for a clean dual-tone result. Set it against a space background — Nova reads as a star flaring brighter — with vertical typography stacking everything under a soft moon-glow for an aligned, deliberate composition rather than a busy one.",
    "tags": [
      "Event Poster",
      "IEEE Brand Guidelines",
      "Space Motif"
    ]
  },
  {
    "id": "ekites-story",
    "index": "12",
    "category": "Posters & Campaigns",
    "categorySlug": "posters",
    "title": "e-KITES 2.0",
    "hook": "Loud on purpose, for a format built to be skipped.",
    "cover": "assets/images/e-kites.png",
    "coverFallback": "assets/images/placeholder.svg",
    "missingAsset": true,
    "images": [
      {
        "src": "assets/images/reference/e-kites_ref.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Image not yet added — see note below",
        "caption": "No asset exists for this one yet — add assets/images/ekites-story.png once it's created"
      }
    ],
    "brief": "Instagram story poster announcing e-KITES 2.0 — needed to stop a thumb mid-scroll through stories, where most things get skipped in under a second.",
    "decision": "Went bright and cartoonish rather than restrained — the opposite instinct from Frame It's quieter Instagram-frame concept, chosen because a story announcement needs to grab attention immediately, not reward a second look.",
    "tags": [
      "Instagram Story",
      "Campaign Poster",
      "Bold Art Direction"
    ]
  },
  {
    "id": "tech-revealer",
    "index": "13",
    "category": "Digital Art",
    "categorySlug": "digital-art",
    "title": "Tech Revealer",
    "hook": "Background noise, on purpose.",
    "cover": "assets/images/Tech-Revealer-Channel-Art.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Tech_revealer_channel_art.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Tech Revealer",
        "caption": "Ambient neon rings framing the channel wordmark"
      }
    ],
    "brief": "YouTube channel art for a tech/gaming/reviews channel — neon rings and shapes scattered across a dark background, built to read as energetic at thumbnail size without competing with the channel name and tagline sitting in the center.",
    "decision": "Built an ambient backdrop of neon rings and geometric fragments on a dark slate canvas. Kept the background energy peripheral so the central channel title and value proposition maintain uninterrupted contrast across all responsive crops.",
    "tags": [
      "Channel Art",
      "Multi-Device Banner",
      "Ambient Motion Aesthetic"
    ]
  },
  {
    "id": "merry-christmas",
    "index": "14",
    "category": "Digital Art",
    "categorySlug": "digital-art",
    "title": "Merry Christmas",
    "hook": "Prompting as a design tool, not a shortcut.",
    "cover": "assets/images/MerryChristmas.png",
    "coverFallback": "assets/images/placeholder.svg",
    "images": [
      {
        "src": "assets/images/reference/Merrychristmas.png",
        "fallback": "assets/images/placeholder.svg",
        "label": "Merry Christmas",
        "caption": "AI-generated base, typography and finishing done manually"
      }
    ],
    "brief": "An experiment in AI image generation aimed at publish-ready quality — evaluating prompt engineering as a creative catalyst for art direction.",
    "decision": "The base image was AI-generated, with typography, kerning, color grading, and print grain added manually in Photoshop to finish it as a real poster.",
    "disclosure": "AI-generated base image; typography, kerning, and production finishing executed manually in Adobe Photoshop.",
    "tags": [
      "AI Experimentation",
      "Art Direction",
      "Photoshop Craft"
    ]
  }
];

// --- State Management ---
let currentProjectIndex = 0;
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initSmartNavbar();
  initSmoothScroll();
  initDynamicThemeTransitions();
  initCardTiltPhysics();
  initSmoothAccordion();
  initModal();
  initMobileMenu();
  initTouchGallerySwipe();
  initMasonryLayout();
});

// 1. Negative Solid Circle Cursor + Work Hover Expansion (Requirements 9 & 10)
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor) return;

  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.28;
    cursorY += (mouseY - cursorY) * 0.28;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Only hide the native cursor once ours is confirmed to be tracking the
  // pointer — never leave a visitor with no visible cursor if this script
  // errors out before this point.
  window.addEventListener('pointermove', () => {
    document.body.classList.add('cursor-ready');
  }, { once: true, passive: true });

  // Work section cards: expand cursor with SVG arrow ↗
  const workCards = document.querySelectorAll('.project-card');
  workCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-expand');
    });
    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-expand');
    });
  });

  // Nav links & buttons: subtle swell feedback
  const clickableLinks = document.querySelectorAll('a, button, .exp-summary-btn');
  clickableLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (!cursor.classList.contains('cursor-expand')) {
        cursor.classList.add('cursor-hover-link');
      }
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover-link');
    });
  });
}

// 2. Navbar Visibility on Scroll (Visible only when scrolling up; horizontal with background)
function initSmartNavbar() {
  const header = document.getElementById('site-header');
  const scrollProgress = document.getElementById('scroll-progress');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (!header) return;

  let lastScrollY = window.scrollY;

  function handleNavbarScroll() {
    const currentScrollY = window.scrollY;

    // Reading progress bar
    if (scrollProgress) {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        scrollProgress.style.width = `${(currentScrollY / totalScroll) * 100}%`;
      }
    }

    // Do not hide header if mobile menu is open
    if (hamburgerBtn && hamburgerBtn.classList.contains('active')) {
      header.classList.remove('nav-hidden');
      return;
    }

    // At top of page (<= 40px): visible, vertical items, transparent background
    if (currentScrollY <= 40) {
      header.classList.remove('nav-hidden');
      header.classList.remove('scrolled');
    } else {
      // Past 40px: horizontal layout WITH background (Requirement 2)
      header.classList.add('scrolled');

      // Requirement 1: Make navbar visible only when scrolling up!
      if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling DOWN -> Hide
        header.classList.add('nav-hidden');
      } else if (lastScrollY - currentScrollY > 6) {
        // Scrolling UP -> Reveal
        header.classList.remove('nav-hidden');
      }
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();
}

// 3. Smooth Scroll for All Items
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 4. Dynamic Theme Transitions (Requirement 1 & 2: Contact black ONLY when about is out of view)
function initDynamicThemeTransitions() {
  const heroSection = document.getElementById('hero');
  const workSection = document.getElementById('work');
  const expSection = document.getElementById('experience');
  const aboutSection = document.getElementById('about');
  const contactSection = document.getElementById('contact');

  function checkThemes() {
    const windowH = window.innerHeight;

    if (!aboutSection || !contactSection) return;

    const aboutRect = aboutSection.getBoundingClientRect();
    const expRect = expSection ? expSection.getBoundingClientRect() : null;
    const workRect = workSection ? workSection.getBoundingClientRect() : null;

    // Requirement 1: Transition to black in the last section (#contact)
    // ONLY when 70% of the previous section (#about) has scrolled out of view.
    // 70% of about out of view means aboutRect.bottom <= aboutRect.height * 0.30.
    const is70PercentAboutOutOfView = aboutRect.bottom <= (aboutRect.height * 0.30);

    if (is70PercentAboutOutOfView) {
      document.body.setAttribute('data-theme', 'contact');
    } else if (aboutRect.top < windowH * 0.5) {
      // About is in view (and less than 70% has left): keep white Paper theme (#ffffff)
      document.body.setAttribute('data-theme', 'about');
    } else if (expRect && expRect.top < windowH * 0.5) {
      // Experience section: Inkstone (#181818)
      document.body.setAttribute('data-theme', 'experience');
    } else if (workRect && workRect.top < windowH * 0.8) {
      // Work section: Obsidian (#000000)
      document.body.setAttribute('data-theme', 'work');
    } else {
      // Hero section: Obsidian (#000000)
      document.body.setAttribute('data-theme', 'hero');
    }
  }

  window.addEventListener('scroll', checkThemes, { passive: true });
  window.addEventListener('resize', checkThemes, { passive: true });
  checkThemes();
}

// 5. Interactive Cards with 3D Skewing Physics (Requirement 4)
function initCardTiltPhysics() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width;   // 0 to 1
      const yNorm = (e.clientY - rect.top) / rect.height;  // 0 to 1

      // 3D Tilt and Skew calculation
      const rotX = (yNorm - 0.5) * -12;
      const rotY = (xNorm - 0.5) * 12;
      const skewX = (xNorm - 0.5) * -3.5;
      const skewY = (yNorm - 0.5) * 2;

      card.style.transform = `perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) skew(${skewX.toFixed(2)}deg, ${skewY.toFixed(2)}deg) scale(1.03)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) skew(0deg, 0deg) scale(1)';
    });
  });
}

// 6. Smooth Experience Accordion (Requirement 6)
function initSmoothAccordion() {
  const expItems = document.querySelectorAll('.exp-item');

  expItems.forEach(item => {
    const btn = item.querySelector('.exp-summary-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close other accordion items smoothly
      expItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherBtn = other.querySelector('.exp-summary-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 7. Pop-up Case Study Modal & Multi-Image Gallery
function initModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  const galleryPrevBtn = document.getElementById('gallery-arrow-prev');
  const galleryNextBtn = document.getElementById('gallery-arrow-next');

  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const index = PROJECTS.findIndex(p => p.id === id);
      if (index !== -1) {
        openModal(index);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Close handlers
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Project navigation
  prevBtn.addEventListener('click', () => {
    if (currentProjectIndex > 0) openModal(currentProjectIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentProjectIndex < PROJECTS.length - 1) openModal(currentProjectIndex + 1);
  });

  // Gallery intra-project image navigation
  galleryPrevBtn.addEventListener('click', () => {
    navigateGallery(-1);
  });

  galleryNextBtn.addEventListener('click', () => {
    navigateGallery(1);
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      const project = PROJECTS[currentProjectIndex];
      if (project.images.length > 1 && currentImageIndex > 0) {
        navigateGallery(-1);
      } else if (currentProjectIndex > 0) {
        openModal(currentProjectIndex - 1);
      }
    } else if (e.key === 'ArrowRight') {
      const project = PROJECTS[currentProjectIndex];
      if (project.images.length > 1 && currentImageIndex < project.images.length - 1) {
        navigateGallery(1);
      } else if (currentProjectIndex < PROJECTS.length - 1) {
        openModal(currentProjectIndex + 1);
      }
    }
  });

  // Email copy handler
  const copyBtn = document.getElementById('copy-email-btn');
  const emailToCopy = 'tinojatwork@gmail.com';
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied to Clipboard!';
        copyBtn.style.borderColor = 'currentColor';
        copyBtn.style.opacity = '0.7';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.opacity = '';
        }, 2200);
      } catch (err) {
        window.location.href = `mailto:${emailToCopy}`;
      }
    });
  }
}

function openModal(projectIndex) {
  currentProjectIndex = projectIndex;
  currentImageIndex = 0;

  const modal = document.getElementById('project-modal');
  const project = PROJECTS[currentProjectIndex];

  document.body.classList.add('modal-open');
  modal.classList.add('active');

  // Update Tracker & Nav controls
  document.getElementById('modal-tracker').textContent = `PROJECT ${project.index} OF ${String(PROJECTS.length).padStart(2, '0')}`;
  document.getElementById('modal-prev-btn').disabled = currentProjectIndex === 0;
  document.getElementById('modal-next-btn').disabled = currentProjectIndex === PROJECTS.length - 1;

  // Text Content
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-hook').textContent = project.hook;
  document.getElementById('modal-brief').textContent = project.brief;
  document.getElementById('modal-decision').textContent = project.decision;

  // Tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  project.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'pill-tag pill-tag-dark';
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // Disclosure (if any)
  const disclosureBox = document.getElementById('modal-disclosure');
  if (project.disclosure) {
    disclosureBox.style.display = 'block';
    disclosureBox.innerHTML = `<strong>Transparent Disclosure:</strong> ${project.disclosure}`;
  } else {
    disclosureBox.style.display = 'none';
  }

  // Gallery tabs & image display
  renderGallery(project);

  // Scroll to top of modal card
  document.getElementById('modal-card').scrollTop = 0;
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Multi-Image Gallery Navigation Engine (Requirement 2: Fully accessible arrows)
function navigateGallery(direction) {
  const project = PROJECTS[currentProjectIndex];
  if (!project || !project.images || project.images.length <= 1) return;

  currentImageIndex += direction;
  // Circular loop through gallery images
  if (currentImageIndex < 0) {
    currentImageIndex = project.images.length - 1;
  } else if (currentImageIndex >= project.images.length) {
    currentImageIndex = 0;
  }

  updateModalImage();
}

function renderGallery(project) {
  const arrowPrev = document.getElementById('gallery-arrow-prev');
  const arrowNext = document.getElementById('gallery-arrow-next');

  // Requirement 2: Show navigation arrows if project has multiple images
  if (project.images && project.images.length > 1) {
    if (arrowPrev) arrowPrev.style.display = 'flex';
    if (arrowNext) arrowNext.style.display = 'flex';
  } else {
    if (arrowPrev) arrowPrev.style.display = 'none';
    if (arrowNext) arrowNext.style.display = 'none';
  }

  updateModalImage();
}

function updateModalImage() {
  const project = PROJECTS[currentProjectIndex];
  if (!project || !project.images || project.images.length === 0) return;

  const imgObj = project.images[currentImageIndex];
  const viewer = document.getElementById('modal-media-viewer');
  const modalImg = document.getElementById('modal-img');
  const labelEl = document.getElementById('modal-img-label');
  const counterEl = document.getElementById('modal-img-counter');

  // Smooth cross-fade transition
  if (viewer) viewer.classList.add('transitioning');

  setTimeout(() => {
    if (modalImg) {
      modalImg.src = imgObj.src;
      modalImg.onerror = function() {
        if (imgObj.fallback) {
          this.onerror = null;
          this.src = imgObj.fallback;
        }
      };
      modalImg.alt = `${project.title} — ${imgObj.label}`;
    }

    if (labelEl) labelEl.textContent = imgObj.label || project.title;
    if (counterEl) counterEl.textContent = `${currentImageIndex + 1} / ${project.images.length}`;

    // Update arrow buttons
    const arrowPrev = document.getElementById('gallery-arrow-prev');
    const arrowNext = document.getElementById('gallery-arrow-next');
    if (arrowPrev) arrowPrev.style.opacity = '1';
    if (arrowNext) arrowNext.style.opacity = '1';

    if (viewer) viewer.classList.remove('transitioning');
  }, 120);
}

// 8. Mobile Touch Swipe for Modal Gallery
function initTouchGallerySwipe() {
  const viewer = document.getElementById('modal-media-viewer');
  if (!viewer) return;

  let touchStartX = 0;
  let touchEndX = 0;

  viewer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        navigateGallery(1);
      } else {
        navigateGallery(-1);
      }
    }
  }, { passive: true });
}

// 9. Mobile Hamburger Menu Toggle Engine (Requirement 3)
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  if (!hamburgerBtn || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = hamburgerBtn.classList.contains('active');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('active');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeMenu() {
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// 10. Responsive Zig-Zag Masonry Engine
function initMasonryLayout() {
  const container = document.getElementById('project-grid');
  if (!container) return;

  const col1 = document.getElementById('masonry-col-1');
  const col2 = document.getElementById('masonry-col-2');
  const col3 = document.getElementById('masonry-col-3');
  if (!col1 || !col2 || !col3) return;

  // Retrieve all card elements sorted by their project order (1 to 12)
  const allCards = Array.from(container.querySelectorAll('.project-card'));
  allCards.sort((a, b) => {
    const idA = a.getAttribute('data-id');
    const idB = b.getAttribute('data-id');
    const idxA = PROJECTS.findIndex(p => p.id === idA);
    const idxB = PROJECTS.findIndex(p => p.id === idB);
    return idxA - idxB;
  });

  let currentMode = 0;

  function updateMasonry() {
    const width = window.innerWidth;
    let targetMode = 3;
    if (width <= 640) {
      targetMode = 1;
    } else if (width <= 991) {
      targetMode = 2;
    }

    if (targetMode === currentMode) return;
    currentMode = targetMode;

    if (targetMode === 3) {
      col2.style.display = 'flex';
      col3.style.display = 'flex';
      allCards.forEach((card, idx) => {
        const colNum = idx % 3;
        if (colNum === 0) col1.appendChild(card);
        else if (colNum === 1) col2.appendChild(card);
        else col3.appendChild(card);
      });
    } else if (targetMode === 2) {
      col2.style.display = 'flex';
      col3.style.display = 'none';
      allCards.forEach((card, idx) => {
        const colNum = idx % 2;
        if (colNum === 0) col1.appendChild(card);
        else col2.appendChild(card);
      });
    } else {
      col2.style.display = 'none';
      col3.style.display = 'none';
      allCards.forEach(card => {
        col1.appendChild(card);
      });
    }
  }

  window.addEventListener('resize', updateMasonry, { passive: true });
  updateMasonry();
}
