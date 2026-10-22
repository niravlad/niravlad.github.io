/**
 * Nirav Lad Portfolio & Resume Interactive Engine
 * niravlad.com
 */

// Project Case Studies Data
const projectDatabase = {
  1: {
    id: 1,
    title: "Enterprise Healthcare Cloud Data Warehouse & ADF Engine",
    client: "InfuCare Rx Inc. (USA)",
    category: "database",
    categoryLabel: "Azure SQL, Cloud ETL & GitHub Actions",
    summary: "Architected and optimized high-performance, HIPAA-compliant enterprise Azure SQL databases and ADF pipelines for patient and prescription workflows, handling millions of records daily.",
    problem: "The healthcare system experienced high latency during peak transaction hours, slow nightly batch ETL cycles, and indexing bottlenecks across multi-terabyte patient prescription tables.",
    solution: "Migrated workloads to Azure SQL Managed Instance, designed automated Azure Data Factory (ADF) pipelines, refactored high-load stored procedures, and automated schema deployments using GitHub Actions CI/CD.",
    architecture: [
      "Azure SQL Database & Managed Instance with Auto-scaling and Read Replicas",
      "Azure Data Factory (ADF) workflows for cross-platform EHR/billing data ingestion",
      "GitHub Actions automated CI/CD release workflows for database schema migrations (DACPAC / SSDT)",
      "Dynamic indexing, DMV monitoring, and locking/deadlock mitigation routines",
      "Automated data integrity checks and strict HIPAA-compliant audit logging"
    ],
    tech: ["Azure SQL", "GitHub Actions", "Azure Data Factory (ADF)", "SQL Server", "T-SQL", "Stored Procedures", "DACPAC"],
    impact: "Cut nightly batch processing time by 65%, reduced peak CPU utilization by 42%, and automated database deployment cycle times down to minutes."
  },
  2: {
    id: 2,
    title: "Global Diamond Trading & Multi-Vendor Inventory Portal",
    client: "Lynx Softech",
    category: "fullstack",
    categoryLabel: "Full-Stack, Cloud & GitHub Actions",
    summary: "Led the development of a high-throughput B2B diamond trading portal integrating global gemstone exchange APIs with instant faceted search.",
    problem: "Brokers and merchants faced severe delays when querying millions of multi-attribute certified diamond records with dynamic pricing adjustments and real-time currency conversions.",
    solution: "Built a microservices-inspired architecture with .NET Core Web API, React.js frontend, and a tuned PostgreSQL cluster, deployed via GitHub Actions CI/CD onto Azure App Services.",
    architecture: [
      "React.js Single Page Application with dynamic multi-attribute facet filtering",
      ".NET Core REST APIs with CQRS pattern and token authentication",
      "GitHub Actions multi-stage CI/CD build & release workflow with automated testing",
      "PostgreSQL database with custom JSONB and B-Tree indexing for diamond grading criteria",
      "Azure App Service deployment with auto-scaling rules and Application Insights monitoring"
    ],
    tech: ["GitHub Actions", "Azure App Service", "React.js", ".NET Core API", "PostgreSQL", "C#", "REST APIs", "Redis"],
    impact: "Supported 100,000+ daily gemstone searches, handled 2M+ API calls daily with sub-80ms response times, achieving 99.98% system uptime."
  },
  3: {
    id: 3,
    title: "University Enterprise Management System & Analytics Suite",
    client: "Uka Tarsadia University",
    category: "fullstack",
    categoryLabel: "Enterprise ERP & BI",
    summary: "Engineered campus-wide digital ERP powering admissions, exam scheduling, fee collection, and executive Power BI analytics for 15,000+ students.",
    problem: "University departments worked in silos with disconnected legacy systems, delayed manual fee reconciliations, and slow semester grade publishing cycles.",
    solution: "Created an integrated full-stack ASP.NET MVC and SQL Server platform coupled with Power BI and RDLC/Crystal Reports automated delivery workflows.",
    architecture: [
      "ASP.NET MVC & C# backend with role-based access control (RBAC)",
      "High-availability SQL Server database with transactional integrity for financial audits",
      "Automated Power BI executive dashboards for enrollment, attendance, and revenue tracking",
      "REST & SOAP service integration for online payment gateways and biometric attendance"
    ],
    tech: ["ASP.NET MVC", "C#", "SQL Server", "Power BI", "Crystal Reports", "RDLC", "REST/SOAP"],
    impact: "Automated 40+ manual campus administrative workflows, eliminated fee reconciliation errors, and accelerated semester grade publishing from 3 weeks to 48 hours."
  },
  4: {
    id: 4,
    title: "Enterprise Query Performance Tuning & Optimization Engine",
    client: "InfuCare Rx Inc. (USA)",
    category: "database",
    categoryLabel: "Database Performance Tuning",
    summary: "Engineered deep diagnostic routines and query optimization frameworks to eliminate index fragmentation and deadlock spikes in clinical databases.",
    problem: "Complex analytic queries executed by cross-functional teams were causing blocking locks and high tempdb spills during peak clinical hours.",
    solution: "Analyzed execution plans, refactored non-SARGable WHERE predicates, replaced cursor routines with set-based operations, and implemented covering indexes.",
    architecture: [
      "Extended Events and SQL Profiler telemetry tracking",
      "Comprehensive index defragmentation and statistics update schedules",
      "Refactored complex stored procedures, scalar UDFs into inline table-valued functions",
      "Query Store baseline analysis for proactive regression detection"
    ],
    tech: ["SQL Server", "T-SQL", "Query Store", "Extended Events", "Execution Plans", "Indexing Strategies"],
    impact: "Zero critical deadlock incidents post-deployment; sustained 99.9% database availability across multiple US regional hubs."
  },
  5: {
    id: 5,
    title: "Diamond Market Real-Time Integration REST API Gateway",
    client: "Lynx Softech",
    category: "backend",
    categoryLabel: "Backend & Web APIs",
    summary: "Designed and implemented robust, secure RESTful micro-endpoints enabling third-party merchants to synchronize inventories seamlessly.",
    problem: "Legacy diamond vendor feeds had disparate data standards, lack of rate-limiting, and inconsistent data validation leading to dirty database imports.",
    solution: "Engineered a hardened API gateway with .NET Core, Swagger documentation, JWT authentication, request throttling, and unified data transformation pipelines.",
    architecture: [
      ".NET Core Web API with clean onion architecture",
      "Custom middleware for request sanitization, error interception, and rate-limiting",
      "Entity Framework Core with optimized compiled queries and Dapper for bulk operations",
      "Automated unit testing with xUnit and CI/CD integration"
    ],
    tech: [".NET Core", "C#", "Entity Framework Core", "Dapper", "Swagger", "JWT", "REST API"],
    impact: "Successfully integrated 25+ global diamond merchant vendors, reducing feed synchronization discrepancies by 98%."
  },
  6: {
    id: 6,
    title: "Automated Institutional Reporting & BI Pipeline",
    client: "Uka Tarsadia University",
    category: "bi",
    categoryLabel: "BI & Data Engineering",
    summary: "Developed automated data extraction and visualization pipelines transforming raw institutional transactional data into interactive BI insights.",
    problem: "University management relied on static, outdated spreadsheets that required hours of manual collation and lacked real-time visibility into academic KPIs.",
    solution: "Built scheduled ETL pipelines that aggregated operational data into reporting data marts, feeding dynamic Power BI dashboards and auto-generated PDF reports.",
    architecture: [
      "Automated SQL Agent jobs running nightly staging and aggregation routines",
      "Power BI semantic models with DAX measures for retention, passing percentage, and fee collection",
      "Crystal Reports / RDLC engine for generating verifiable digital student transcripts",
      "Role-tailored email distribution lists for deans and department heads"
    ],
    tech: ["Power BI", "DAX", "SQL Server", "ETL Jobs", "Crystal Reports", "RDLC", "C#"],
    impact: "Provided executive leadership with single-pane-of-glass institutional metrics and saved over 120 staff hours every month."
  }
};

// Initialize DOM Events
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  initThemeToggle();
  initProjectFiltering();
  initProjectModal();
  initSkillsTabs();
  initMetricsCounter();
  initClipboardButtons();
  initContactForm();
  initMobileMenu();
});

// Navbar background on scroll
function initNavbarScroll() {
  const header = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Scroll spy
    let currentSection = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = toggleBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = toggleBtn.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
      });
    });
  }
}

// Dark/Light Theme Switching
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("nirav-theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("nirav-theme", newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggleBtn i");
  if (icon) {
    if (theme === "light") {
      icon.className = "fas fa-moon";
    } else {
      icon.className = "fas fa-sun";
    }
  }
}

// Project Filtering
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (filterVal === "all" || cardCat === filterVal) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.4s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Project Details Modal
function initProjectModal() {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalFooterClose = document.getElementById("modalFooterClose");
  const viewBtns = document.querySelectorAll(".btn-view-project");

  if (!modalOverlay) return;

  viewBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-project-id");
      const project = projectDatabase[projectId];

      if (project) {
        populateProjectModal(project);
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalFooterClose) modalFooterClose.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });
}

function populateProjectModal(project) {
  document.getElementById("modalProjectTag").textContent = `${project.client} • ${project.categoryLabel}`;
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectSummary").textContent = project.summary;
  document.getElementById("modalProjectProblem").textContent = project.problem;
  document.getElementById("modalProjectSolution").textContent = project.solution;
  document.getElementById("modalProjectImpact").textContent = project.impact;

  const archList = document.getElementById("modalProjectArchitecture");
  archList.innerHTML = project.architecture.map(item => `<li><i class="fas fa-check-circle" style="color:var(--accent-cyan); margin-right:8px;"></i>${item}</li>`).join("");

  const techContainer = document.getElementById("modalProjectTech");
  techContainer.innerHTML = project.tech.map(t => `<span class="skill-tag highlight">${t}</span>`).join("");
}

// Skills Category Tabs (Optional filtering or highlighting)
function initSkillsTabs() {
  const tabBtns = document.querySelectorAll(".skill-tab-btn");
  const skillCards = document.querySelectorAll(".skill-category-card");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const tabCategory = btn.getAttribute("data-skill-category");

      skillCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (tabCategory === "all" || category === tabCategory) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.3s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Metrics Counter Animation
function initMetricsCounter() {
  const metricNumbers = document.querySelectorAll(".metric-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach(num => {
          const target = parseInt(num.getAttribute("data-target"), 10);
          const suffix = num.getAttribute("data-suffix") || "";
          let count = 0;
          const duration = 1500;
          const stepTime = 30;
          const increment = Math.ceil(target / (duration / stepTime));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            num.textContent = count + suffix;
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsStrip = document.querySelector(".metrics-strip");
  if (metricsStrip) {
    observer.observe(metricsStrip);
  }
}

// Copy to Clipboard Buttons
function initClipboardButtons() {
  const copyBtns = document.querySelectorAll(".btn-copy-channel");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const valueToCopy = btn.getAttribute("data-copy");
      if (valueToCopy) {
        navigator.clipboard.writeText(valueToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          btn.style.background = "var(--accent-emerald)";
          btn.style.color = "#042f2e";

          showToast(`Copied to clipboard: ${valueToCopy}`);

          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "";
            btn.style.color = "";
          }, 2000);
        }).catch(err => {
          showToast(`Failed to copy: ${err}`);
        });
      }
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const subject = document.getElementById("formSubject").value.trim() || "Inquiry from niravlad.com";
    const message = document.getElementById("formMessage").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.");
      return;
    }

    // Compose mailto fallback link and notify user
    const mailtoUrl = `mailto:ladnirav35@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Nirav,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    showToast("Launching email client to send message to Nirav Lad...");
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

// Toast Notification Utility
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fas fa-info-circle" style="color:var(--accent-cyan)"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
