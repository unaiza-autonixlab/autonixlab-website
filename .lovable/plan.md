
# Add System Screenshots to Case Study Cards

## What's Changing
Permanently embedding your 3 uploaded n8n workflow screenshots into the Deployed Systems cards so they show on the published site.

## Screenshot Mapping
- **Compete IQ** -- brand_brain_ss.png (Brand Intelligence Scraping Agent)
- **Lead Score** -- blog_post_ss.png (Educational Content Pipeline)
- **The Lead Machine** -- Screenshot_2026-03-01_173002.png (Final Content Calendar Generator)

## Steps

1. **Copy the 3 images** from chat uploads into `src/assets/` folder
2. **Update `CaseStudyCards.tsx`**:
   - Import the 3 images as ES6 modules
   - Set each case study's `image` field to the imported asset
   - Remove the "click to upload" UI and file input logic
   - Display the hardcoded image in the card front instead

## Technical Details
- Images go in `src/assets/` for proper Vite bundling and optimization
- The `FlipCard` component will be simplified: remove `useState` for `uploadedImage`, remove `useRef` for file input, remove `handleImageUpload` function
- The image area will just render an `<img>` tag with the imported asset
- The same cleanup applies to the `CaseStudy.tsx` detail page hero image area (will use the matching screenshot there too)
