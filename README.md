# Nirav Lad - Portfolio & Executive Resume
**Official Website:** [niravlad.com](https://niravlad.com)  
**Author:** Nirav Lad (+91-9725674245 | ladnirav35@gmail.com)  
**Role:** Senior .NET Full Stack & SQL Developer / Database Architect

---

## 🌟 Overview
This repository contains the complete personal portfolio and executive digital resume for **Nirav Lad**, built tailored for **niravlad.com**.

The website highlights 12+ years of hands-on experience in:
- **Cloud & Azure Ecosystem:** Azure SQL Database, Azure SQL Managed Instance, Azure Data Factory (ADF), Azure Blob Storage, Azure App Service, Azure Functions, Cloud Migration.
- **GitHub Actions & CI/CD:** Automated Build & Release Workflows (YAML), Automated Testing, DACPAC/SSDT Database Deployments, Continuous Delivery to Azure App Service, GitHub Pages Deployment.
- **Full-Stack .NET & Backend:** C#, .NET Core, ASP.NET MVC, Web API, Entity Framework, LINQ, Microservices.
- **Enterprise Database Engineering:** SQL Server, PostgreSQL, Oracle PL/SQL, MySQL, MongoDB, Query Tuning, Indexing, Complex Stored Procedures.
- **Data Engineering & ETL:** Automated ETL workflows, large dataset ingestion, data migration & governance.
- **Frontend & UI Development:** React.js, JavaScript (ES6+), HTML5, CSS3, Bootstrap.
- **Business Intelligence & Reporting:** Power BI, Crystal Reports, RDLC reports, automated dashboards.

---

## 📁 Project Architecture & Files

| File | Purpose |
|------|---------|
| [`index.html`](index.html) | Flagship responsive interactive portfolio with hero terminal, metrics, skills matrix, career timeline, project case studies with modal breakdowns, and interactive contact form. |
| [`resume.html`](resume.html) | Dedicated, ATS-friendly executive resume webpage with 1-click **Print / Save as PDF** (`window.print()`) and print-optimized `@media print` rules. |
| [`style.css`](style.css) | Custom modern CSS design system with HSL variables, glassmorphism, responsive grids, and dark/light mode support. |
| [`script.js`](script.js) | Interactive features: project tag filtering, modal dialog, counter animations, clipboard copying, form mailto handler, and theme switcher. |
| [`serve.js`](serve.js) | Zero-dependency local Node.js static HTTP preview server. |

---

## 🚀 How to Run Locally

### Using Node.js:
```bash
node serve.js
```
Then navigate to:
- Portfolio: `http://localhost:3000/`
- Printable Resume: `http://localhost:3000/resume.html`

### Or open directly in any browser:
Simply double-click or drag-and-drop `index.html` or `resume.html` into Chrome, Edge, Firefox, or Safari.

---

## 🌐 Deploying to `niravlad.com`

### Option 1: GitHub Pages (Free & Automatic)
1. Push this folder to a GitHub repository (e.g. `github.com/niravlad/niravlad.github.io`).
2. Go to **Settings > Pages > Build and deployment**.
3. Under **Custom domain**, enter `niravlad.com`.
4. Point your domain DNS records (A Records to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, etc., and CNAME to your username).

### Option 2: Vercel / Netlify
1. Connect repository or run `npx vercel` / `npx netlify deploy --prod`.
2. Add custom domain `niravlad.com` in project settings.

### Option 3: Traditional Web Host / VPS / cPanel (Hostinger, GoDaddy, AWS S3, Azure Blob)
- Upload the contents of this folder (`index.html`, `resume.html`, `style.css`, `script.js`) to your `public_html` or web root directory.
