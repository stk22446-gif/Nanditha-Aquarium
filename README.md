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
  - 4-column grid on standard/large desktop screens ($\ge 1200\text{px}$), 3-column grid on medium laptops (993px–1199px, including 1024px).
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
