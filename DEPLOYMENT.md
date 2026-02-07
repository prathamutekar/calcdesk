# CalcDesk – Deployment Guide

## Current setup: GitHub Pages (no custom domain)

The project is configured to run on **GitHub Pages** at:

**`https://your-username.github.io/CalcDesk/`**

Replace `your-username` with your actual GitHub username in the places listed below.

---

## Step 1: One-time replacement before first deploy

Before pushing to GitHub, do a **find-and-replace** in the whole project:

| Find | Replace with |
|------|----------------------|
| `your-username.github.io` | `YOUR_ACTUAL_GITHUB_USERNAME.github.io` |

Example: if your username is `johndoe`, replace with `johndoe.github.io`.

**Files that contain this placeholder:**
- `sitemap.xml`
- `robots.txt`
- `index.html` (canonical, og:url, JSON-LD)
- `about.html`, `contact.html`, `privacy-policy.html`
- `salary-in-hand-calculator/index.html`
- `ctc-breakup-calculator/index.html`
- `exam-eligibility-checker/index.html`
- `age-calculator-india/index.html`
- `wedding-cost-calculator/index.html`
- `unit-converter-india/index.html`
- `bmi-calculator-india/index.html`

---

## Step 2: Deploy on GitHub Pages

1. Create a new repository on GitHub named **`CalcDesk`** (or any name; if different, also replace `CalcDesk` in the placeholder with your repo name).
2. Push this project to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - CalcDesk Indian utility calculators"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/CalcDesk.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**
4. Under **Source** choose **Deploy from a branch**
5. Branch: **main**, folder: **/ (root)**
6. Save. The site will be at `https://YOUR_USERNAME.github.io/CalcDesk/`

---

## Step 3: SEO after deploy

1. **Google Search Console**  
   - Add property: `https://YOUR_USERNAME.github.io/CalcDesk/`  
   - Submit sitemap: `https://YOUR_USERNAME.github.io/CalcDesk/sitemap.xml`

2. **Verify**  
   - Open `https://YOUR_USERNAME.github.io/CalcDesk/`  
   - Click through all tools and check links and canonicals.

---

## When you buy calcdesk.in (future)

1. In every file, **replace** the active GitHub Pages URLs with the calcdesk.in URLs.
2. Use the **commented lines** that start with `<!-- calcdesk.in:` as reference; they show the calcdesk.in version.
3. **Uncomment** the calcdesk.in lines and **remove or comment** the GitHub Pages lines.
4. In `index.html`, change the brand link from `href="./"` to `href="https://calcdesk.in/"` (or `href="/"` if hosting at root).
5. Update `sitemap.xml` and `robots.txt` to use `https://calcdesk.in/`.
6. Point your domain’s DNS to GitHub Pages (or your final host) and, if using GitHub, set **Custom domain** in Pages settings to `calcdesk.in`.

---

## File checklist (GitHub Pages)

- [ ] Replace `your-username` in all files (see list in Step 1).
- [ ] Root `index.html`: brand uses `href="./"` (already set for GitHub).
- [ ] `.nojekyll` is present in the repo root (so GitHub doesn’t treat the site as Jekyll).

---

## Optional: custom domain later

When you use **calcdesk.in**:

- Add a **CNAME** file in the repo root containing: `calcdesk.in`
- In GitHub **Pages settings**, set **Custom domain** to `calcdesk.in` and enable **Enforce HTTPS**
- In your domain registrar, add the DNS records GitHub shows for the custom domain

Then switch all canonicals, og:url, sitemap, and robots to `https://calcdesk.in/` as in the commented sections.
