# Font Files

This folder contains the custom fonts used in the Elevate Vape & Market website.

## Required Font Files

### BBH Sans Hegarty
- ✅ `BBHSansHegarty-Regular.ttf` (already included)

### DM Sans
You need to download the following DM Sans font files and place them in this folder:

- `DMSans-Regular.ttf` (Weight: 400)
- `DMSans-Medium.ttf` (Weight: 500)
- `DMSans-SemiBold.ttf` (Weight: 600)
- `DMSans-Bold.ttf` (Weight: 700)

## Where to Download DM Sans

**Option 1: Google Fonts**
1. Visit: https://fonts.google.com/specimen/DM+Sans
2. Click "Download family"
3. Extract the ZIP file
4. Copy the `.ttf` files from the `static/` folder to this directory

**Option 2: GitHub**
1. Visit: https://github.com/googlefonts/dm-sans
2. Navigate to the `fonts/` directory
3. Download the required `.ttf` files

## File Structure
```
public/fonts/
├── BBHSansHegarty-Regular.ttf  ✅
├── DMSans-Regular.ttf           ⬜ (download needed)
├── DMSans-Medium.ttf            ⬜ (download needed)
├── DMSans-SemiBold.ttf          ⬜ (download needed)
├── DMSans-Bold.ttf              ⬜ (download needed)
└── README.md
```

## Why Local Fonts?

Using local font files instead of Google Fonts CDN provides:
- ✅ Faster page load times
- ✅ Better privacy (no external requests)
- ✅ Offline functionality
- ✅ More control over font loading


