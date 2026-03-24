# SSR vs CSR Analysis

By Siri Tell

This analysis compares **Server-Side Rendering (SSR)** and **Client-Side Rendering (CSR)** implementations of my restaurant review app, based on real Lighthouse testing, including implemented changes.

---

## Performance

**Original scores (Lighthouse):**

* SSR: 76
* CSR: 83

**Issues identified:**

* Large images causing slow Largest Contentful Paint (LCP).
* Render-blocking requests (Google Fonts).

**Changes implemented:**

* Resized images to match display dimensions and compressed them without noticeable quality loss.
* Added `preload` for Google Fonts to improve initial render speed.

**New scores (Lighthouse):**

* SSR: 99
* CSR: 100

**Observations:**

* Resizing images drastically reduced download size (~3 MB per image saved) and improved perceived load time.
* Preloading fonts decreased render-blocking and made text appear faster.
* SSR still shows content immediately because the first card is in the HTML.
* CSR now executes JS efficiently, so perceived speed closely matches SSR.

---

## SEO

**Original scores (Lighthouse):**

* SSR: 91
* CSR: 91

**Issues identified:**

* Missing meta description.
* Ensuring headings and content are structured for crawlers.

**Changes implemented:**

* Added `<meta name="description" content="A small guide to the best Asian restaurants in Stockholm">`.
* Verified heading hierarchy: `<h1>` for main title, `<h2>` for subtitle, `<h3>` for restaurant names; addresses and standouts as `<p>` elements.

**New scores (Lighthouse):**

* SSR: 100
* CSR: 100

**Observations:**

* SSR content is fully available in the initial HTML, making it immediately indexable by search engines.
* CSR content relies on JS execution but now passes SEO checks on modern crawlers.
* Both implementations maintain clear semantic structure, improving accessibility and crawler interpretation.

---

## User Experience

**Original observations:**

* SSR: Content visible immediately, no dependency on JS.
* CSR: Blank page until JS executes, “Loading…” visible, as well as “Load More” button.

**Changes implemented:**

* “Load More” button hidden while loading to prevent confusion.
* Optimised image delivery to improve LCP.

**New observations:**

* SSR: Page loads quickly; first restaurant card visible immediately.
* CSR: Once JS executes, the first restaurant card replaces the loading message; interaction matches SSR.

**Dependency on JavaScript:**

* SSR: None for initial content.
* CSR: Required for all content to appear, but visual cues like the “Loading…” message improve user understanding.

**Reliability:**

* SSR is robust: content visible even if JS fails.
* CSR depends on JS; without it, users see only the loading message, but once JS runs, the UI is fully functional.

---

## Summary

Both SSR and CSR implementations now perform efficiently, have fully indexable content, and provide a readable, functional UI.

* **SSR:** Faster initial load, immediate visibility, more reliable if JS fails, best for SEO and perceived speed.
* **CSR:** Flexible, demonstrates dynamic content generation, requires JS for first content, slightly slower perceived load before JS runs.

**Implemented optimisations** — image resizing and font preloading — significantly improved performance, highlighting how resource management and front-end optimisation affect both perceived and measured performance.