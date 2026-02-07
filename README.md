# CalcDesk – Indian Utility Tools

Static, SEO-optimized utility website for Indian users. Seven tool pages (salary in-hand, CTC breakup, exam eligibility, age, wedding cost, unit converter, BMI) plus About, Contact, Privacy. No server, APIs, or live data.

**Current deployment:** GitHub Pages (no custom domain).  
**Future domain:** CalcDesk.in — commented references kept in code for when you add the domain.

👉 **See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step GitHub Pages deploy and how to switch to calcdesk.in later.**

## Structure

```
CalcDesk/
├── index.html              # Homepage (tool list)
├── about.html, contact.html, privacy-policy.html
├── sitemap.xml, robots.txt, .nojekyll
├── DEPLOYMENT.md           # Deploy + calcdesk.in switch guide
├── css/
│   └── styles.css
├── js/
│   └── nav.js
├── salary-in-hand-calculator/
├── ctc-breakup-calculator/
├── exam-eligibility-checker/
├── age-calculator-india/
├── wedding-cost-calculator/
├── unit-converter-india/
└── bmi-calculator-india/
```

## URLs (GitHub Pages – replace `your-username` with your GitHub username)

- `https://your-username.github.io/CalcDesk/` – Home
- `https://your-username.github.io/CalcDesk/salary-in-hand-calculator/` – Salary In-Hand
- `https://your-username.github.io/CalcDesk/ctc-breakup-calculator/` – CTC Breakup
- `https://your-username.github.io/CalcDesk/exam-eligibility-checker/` – Exam Eligibility
- `https://your-username.github.io/CalcDesk/age-calculator-india/` – Age Calculator
- `https://your-username.github.io/CalcDesk/wedding-cost-calculator/` – Wedding Cost
- `https://your-username.github.io/CalcDesk/unit-converter-india/` – Unit Converter
- `https://your-username.github.io/CalcDesk/bmi-calculator-india/` – BMI Calculator
- `https://your-username.github.io/CalcDesk/about.html` – About
- `https://your-username.github.io/CalcDesk/contact.html` – Contact
- `https://your-username.github.io/CalcDesk/privacy-policy.html` – Privacy Policy
- `https://your-username.github.io/CalcDesk/sitemap.xml` – Sitemap
- `https://your-username.github.io/CalcDesk/robots.txt` – Robots

## URLs (when using calcdesk.in – for reference, see DEPLOYMENT.md)

- `https://calcdesk.in/` – Home, and same paths as above under calcdesk.in

## Local testing

**Do not open HTML files directly** (e.g. `file:///...`) — links and paths need a real server. Use one of these:

### Option A: XAMPP (you already have the project in htdocs)

1. Start **Apache** in the XAMPP Control Panel.
2. In your browser go to: **`http://localhost/CalcDesk/`**
3. Use the navigation to open each tool, or visit:
   - `http://localhost/CalcDesk/salary-in-hand-calculator/`
   - `http://localhost/CalcDesk/ctc-breakup-calculator/`
   - `http://localhost/CalcDesk/exam-eligibility-checker/`
   - `http://localhost/CalcDesk/age-calculator-india/`
   - `http://localhost/CalcDesk/wedding-cost-calculator/`
   - `http://localhost/CalcDesk/unit-converter-india/`
   - `http://localhost/CalcDesk/about.html`
   - `http://localhost/CalcDesk/contact.html`
   - `http://localhost/CalcDesk/privacy-policy.html`

### Option B: Simple HTTP server (no XAMPP)

From a terminal, go to the **CalcDesk** folder and run:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CalcDesk
npx serve .
```

Then open **`http://localhost:3000`** (or the URL shown in the terminal). Click through the tools and check that forms and results work.

**Alternative (Python 3):**

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/CalcDesk
python3 -m http.server 8080
```

Then open **`http://localhost:8080`**.

## Deployment (GitHub Pages – primary)

1. **Before first push:** In the repo, replace `your-username` with your GitHub username in: `sitemap.xml`, `robots.txt`, and every HTML file (canonical and og:url). See [DEPLOYMENT.md](DEPLOYMENT.md).
2. Push to a repo named `CalcDesk` (or update the placeholder to your repo name).
3. GitHub → **Settings → Pages** → Source: **Deploy from branch** → Branch: **main** → Folder: **/ (root)**.
4. Site will be at `https://YOUR_USERNAME.github.io/CalcDesk/`.

**Other hosts:** Netlify/Vercel: same files; set canonical/og:url to your live URL. When you buy **calcdesk.in**, follow the “When you buy calcdesk.in” section in [DEPLOYMENT.md](DEPLOYMENT.md).

## SEO

Each page includes:

- Meta title (50–60 chars) and description (140–160 chars)
- `meta name="robots" content="index, follow"` and `theme-color`
- Canonical URL and Open Graph tags (homepage)
- Semantic HTML, H1, and short SEO copy (300–500 words)
- JSON-LD: WebSite/Organization (home), WebApplication and FAQPage on tool pages
- Internal links to related tools and Privacy Policy
- `sitemap.xml` and `robots.txt` for Search Console

## Google Search Console

1. Deploy the site and verify ownership at [Google Search Console](https://search.google.com/search-console).
2. Submit **Sitemap:** `https://YOUR_USERNAME.github.io/CalcDesk/sitemap.xml` (or `https://calcdesk.in/sitemap.xml` when using custom domain).
3. Use **URL Inspection** to check indexing. All pages are static and indexable without JavaScript.
4. Monitor Core Web Vitals (mobile-first, lightweight CSS/JS).

## Google AdSense (monetization)

- **Privacy Policy** is required and covers: data we do not collect, cookies, third-party advertising (Google AdSense), opt-out links, and contact.
- **About** and **Contact** pages are present; footer links to Privacy Policy on every page.
- **Content:** Each tool page has 300–500 words of explanatory copy, FAQs, and clear purpose.
- **User experience:** Mobile-responsive, clear navigation, no misleading content. Footer disclaimer: "Results are indicative; verify with official sources."
- After approval, add the AdSense script in `<head>` and/or use auto ads or ad units in the body. Use class `.ad-slot` with `min-height` to reserve space and reduce layout shift (CLS).
