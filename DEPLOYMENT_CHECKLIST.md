# Pre-Launch Deployment Checklist

## ✅ COMPLETED - Critical SEO Fixes

### 1. Build Error Fixed
- [x] Fixed TypeScript error in calculator page (`shouldReduceMotion` hook)
- [x] Build now completes successfully

### 2. Canonical URLs Added
- [x] Added `metadataBase` to root layout
- [x] Added canonical URLs to all major pages:
  - Homepage (/)
  - About, Contact, Insights
  - Property Finance (parent + all 3 services)
  - Business Finance (parent + all 2 services)
  - Case Studies, Our Process, Calculator
  - Privacy Policy, Terms, Complaints

### 3. Structured Data (Schema.org)
- [x] Added Organization schema to root layout with:
  - Financial Service type
  - Company details
  - FCA credentials
  - NACFB & FIBA memberships
  - Contact information
  - Address (placeholder)

### 4. Metadata Improvements
- [x] Created layout.tsx files for all client component pages
- [x] Each service page now has proper SEO metadata
- [x] All pages have unique titles and descriptions

### 5. Environment Configuration
- [x] Created .env.example with all required variables
- [x] Documented NEXT_PUBLIC_SITE_URL importance

---

## ⚠️ REQUIRED BEFORE LAUNCH

### Critical - Production Data
Update the following in `src/lib/constants.ts`:

1. **Contact Details** (Lines 5-11):
   ```typescript
   phone: "01234 567890",        // ⚠️ UPDATE
   email: "enquiries@...",       // ⚠️ VERIFY
   address: {
     line1: "123 Finance Street", // ⚠️ UPDATE
     line2: "Business District",  // ⚠️ UPDATE
     city: "London",              // ⚠️ UPDATE
     postcode: "EC1A 1AA",        // ⚠️ UPDATE
   }
   ```

2. **FCA Registration** (Line 17):
   ```typescript
   firmReferenceNumber: "XXXXXX", // ⚠️ CRITICAL: Get AR FRN
   ```

3. **ICO Registration** (Line 22):
   ```typescript
   registrationNumber: "XXXXXXXX", // ⚠️ CRITICAL: Get ICO number
   ```

### Critical - Environment Variables
Set in your deployment platform (Vercel, Netlify, etc.):

```bash
# MOST IMPORTANT - Required for SEO
NEXT_PUBLIC_SITE_URL=https://aegisfinance.co.uk

# Required for database
NEXT_PUBLIC_CONVEX_URL=your-convex-url
CONVEX_DEPLOYMENT=your-deployment-name

# Required for email notifications
RESEND_API_KEY=your-api-key
NOTIFICATION_EMAIL=enquiries@aegisfinance.co.uk

# Optional
BOOSTKIT_WEBHOOK_URL=your-webhook-url
```

### Post-Deployment - Verify
After deploying, check:

1. **Sitemap Generation**:
   - Visit: `https://aegisfinance.co.uk/sitemap.xml`
   - Verify all URLs use `https://aegisfinance.co.uk` (not localhost)

2. **Robots.txt**:
   - Visit: `https://aegisfinance.co.uk/robots.txt`
   - Verify sitemap URL is correct
   - Verify host is correct

3. **Submit to Search Engines**:
   - [ ] Submit sitemap to Google Search Console
   - [ ] Submit sitemap to Bing Webmaster Tools

4. **Test Structured Data**:
   - Use: https://search.google.com/test/rich-results
   - Test homepage for Organization schema
   - Verify no errors

5. **Test Meta Tags**:
   - Use: https://www.opengraph.xyz/
   - Check homepage and key service pages
   - Verify titles, descriptions, canonical URLs

---

## 📋 NICE TO HAVE (Week 1-2)

### Open Graph Images
Currently no OG images are set. Create and add:

1. Default OG image (1200x630px): `/public/og-image.jpg`
2. Service-specific images:
   - `/public/og-bridging-finance.jpg`
   - `/public/og-development-finance.jpg`
   - `/public/og-btl.jpg`

Then update metadata in layout files:
```typescript
openGraph: {
  // ... existing
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Aegis Finance',
    },
  ],
}
```

### Additional Schema Types
Consider adding:

1. **FAQPage Schema** to service pages with FAQs
2. **BreadcrumbList Schema** for navigation
3. **Service Schema** for each finance product
4. **LocalBusiness Schema** (if physical office confirmed)

### Content
- [ ] Publish first 5-10 blog posts to /insights
- [ ] Add real case study details (currently placeholder)
- [ ] Create glossary of finance terms
- [ ] Add video content (YouTube integration)

---

## 🔧 Files Changed

### Created:
- `.env.example`
- `src/app/calculator/layout.tsx`
- `src/app/our-process/layout.tsx`
- `src/app/(services)/property-finance/bridging-finance/layout.tsx`
- `src/app/(services)/property-finance/development-finance/layout.tsx`
- `src/app/(services)/property-finance/buy-to-let/layout.tsx`
- `src/app/(services)/business-finance/asset-finance/layout.tsx`
- `src/app/(services)/business-finance/invoice-finance/layout.tsx`

### Modified:
- `src/app/layout.tsx` - Added metadataBase, canonical, Organization schema
- `src/app/calculator/page.tsx` - Fixed TypeScript error
- `src/lib/constants.ts` - Added warning comments for placeholder data
- `src/app/contact/page.tsx` - Added canonical URL
- `src/app/about/page.tsx` - Added canonical URL
- `src/app/insights/page.tsx` - Added canonical URL
- `src/app/case-studies/page.tsx` - Added canonical URL
- `src/app/privacy-policy/page.tsx` - Added canonical URL
- `src/app/terms/page.tsx` - Added canonical URL
- `src/app/complaints/page.tsx` - Added canonical URL
- `src/app/(services)/property-finance/page.tsx` - Added canonical URL
- `src/app/(services)/business-finance/page.tsx` - Added canonical URL

---

## ✅ Quick Verification Commands

```bash
# 1. Build passes
npm run build

# 2. Check sitemap after deployment
curl https://aegisfinance.co.uk/sitemap.xml

# 3. Check robots.txt
curl https://aegisfinance.co.uk/robots.txt

# 4. Test locally with production URL
NEXT_PUBLIC_SITE_URL=https://aegisfinance.co.uk npm run build
```

---

## 📊 SEO Audit Status

| Item | Status | Priority |
|------|--------|----------|
| Build errors | ✅ Fixed | Critical |
| Canonical URLs | ✅ Fixed | Critical |
| Structured data | ✅ Added | Critical |
| Sitemap config | ✅ Ready | Critical |
| Robots.txt | ✅ Ready | Critical |
| Metadata | ✅ Added | Critical |
| Contact details | ⚠️ Placeholders | Critical |
| FCA/ICO numbers | ⚠️ Placeholders | Critical |
| Environment vars | ⚠️ Not set | Critical |
| OG images | ❌ Missing | High |
| Blog content | ❌ Placeholder | Medium |
| Additional schema | ❌ Not added | Medium |

---

## Next Steps

1. **TODAY**: Update placeholder data in constants.ts
2. **TODAY**: Get FCA FRN and ICO registration numbers
3. **BEFORE DEPLOY**: Set environment variables in deployment platform
4. **IMMEDIATELY AFTER DEPLOY**: Verify sitemap/robots.txt URLs are correct
5. **DAY 1**: Submit sitemap to search engines
6. **WEEK 1**: Create OG images
7. **WEEK 1-2**: Publish initial blog content

---

**Last Updated**: 2026-01-30
**Next Review**: After production deployment
