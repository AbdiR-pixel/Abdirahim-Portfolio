# Abdirahim M. — Digital Designer & Website Developer Portfolio

> A fully hand-coded, multi-page personal portfolio website built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. Designed and developed by **Abdirahim Mahamoud**, a digital designer and website developer based in **Djibouti**.

---

## 📌 Project Summary

This project is a professional personal portfolio website submitted as part of a Web and App Development course. It showcases the developer's design identity, technical skills, completed projects, written articles, and professional resume — all within a cohesive, responsive, dark-themed website built entirely from scratch without any frontend framework or CMS.

The site demonstrates mastery of:
- Multi-page HTML site architecture
- Custom CSS design systems (CSS variables, layout, animations)
- Responsive web design using Bootstrap 5's grid system
- Vanilla JavaScript for interactivity and form validation
- Clean code organization with separated concerns (HTML, CSS, JS)

---

## 🌐 Live Website

🔗 **Framer Version (Design Reference):** [https://allyouneedportfolio.framer.website](https://allyouneedportfolio.framer.website)
📁 **GitHub Repository:** [https://github.com/AbdiR-pixel/Abdirahim-Portfolio](https://github.com/AbdiR-pixel/Abdirahim-Portfolio)

---

## 🗂️ Complete File Structure

```
Abdirahim-Portfolio/
│
├── index.html                             # Homepage (Hero, Services, About, Projects preview, Blog preview, Contact Form)
├── about.html                             # About page (Bio, Skills, Services, Tools, Education, FAQ)
├── projects.html                          # Projects listing with filter buttons
├── resume.html                            # Interactive resume/CV page
├── blogs.html                             # Blog listing page (featured + grid)
│
├── project-sonic-dash.html                # Project detail: Sonic Dash C++ game
├── project-framer-portfolio.html          # Project detail: Framer Portfolio Website
├── project-university-registration.html  # Project detail: University Registration System
│
├── blog-design-trends.html                # Blog post: 5 Design Trends That Will Define 2024
├── blog-design-workflow.html              # Blog post: How to Streamline Your Design Workflow
├── blog-typography.html                   # Blog post: The Power of Typography in Web Design
├── blog-color-psychology.html             # Blog post: The Role of Color Psychology in Branding
├── blog-creativity-functionality.html     # Blog post: Balancing Creativity and Functionality
├── blog-uxdesign.html                     # Blog post: Mastering UI/UX Design Key Principles
│
├── assets/
│   ├── all-css-files/                     # Per-page CSS stylesheets
│   │   ├── index.css
│   │   ├── about.css
│   │   ├── projects.css
│   │   ├── resume.css
│   │   ├── blogs.css
│   │   ├── project-sonic-dash.css
│   │   ├── project-framer-portfolio.css
│   │   ├── project-university-registration.css
│   │   ├── blog-design-trends.css
│   │   ├── blog-design-workflow.css
│   │   ├── blog-typography.css
│   │   ├── blog-color-psychology.css
│   │   └── blog-creativity-functionality.css
│   │
│   └── javascript/
│       └── index.js                       # Shared JavaScript: animations, counters, form validation
│
└── README.md
```

---

## 📄 Page-by-Page Breakdown

### 1. `index.html` — Homepage

The main landing page and the most feature-rich page of the site. It includes:

- **Fixed Navbar** — Responsive navigation with a hamburger menu on mobile, active link state, and a CTA "Contact" button styled differently from the regular nav links.
- **Hero Section** — Large typographic headline ("Website Developer"), a dual-layer avatar image with a hover reveal effect, an animated "Available for work" badge, and key stats (3+ Years, 50+ Projects, 20+ Clients) that animate upward from zero using a counter animation.
- **Scroll Marquee** — A continuously auto-scrolling ticker banner listing all services: UI/UX Design, Graphic Design, Web Design, Branding, Framer Development, and Digital Experiences — built in pure CSS using `@keyframes`.
- **Services Grid** — Four numbered service cards (01–04) covering UI/UX Design, Graphic Design, Web Design, and Branding, each containing a detailed bullet list of deliverables.
- **About Snippet** — A brief personal introduction with animated stat counters, phone and email contact details, and a "My Story" CTA button.
- **Projects Preview** — Cards linking to the three featured project detail pages.
- **Testimonials Section** — Client review cards with star ratings, avatars, names, roles, and company names.
- **Blog Preview** — Two recent article cards linking to the blog section.
- **Contact Form (`#contact`)** — A fully validated multi-field inquiry form collecting: Name, Email, Enterprise Type (Individual / Enterprise), Service Needed, Pricing Package (Starter / Pro / Premium / Custom), and a Message. Powered by `index.js` with live inline error messages and success confirmation.
- **Footer** — Four-column responsive layout with brand blurb, navigation links, services list, and contact details with social media icon links.

---

### 2. `about.html` — About Page

A dedicated personal biography and professional profile page containing:

- **Page Hero** — Full-name heading, a personal bio paragraph, and CTA buttons to view the resume or contact.
- **Services Section** — Four icon-headed service cards with capability lists (UI/UX, Graphic Design, Web Design, Branding).
- **My Story** — A personal narrative statement covering background, philosophy, and design approach.
- **Skills & Tools** — Technical skills organized by category:
  - Design Tools: Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop
  - Development: HTML, CSS, JavaScript, React JS, Framer
  - Productivity: Git, Notion, Slack
- **Education & Background** — Academic qualifications and professional training history.
- **FAQ Accordion** — Expandable FAQ items covering common questions about working style, availability, process, and pricing — toggled using a custom JavaScript `toggleFaq()` function.

---

### 3. `projects.html` — Projects Page

A portfolio listing page with a JavaScript-powered category filter system:

- **Filter Buttons** — Four buttons (All, Development, Design, Branding) that filter visible project cards by their `data-category` attribute. Active state is updated dynamically on click using a custom `filterProjects()` function.
- **Featured Projects Section** — Three highlighted original projects with gradient placeholder visuals, technology tag pills, descriptions, and links to their detail pages:
  - 🎮 Sonic Dash C++ Game
  - 🌐 Framer Portfolio Website
  - 🎓 University Course Registration System
- **Additional Projects Grid** — More work cards for branding, UI/UX design, and visual projects, each with category labels and tech tags.

---

### 4. `resume.html` — Resume Page

An interactive online CV featuring:

- **Work Experience** — Timeline-style layout of professional roles with date ranges, companies, and role descriptions.
- **Education** — Academic credentials with institution names, degrees, and years of study.
- **Skills Display** — Technical and soft skills shown as visual tags or progress indicators.
- **Download CV Button** — Allows visitors to download the resume as a PDF file.

---

### 5. `blogs.html` — Blog Listing Page

A curated design articles listing page:

- **Featured Article** — A large hero-style card for the most-read post ("How to Streamline Your Design Workflow") with a full-width cover image, author avatar, publication date, and reading time.
- **All Articles Grid** — Six blog post cards arranged in a responsive 3-column grid, each containing: a cover image, category tag, publication date, reading time estimate, post title, excerpt, and a "Read More" link.

---

## 📰 Blog Posts — 6 Full Articles

Each blog post is a fully styled, standalone HTML page with a consistent layout: fixed navbar, article hero with author info and publication metadata, hero image, rich article body, a "More Articles" related posts section, and the shared footer.

| File | Title | Category | Date | Read Time |
|---|---|---|---|---|
| `blog-design-trends.html` | 5 Design Trends That Will Define 2024 | Insights | Apr 30, 2025 | 5 min |
| `blog-design-workflow.html` | How to Streamline Your Design Workflow | Tutorials | Apr 27, 2025 | 6 min |
| `blog-typography.html` | The Power of Typography in Web Design | Insights | May 2, 2025 | 7 min |
| `blog-color-psychology.html` | The Role of Color Psychology in Branding | Insights | Apr 22, 2025 | 5 min |
| `blog-uxdesign.html` | Mastering UI/UX Design: Key Principles for Success | Resources | Mar 30, 2025 | 8 min |
| `blog-creativity-functionality.html` | Balancing Creativity and Functionality in Design | Insights | Apr 5, 2025 | 6 min |

---

## 🛠️ Projects — 3 Detailed Case Studies

Each project has its own detail page with: a hero section, project overview, technical description, key features, a code snippet, and a sidebar with project metadata (category, language, platform, year, status) plus GitHub / live site links.

---

### 🎮 `project-sonic-dash.html` — Sonic Dash C++ Endless Runner

A console-based endless runner game built in C++ inspired by the mobile Sonic Dash game, developed as a programming course project.

- **Category:** Game Development
- **Language:** C++
- **Platform:** Console / Terminal
- **Year:** 2024 | **Status:** Completed
- **Key Features:**
  - Progressive speed system — game speed increases over time, scaling challenge
  - Procedurally generated obstacles for unpredictable, replayable runs
  - Real-time score display with a persistent high-score system saved between sessions
  - Hitbox-based collision detection for fair, responsive gameplay
- **Technical Concepts:** Object-Oriented Programming (separate Player, ObstacleManager, ScoreManager classes), game loop design (`update()` / `render()` cycle), real-time keyboard input handling, dynamic memory management
- **GitHub:** https://github.com/AbdiR-pixel/Abdirahim

---

### 🌐 `project-framer-portfolio.html` — Personal Portfolio Website (Framer)

A personal branding portfolio website fully designed and developed in Framer, intended to showcase design and development work to potential clients.

- **Category:** Web Design | **Tool:** Framer
- **Type:** Personal Project | **Year:** 2025 | **Status:** Live
- **Key Sections Built:** Animated hero with dual-state portrait, expandable services grid, filterable project showcase, testimonials, blog section, and a multi-field contact form with service and pricing selection
- **Design Decisions:**
  - Dark theme for sophistication and to make project imagery stand out
  - Amber/golden accent color for warmth within a premium dark aesthetic
  - Large italic serif headings (Playfair Display) paired with clean sans-serif body text (Inter) for editorial character combined with readability
- **Live Site:** https://allyouneedportfolio.framer.website

---

### 🎓 `project-university-registration.html` — University Course Registration System

A functional university course registration system demonstrating practical application of fundamental data structures, built as a final project for a Data Structures and Algorithms course.

- **Category:** Data Structures | **Language:** Python
- **Platform:** Console | **Year:** 2024 | **Status:** Completed
- **Data Structures Used:**

| Structure | Use Case |
|---|---|
| Linked List | Dynamic student enrollment lists per course — efficient insertions and deletions |
| Binary Search Tree (BST) | Course catalog indexing for O(log n) lookup and alphabetical traversal |
| Priority Queue | Waitlist management — students prioritized by year of study and registration time |
| Hash Table | O(1) average-case student lookup by university ID for fast authentication |

- **System Features:** Student registration and authentication by ID, course catalog with prerequisite checking, priority-based waitlist management, automatic enrollment from waitlist when spots open, student transcript generation
- **GitHub:** https://github.com/AbdiR-pixel/data-structures-project

---

## ⚙️ JavaScript — `index.js` (Detailed)

The shared JavaScript file that powers all interactive behavior across the entire website.

### 1. Scroll Animation Engine (`initAOS`)
A custom lightweight implementation of scroll-triggered animations using the native browser `IntersectionObserver` API. Elements tagged with `[data-aos]` are watched; when they enter the viewport at a 10% threshold, the `aos-animate` CSS class is added after an optional `data-aos-delay` timeout. The observer is disconnected after triggering to avoid redundant processing.

```javascript
function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.aosDelay || 0);
        setTimeout(() => e.target.classList.add('aos-animate'), delay);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
}
```

### 2. Navbar Scroll Compression
Attaches a `scroll` event listener to the window. When the user scrolls past 60px, the navbar's padding is reduced from `1rem` to `0.6rem`, creating a compact sticky navigation effect without relying on any library.

### 3. Animated Number Counters (`animateCounter` / `initCounters`)
Targets elements with `[data-count]` and `[data-suffix]` attributes. When they scroll into view, a `setInterval` timer increments the displayed number from 0 to the target value in 60 steps over ~1.5 seconds, appending the suffix (e.g., "+") to create the counting-up stat animation on the homepage.

### 4. Contact Form Validation System

A complete client-side form validation pipeline:

**`validateForm(formId)`**
- Iterates over all `required` fields in the form
- Checks for empty values after trimming whitespace
- Validates `type="email"` fields against a regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Adds/removes an `error-field` CSS class (red border) on each field
- Returns an `{ isValid, errors }` object

**`showErrors(errors, containerId)`**
- Injects a styled error message `<div>` with a bulleted list of all validation errors into the `#error-container` element

**`showSuccess(message, containerId)`**
- Injects a green success confirmation message that auto-removes itself after 4 seconds

**`submitForm(formId, containerId, submitButtonId)`**
- The main event handler bound to the form's `submit` event
- Calls `validateForm`, routes to `showErrors` or `showSuccess` accordingly
- Animates the submit button to show a checkmark on success
- Resets the form and clears all error styling after a 2-second delay

**Real-time field cleanup:**
- Input event listeners on all required fields remove the `error-field` class as soon as the user begins correcting a field

---

## 🎨 Design System

A consistent set of CSS custom properties (variables) is defined in each stylesheet to ensure visual coherence across all 16 pages:

| Variable | Purpose |
|---|---|
| `--accent` | Primary amber/golden highlight color |
| `--text` | Main body text (near-white) |
| `--text-muted` | Secondary/subdued text color |
| `--surface` / `--surface2` | Card and section background shades |
| `--border` | Subtle dark border color |
| `--radius` / `--radius-sm` | Consistent border-radius values |

**Typography Stack:**
- `Playfair Display` (italic, 700 weight) — Serif display font for dramatic headings
- `Inter` (300–700 weights) — Clean humanist sans-serif for all body and UI text

**Color Palette:** Near-black backgrounds, dark charcoal card surfaces, warm amber accent, muted gray text, and fine dark borders — producing a premium, editorial dark-mode aesthetic.

---

## 🧰 Tech Stack & External Dependencies

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic page structure and markup |
| CSS3 | — | Styling, layouts, animations, design tokens |
| JavaScript (ES6+) | — | Interactivity, IntersectionObserver, form validation |
| Bootstrap | 5.3.3 (CDN) | Responsive 12-column grid, navbar, utility classes |
| Font Awesome | 6.5.0 (CDN) | Icon library used throughout the UI |
| Google Fonts | — | Inter + Playfair Display typefaces |

> All external dependencies are loaded via CDN — no build tools, package managers, or bundlers are required to run this project.

---

## 🚀 How to Run Locally

No installation is required. This is a purely static website.

```bash
# 1. Clone the repository
git clone https://github.com/AbdiR-pixel/Abdirahim-Portfolio.git

# 2. Enter the project folder
cd Abdirahim-Portfolio

# 3a. Open directly in your browser
open index.html

# 3b. OR serve with a local development server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📱 Responsive Design Breakpoints

The website adapts to all screen sizes using Bootstrap's responsive grid and custom CSS media queries:

| Breakpoint | Layout Behavior |
|---|---|
| Desktop (≥992px) | Full multi-column layouts, side-by-side hero sections, 3-column project and blog grids, 4-column footer |
| Tablet (768–991px) | 2-column layouts, stacked hero sections, 2-column grids |
| Mobile (<768px) | Single-column layout, collapsible hamburger navigation, stacked cards and stats |

---

## 📬 Contact Information

| Method | Details |
|---|---|
| Email | armalazer0@gmail.com |
| Phone | +253 77 48 36 40 |
| Location | Djibouti |
| GitHub | [github.com/AbdiR-pixel](https://github.com/AbdiR-pixel) |

---

## 📄 License & Copyright

© 2025 AllYouNeed. All Rights Reserved by Abdirahim Mahamoud.
Made with ♥ in Djibouti.

---

*This project was submitted as part of a Web and App Development course to demonstrate proficiency in HTML5, CSS3, JavaScript, responsive design, multi-page site architecture, and client-side form validation.*
