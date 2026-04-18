# Srivatsala Elegance - PRD

## Original Request
Repo: https://github.com/tejanaik24/srivatsala-elegance  
User: "many slides are empty without photos — add related Andhra + modern jewellery images in chose cards, make it more premium"

## Implemented (2026-04-18)
- Cloned repo into `/app/frontend` (Vite + React + TS)
- Configured Vite on port 3000, added `start` script
- Replaced placeholder letter initials in **Categories (Our Collections)** with real jewellery photos (rings, necklaces, bangles, earrings, chains, bridal sets, silver, pendants, mangalsutra, anklets, vaddanam, kasulaperu)
- Replaced empty **Andhra Traditional Designs** cards with full-bleed jewellery imagery + cinematic gradient overlay, gold headline, animated rose-gold accent line, slow zoom-on-hover. Cards now have 4:5 premium aspect ratio.
- Used existing local assets (vaddanam, kasulaperu, jhumka, bangles, silver, bridal-hero) + curated Unsplash photos for the rest.
- Added `data-testid` attributes to all cards.

## Files Modified
- `/app/frontend/src/components/site/Categories.tsx`
- `/app/frontend/src/components/site/AndhraTraditional.tsx`
- `/app/frontend/vite.config.ts`
- `/app/frontend/package.json` (added `start` script)

## Backlog / Future
- Add hero-area Srivatsala branded imagery swaps
- Wire category buttons to filter Signature Pieces
- Add lightbox/detail modal on Andhra Traditional card click
