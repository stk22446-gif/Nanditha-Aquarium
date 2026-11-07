# NANDITHA AQUARIUM – Premium Retail Website

> **A World of Aquatic Beauty & Feathered Friends**  
> Retail Aquarium & Bird Shop – KR Puram, Bengaluru

## 🌊 Overview
A modern, high-performance retail e-commerce website built strictly with **HTML5, CSS3, and Vanilla JavaScript**. Designed for **NANDITHA AQUARIUM** in Bengaluru, featuring live product filtering, separate gender variant pricing (Male/Female/Unisex), interactive quick-view modal, live shopping bag with local persistence, complete **Dark Mode & Light Mode Theme Switcher**, and direct order fulfillment via WhatsApp (+91 96209 35209).

---

## 🏬 Business Information
- **Business Name**: NANDITHA AQUARIUM
- **Type**: Retail Aquarium & Bird Shop
- **Address**: 136, Sri Choudeshwari Nilayam, 1, 2nd Main Rd, VB Layout, Krishnarajapuram, Bengaluru, Karnataka 560036
- **Phone**: +91 96209 35209
- **WhatsApp**: +91 96209 35209
- **Google Rating**: 4.4 / 5 (516+ Verified Customer Reviews)
- **Timings**: Open daily until 10:00 PM
- **Services**: Retail In-Store Shopping & Doorstep Delivery across Bengaluru

---

## 🧭 Clean & Compact Navigation Architecture
- **Desktop Navbar (Single-Line, Zero Wrapping)**:
  - **Left**: NANDITHA AQUARIUM logo & brand typography
  - **Center Links**: `Home`, `Shop` (with Mega Dropdown), `Reviews`, `Contact`
  - **Right Controls**: Search Button, Live Shopping Cart with Badge, Dark/Light Mode Theme Toggle
- **Shop Dropdown Mega Menu**:
  - Structured 2-column layout dividing **Aquatic World** (Aquarium Fish, Fish Food, Tanks, Accessories) and **Feathered Companions** (Cockatiels, Budgies, Bird Food, Accessories)
  - Smooth 250ms elevation and opacity transition with rotating caret
  - Seamless support for both Dark and Light themes
- **Mobile Navigation Drawer**:
  - Clean collapsible **Shop by Category accordion** with smooth slide transition
  - Theme switcher bar and direct contact card

---
The website includes an end-to-end theme switcher supporting both themes across all components:

### Dark Mode (Cinematic Aquatic Theme)
- **Background**: Deep Navy (`#071827`)
- **Secondary Background**: (`#0D2538`)
- **Product Cards**: (`#102D42`)
- **Primary Text**: White (`#F1F7FB`)
- **Secondary Text**: Soft Blue Grey (`#8FAEC5`)
- **Accent**: Aqua Turquoise (`#20D6D2`)
- **Buttons**: Ocean Blue / Aqua (`#087EA4` / `#20D6D2`)

### Light Mode (Fresh Modern Theme)
- **Background**: White (`#FFFFFF`)
- **Secondary Background**: (`#F4F8FA`)
- **Product Cards**: White (`#FFFFFF`)
- **Primary Text**: Deep Navy (`#071827`)
- **Secondary Text**: Grey (`#4B6375`)
- **Accent**: Ocean Blue (`#087EA4`)
- **Buttons**: Ocean Blue (`#087EA4`)

### Functional Theme Features
- **Header & Mobile Toggle**: Accessible from both desktop navigation bar and mobile drawer.
- **Icon Morphing**: Sun icon shown in Dark Mode (click to switch to Light); Moon icon shown in Light Mode (click to switch to Dark).
- **Anti-Flash Initializer**: Synchronous inline script in `<head>` applies the stored theme or OS preference before page paint to prevent white/dark flash.
- **Persistence**: Remembers preference in `localStorage` (`nanditha_theme`).
- **OS Auto-Detection**: Respects system preferences (`prefers-color-scheme`) when no manual selection is stored.
- **Smooth Transitions**: 300ms smooth visual easing during theme toggle.

---

## 🎨 Brand Identity & Design System
- **Typography**: Google Fonts Outfit & Playfair Display.
- **Cinematic Effects**: Ambient underwater glows, rising micro-bubbles, backdrop blurs, smooth card lifts, and ripple-animated floating WhatsApp trigger.

---

## 📦 Key Categories & Variant Logic
1. **Aquarium Fish**: Betta (Halfmoon), Guppies, Goldfish (Oranda), Mollys, Platys, Tetras, Angelfish, Discus.
   - *Independent Variants*: Male vs. Female with distinct pricing, stock quantities, and traits.
2. **Fish Food**: Hikari Micro Pellets, TetraBits Color Granules, UV Frozen Bloodworms, Live Daphnia cultures.
3. **Cockatiels**: Pure Lutino, Pied/Pearl, and Ancestral Grey mutations with separate male (vocal/whistling), female, and unisex pricing.
4. **Budgies (Parakeets)**: Sky Blue, Lutino Yellow, Albino White, and Heritage Green with independent male/female/pair rates.
5. **Bird Food**: Sun-cured spray millet, fortified seed mixes, cuttlefish calcium blocks.
6. **Aquarium Tanks**: Ultra-clear rimless nano cubes, 2ft planted tanks, curved front tanks, and 3ft heavy exhibition displays.
7. **Aquarium Accessories**: Hang-on-back filters, extendable RGB+W LED lights, auto-cut heaters, gravel siphons, and live scaping gear.
8. **Bird Accessories**: Powder-coated dome cages, natural fruitwood perches, foraging ladders, and nesting boxes.

---

## 🗂️ Compact Retail Store Catalog Design
- **Low-Height Section Padding**: Scaled from 90px to 38px–42px top/bottom to eliminate massive vertical scroll gaps.
- **Compact Category Tiles**:
  - Image height reduced to 112px (desktop) / 96px (mobile) with consistent aspect ratios and gentle 1.06x hover scaling.
  - Clamped single-line typography with readable titles (0.95rem bold) and clean muted category summaries (0.76rem).
  - Overall card height reduced by over 50% (~185px vs. previous ~390px).
- **Clean Card Imagery (Overlay Badges Removed)**:
  - Removed category name badges and stock count badges overlaying card media across all product and category cards.
  - Reclaimed the upper image area to present clean, unobstructed photography across both desktop and mobile viewports.
  - Stock data and inventory availability remain fully preserved in variant selectors and product details modal.
- **Responsive Multi-Column Grids**:
  - **Wide Monitors ($\ge 1320\text{px}$)**: 5 cards per row.
  - **Standard Desktop & Laptop ($993\text{px}–1319\text{px}$)**: 4 cards per row (2 rows of 4).
  - **Mobile ($\le 768\text{px}$)**: 2 cards per row (4 rows of 2).
- **Zero Data Loss**: Retains all 8 core categories, imagery, tags, and interactive filter navigation links (`data-category-target`).

---

## 🛍️ Optimized Product Catalogue & Scroll Reduction
The entire product catalogue browsing experience was re-architected to eliminate excessive page height while keeping product information legible and pleasant to browse:
- **Responsive Product Grid**:
  - **Extra-Wide Desktops ($\ge 1400\text{px}$)**: 5 products per row.
  - **Standard Desktop & Laptop ($993\text{px}–1399\text{px}$)**: 4 products per row.
  - **Tablet ($641\text{px}–992\text{px}$)**: 3 products per row.
  - **Mobile ($\le 640\text{px}$)**: 2 products per row.
  - **Ultra-Narrow Devices ($\le 340\text{px}$)**: 1 product per row.
- **Compact Card Geometry**:
  - Image height reduced to 165px (desktop), 145px–150px (tablet), and 125px (mobile).
  - Compact padding (12px 14px on desktop, 8px 10px on mobile).
  - Streamlined variant pills and action buttons (+ Add to Bag & View Details).
  - Reclaimed card space by removing distracting top overlay badges.
- **Horizontal Category Filter Chips**:
  - 10 distinct, instant-action category chips: `All`, `Fish`, `Birds`, `Fish Food`, `Bird Food`, `Tanks`, `Fish Bowls`, `Imported Tanks`, `Bird Accessories`, `Aquarium Accessories`.
  - Horizontally scrollable with smooth touch momentum on mobile screens, avoiding multi-line wrapping.
- **Clean 12-Item Pagination (Load More)**:
  - Displays 12 products on initial load instead of rendering all 33 products at once, cutting initial catalog height by ~75%.
  - Clean "Load More Products" button progressively adds 12 items per click.
  - Shows dynamic counter: e.g. "Showing 12 of 33 products" with completion indicator ("✓ All 33 products loaded").
  - Category switching and search queries reset the pagination limit back to 12.
- **Search & Sort Integration**:
  - Real-time instant search input filtering by product name, variant, and description.
  - Sort dropdown options: Featured, Price: Low to High, Price: High to Low, Name: A to Z.
  - Cohesive synergy: Category filters, search keywords, sorting, and pagination work seamlessly together.

---

## 🔍 Product Details Modal Architecture & Image Presentation
The product quick-view modal layout has been implemented following the exact reference design:
- **Dramatically Larger Left Image Section (~50% Width & FULL Modal Height)**:
  - The left image column (`.modal-media-col`) spans 50% of the desktop modal width and stretches to the **FULL available height of the modal** via `.product-modal { height: min(680px, 90vh); display: flex; overflow: hidden; }` and `.modal-media-col { height: 100% !important; align-self: stretch !important; }`.
  - Both columns stretch to the exact same full height, completely eliminating any empty white space or void below the image.
  - The image inside uses `width: 100%; height: 100%; object-fit: contain; object-position: center;`, scaling to the maximum possible dimension while remaining vertically and horizontally centered.
- **Uncropped & Centered (`object-fit: contain`)**:
  - `object-fit: contain` with `object-position: center` ensures the entire product silhouette (complete fins, tail spreads, feathers, tank glass) is 100% visible with natural proportions.
- **Deep High-Contrast Studio Backdrop**:
  - Encased in a seamless deep aquatic black background (`#020813`) with subtle border styling, allowing fish, birds, and tanks to pop with studio-grade vibrancy in both Dark and Light themes.
- **Right Information & Action Layout**:
  - Category eyebrow in vibrant cyan (`AQUARIUM FISH`).
  - Bold product title, muted subtitle, and inline price/stock indicators.
  - Interactive variant selector with clear active pill highlight.
  - Structured key-value technical specifications table.
  - Right details column features internal scrolling (`overflow-y: auto;`) with custom slim scrollbar so content never overflows the viewport.
  - Stacked full-width pill action buttons: `Add to Bag →` (ocean blue pill) and `WhatsApp Enquire` (vibrant green pill with WhatsApp icon).
- **Responsive Stacking**:
  - **Desktop ($1024\text{px}+$, including $1366\text{px}$, $1440\text{px}$, and $1920\text{px}$)**: 50/50 two-column full-height layout.
  - **Tablet ($641\text{px}–992\text{px}$)**: Clean single-column vertical stack with `height: 320px` contain-fitted media.
  - **Mobile ($\le 768\text{px}$ / $\le 480\text{px}$)**: Single-column vertical stack with `height: 220px–230px` media.
  - **Ultra-Narrow ($\le 340\text{px}$)**: `height: 200px` media.
- **Universal Application**:
  - Applies consistently across all 34 products in the store without altering product data, pricing, variants, cart, or WhatsApp fulfillment.

---

## 🖥️ Desktop & PC Responsiveness Architecture
The desktop experience is engineered and tested across 1024px, 1280px, 1366px, 1440px, 1600px, and 1920px viewports:
- **Desktop Navbar**:
  - Balanced spacing (`gap: 18px–28px`), zero wrapping, logo strictly left-aligned, right header controls (search, cart, theme switcher) aligned.
  - Shop Dropdown Mega Menu with safe hover bridge, automatic viewport clamping, and full `Escape` keyboard closure.
- **Hero Section**:
  - Balanced 2-column grid (`1.15fr 0.85fr`) with fluid typography, aligned CTAs, and safe coordinates for floating 3D micro-badges.
- **Category Grid**:
  - Symmetrical 4-column desktop grid (2 rows of 4 = 8 categories) across all desktop sizes ($\ge 1024\text{px}$), eliminating stranded cards.
- **Product Catalogue**:
  - 4-column grid on standard/large desktop screens ($993\text{px}–1399\text{px}$), 5-column grid on wide screens ($\ge 1400\text{px}$), 3-column grid on tablets ($641\text{px}–992\text{px}$).
  - Uniform card dimensions with clamped titles, fixed subtitle slots, and bottom-anchored price/action buttons.
- **Content & Information Accuracy**:
  - Business details strictly aligned with confirmed data: Open daily until 10 PM, 4.4★ Google Rating (516 reviews), retail shopping & doorstep delivery.
  - Removed unsupported claims (such as unverified founding years, unverified 100% guarantees, and unconfirmed opening hours).
  - Replaced fabricated testimonial personas with authentic Google customer review satisfaction themes and direct link to verified Google Maps reviews.

---

## 🚀 Deployment (Static Vercel Deployment)
The project contains zero backend dependencies and deploys directly onto **Vercel**:
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository in your [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Other** / Standard HTML.
4. Output Directory: `./` (Root).
5. Click **Deploy**.
