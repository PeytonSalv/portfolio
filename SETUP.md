# Portfolio Setup Guide

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## ✅ Configuration Checklist

### 1. Personal Information

Update these files with your information:

#### `app/layout.tsx`
- [ ] Replace `"Your Name"` with your actual name
- [ ] Update `metadataBase` URL to your domain
- [ ] Update Open Graph URLs
- [ ] Add your Twitter handle (`@yourusername`)

#### `app/page.tsx`
- [ ] Update hero section name (line ~113)
- [ ] Update social media links (GitHub, LinkedIn, email)
- [ ] Update stats data with your actual numbers
- [ ] Replace experience data with your work history
- [ ] Add your real projects to `projectsData`
- [ ] Update skills and technologies

#### `components/ui/footer.tsx`
- [ ] Update social links
- [ ] Replace "Your Name" with your name

#### `components/ui/loading-screen.tsx`
- [ ] Change the "P" to your initial

### 2. SEO & Social Sharing

#### Create OG Image
Create a `1200x630px` image for social sharing:
- Save as `public/og-image.png`
- Should include your name and tagline
- Use your brand colors (primary: #6366f1, accent: #8b5cf6)

#### Favicon Setup
You need to create and add these icon files to the `public/` directory:

**Required files:**
- `favicon.ico` (32x32px)
- `favicon-16x16.png` (16x16px)
- `favicon-32x32.png` (32x32px)
- `apple-touch-icon.png` (180x180px)

**Easy way to generate:**
1. Visit [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload a logo or create text-based icon
3. Download the generated files
4. Place them in the `public/` folder

### 3. Email Configuration

The contact form is set up but needs an email service. Choose one:

#### Option A: Resend (Recommended - Free tier available)

1. Install Resend:
```bash
npm install resend
```

2. Get API key from [resend.com](https://resend.com)

3. Create `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

4. Uncomment the Resend code in `app/api/contact/route.ts` (lines ~27-43)

5. Update the email addresses:
   - `from`: Use your verified domain or `onboarding@resend.dev`
   - `to`: Your email address

#### Option B: Nodemailer (Self-hosted)

1. Install Nodemailer:
```bash
npm install nodemailer
```

2. Create `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
```

3. Uncomment the Nodemailer code in `app/api/contact/route.ts` (lines ~46-71)

#### Option C: EmailJS (No backend needed)

Visit [emailjs.com](https://www.emailjs.com/) and follow their setup guide.
Update the contact form component directly.

### 4. Domain & Deployment

#### Update URLs
Replace `https://yourwebsite.com` in:
- `app/layout.tsx` (metadata)
- `app/sitemap.ts`
- `public/robots.txt`

#### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import to [Vercel](https://vercel.com).

#### Environment Variables
If using Resend or SMTP, add environment variables in Vercel:
1. Go to Project Settings → Environment Variables
2. Add your `RESEND_API_KEY` or SMTP credentials
3. Redeploy

### 5. Analytics (Optional)

#### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

#### Google Analytics
Add to `app/layout.tsx` in the `<head>`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

## 🎨 Customization

### Colors
Update in `app/globals.css`:
```css
:root {
  --primary: #6366f1;  /* Main brand color */
  --accent: #8b5cf6;   /* Accent color */
}
```

### Fonts
Currently using Geist Sans and Geist Mono. To change:
1. Update imports in `app/layout.tsx`
2. Visit [Google Fonts](https://fonts.google.com) for alternatives

## 📝 Content Tips

### Projects
For each project in `projectsData`:
- Use descriptive, benefit-focused descriptions
- Include 3-5 relevant tech stack items
- Add working demo and GitHub links
- Use different gradient colors for visual variety

### Experience
- Focus on achievements and impact
- Use numbers and metrics
- Keep descriptions concise

### About Section
- Write in first person
- Show personality
- Highlight what makes you unique

## 🐛 Troubleshooting

**Contact form not sending?**
- Check console for errors
- Verify API key in environment variables
- Check email service logs

**Icons not showing?**
- Ensure icon files are in `public/` folder
- Clear browser cache
- Check file names match exactly

**Slow performance?**
- Reduce blur amounts in glass morphism
- Disable custom cursor if needed
- Check browser dev tools performance tab

## 📚 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Smooth Scroll:** Lenis

## 🆘 Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

Good luck with your portfolio! 🚀
