/* =========================================================
   EASY PORTFOLIO CONFIGURATION — EDIT YOUR DETAILS HERE
========================================================= */
const PORTFOLIO_CONFIG = {
  brandHandle: "Chris.dev",
  fullName: "Christopher Zyrus G. Pajara",
  location: "Philippines",
  email: "chrispajara193@gmail.com",
  github: "https://github.com/chrispajara193-sketch",
  linkedin: "https://linkedin.com/in/your-username",
  // Optional: Paste a Google Apps Script Web App URL to save contact messages to Google Sheets
  gasWebAppUrl: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL",
  roles: [
    "interactive web apps",
    "responsive UI/UX systems",
    "data-driven dashboards",
    "browser games & tools"
  ]
};

const SKILLS_DATA = [
  { name: "HTML5 & Semantic Markup", cat: "frontend", level: "95%", desc: "Accessible landmarks, ARIA patterns, and SEO-friendly structure." },
  { name: "Modern CSS3 & Animations", cat: "frontend", level: "92%", desc: "CSS Grid, Flexbox, custom properties, dark mode, and micro-interactions." },
  { name: "JavaScript (ES6+)", cat: "frontend", level: "90%", desc: "Async/await, DOM state management, IntersectionObserver, and OOP/FP." },
  { name: "HTML5 Canvas & Web Audio", cat: "frontend", level: "82%", desc: "60fps game loops, pixel-art sprite rendering, and procedural audio." },
  { name: "REST APIs & Fetch", cat: "data", level: "88%", desc: "Live third-party API integration, error fallbacks, and localStorage caching." },
  { name: "Chart.js & Visualization", cat: "data", level: "85%", desc: "Dynamic bar/doughnut charts, currency formatting, and CSV exports." },
  { name: "Google Apps Script (code.gs)", cat: "backend", level: "85%", desc: "Serverless CRUD APIs backed by Google Sheets with input sanitization." },
  { name: "Git, GitHub & Vercel", cat: "backend", level: "90%", desc: "Version control workflows, CI previews, and static/serverless deployment." }
];

const PROJECTS_DATA = [
  {
    id: "aetherflow",
    title: "AetherFlow — SaaS Landing Page",
    category: "ui",
    categoryLabel: "Frontend & UI/UX",
    previewClass: "preview-ui",
    previewVisual: `
      <span class="mini-badge">UI/UX + Serverless Form</span>
      <div class="mini-art">
        <div class="art-card">✦ Sprint<br/>Velocity +34%</div>
        <div class="art-card">Pricing Toggle<br/>$19/mo Yearly</div>
      </div>`,
    shortDesc: "Modern SaaS product landing page featuring a pure CSS dashboard mockup, interactive monthly/annual pricing toggle, and serverless lead capture.",
    stack: ["HTML5", "CSS3", "JavaScript", "Google Apps Script"],
    liveUrl: "https://aetherflow-saas-landing.vercel.app/",
    codeUrl: "https://github.com/your-username/aetherflow-saas-landing",
    highlights: [
      "Built an interactive dashboard preview entirely with CSS Grid/Flexbox (zero heavy screenshots).",
      "Implemented accessible FAQ accordions, scroll-reveal observers, and dynamic pricing calculations.",
      "Connected the demo request form to a Google Sheets backend (code.gs) using CORS-safe text/plain POST payloads."
    ]
  },
  {
    id: "ledgerpulse",
    title: "LedgerPulse — Multi-Currency Finance",
    category: "api",
    categoryLabel: "API & Data-Driven",
    previewClass: "preview-api",
    previewVisual: `
      <span class="mini-badge">Live FX API + Charts</span>
      <div class="mini-art">
        <div class="art-bar" style="height: 45%"></div>
        <div class="art-bar" style="height: 85%"></div>
        <div class="art-bar" style="height: 60%"></div>
        <div class="art-bar" style="height: 95%"></div>
      </div>`,
    shortDesc: "Multi-currency cashflow dashboard syncing live exchange rates from ExchangeRate-API with interactive Chart.js visuals and Google Sheets CRUD.",
    stack: ["JavaScript", "Chart.js", "ExchangeRate-API", "code.gs", "CSV Export"],
    liveUrl: "https://ledgerpulse-dashboard.vercel.app",
    codeUrl: "https://github.com/your-username/ledgerpulse-finance-dashboard",
    highlights: [
      "Integrated live currency conversion across USD, PHP, EUR, GBP, and JPY with 6-hour localStorage caching.",
      "Built debounced search, multi-criteria filtering, budget progress tracking, and one-click CSV export.",
      "Supports full Add/Read/Delete CRUD persistence via Google Apps Script or automatic offline demo mode."
    ]
  },
  {
    id: "monquest",
    title: "MonQuest: Wild Valley RPG",
    category: "game",
    categoryLabel: "Canvas Game Engine",
    previewClass: "preview-game",
    previewVisual: `
      <span class="mini-badge">HTML5 Canvas + Web Audio</span>
      <div class="mini-art">
        <div class="art-card">Lv.5 Pyrokit<br/>HP ████████ 100%</div>
        <div class="art-card">Turn Battle<br/>8 Species · Dex</div>
      </div>`,
    shortDesc: "Pokémon-inspired creature collector RPG built from scratch using HTML5 Canvas, procedural pixel-art sprites, and synthesized chiptune audio.",
    stack: ["HTML5 Canvas", "Web Audio API", "Game Loop", "localStorage"],
    liveUrl: "https://monquest-rpg.vercel.app",
    codeUrl: "https://github.com/your-username/monquest-rpg",
    highlights: [
      "Engineered a 24x18 tilemap overworld with smooth grid interpolation, collision detection, and NPC interactions.",
      "Built a turn-based combat engine with elemental type multipliers, catching mechanics, XP/leveling, and AI turns.",
      "Rendered all 8 creatures via 12x12 pixel matrices and synthesized retro SFX via Web Audio (zero external asset failures)."
    ]
  }
];

/* =========================================================
   Initialization
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initTheme();
  initMobileNav();
  initRoleRotator();
  initTerminal();
  renderSkills("all");
  renderProjects("all");
  initFilters();
  initModal();
  initScrollSpyAndReveal();
  initContactForm();
});

function applyConfig() {
  document.getElementById("navBrandName").textContent = PORTFOLIO_CONFIG.brandHandle;
  document.getElementById("heroName").textContent = PORTFOLIO_CONFIG.fullName;
  document.getElementById("githubLink").href = PORTFOLIO_CONFIG.github;
  document.getElementById("linkedinLink").href = PORTFOLIO_CONFIG.linkedin;
  document.getElementById("directEmailLink").href = `mailto:${PORTFOLIO_CONFIG.email}`;
  document.getElementById("footerCopy").textContent = `© ${new Date().getFullYear()} ${PORTFOLIO_CONFIG.fullName}. Deployed on Vercel.`;
}

/* 1. Theme Toggle */
function initTheme() {
  const saved = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  const btn = document.getElementById("themeToggle");
  btn.textContent = saved === "dark" ? "☀️" : "🌙";

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio_theme", next);
    btn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

/* 2. Mobile Menu */
function initMobileNav() {
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* 3. Smooth Role Rotator */
function initRoleRotator() {
  const el = document.getElementById("roleRotator");
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % PORTFOLIO_CONFIG.roles.length;
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = PORTFOLIO_CONFIG.roles[idx];
      el.style.opacity = "1";
    }, 220);
  }, 3000);
}

/* 4. Interactive Hero Terminal */
function initTerminal() {
  const output = document.getElementById("terminalOutput");
  const input = document.getElementById("terminalInput");
  const form = document.getElementById("terminalForm");

  function appendLine(text, cls = "out") {
    const div = document.createElement("div");
    div.className = `term-line ${cls}`;
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    appendLine(`$ ${cmd}`, "cmd");

    switch (cmd) {
      case "help":
        appendLine("Available commands: whoami, skills, projects, contact, clear");
        break;
      case "whoami":
        appendLine(`${PORTFOLIO_CONFIG.fullName} — Web Developer (${PORTFOLIO_CONFIG.location})`);
        appendLine("Focused on clean UI/UX, APIs, and interactive JS apps.");
        break;
      case "skills":
        appendLine("Core: HTML5, CSS3, JavaScript (ES6+), Canvas, Chart.js, Google Apps Script, Vercel.");
        break;
      case "projects":
        PROJECTS_DATA.forEach((p, i) => appendLine(`${i + 1}. ${p.title} [${p.categoryLabel}]`));
        break;
      case "contact":
        appendLine(`Email: ${PORTFOLIO_CONFIG.email}`);
        appendLine(`GitHub: ${PORTFOLIO_CONFIG.github}`);
        break;
      case "clear":
        output.innerHTML = "";
        break;
      default:
        appendLine(`Command not found: "${cmd}". Type "help" for options.`);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(input.value);
    input.value = "";
  });

  document.querySelectorAll(".chip-btn").forEach((btn) =>
    btn.addEventListener("click", () => runCommand(btn.dataset.cmd))
  );
}

/* 5. Skills & Projects Rendering + Filters */
function renderSkills(filter) {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = "";

  const list = filter === "all" ? SKILLS_DATA : SKILLS_DATA.filter((s) => s.cat === filter);
  list.forEach((s) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="skill-top">
        <span class="skill-name">${s.name}</span>
        <span class="skill-lvl">${s.level}</span>
      </div>
      <p class="skill-desc">${s.desc}</p>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="width: ${s.level}"></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderProjects(filter) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const list = filter === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === filter);
  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-preview ${p.previewClass}">${p.previewVisual}</div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.shortDesc}</p>
        <div class="stack-row">
          ${p.stack.map((t) => `<span class="tag-pill">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Demo ↗</a>
          <button class="btn btn-secondary case-btn">Case Study</button>
        </div>
      </div>
    `;
    card.querySelector(".case-btn").addEventListener("click", () => openCaseModal(p));
    grid.appendChild(card);
  });
}

function initFilters() {
  document.querySelectorAll("[data-skill-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-skill-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkills(btn.dataset.skillFilter);
    });
  });

  document.querySelectorAll("[data-project-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-project-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.projectFilter);
    });
  });
}

/* 6. Case Study Modal */
function initModal() {
  const modal = document.getElementById("caseModal");
  document.getElementById("closeModalBtn").addEventListener("click", () => (modal.hidden = true));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.hidden = true;
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) modal.hidden = true;
  });
}

function openCaseModal(project) {
  document.getElementById("modalCategory").textContent = project.categoryLabel;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSummary").textContent = project.shortDesc;

  const list = document.getElementById("modalHighlights");
  list.innerHTML = project.highlights.map((h) => `<li>${h}</li>`).join("");

  const stack = document.getElementById("modalStack");
  stack.innerHTML = project.stack.map((s) => `<span class="tag-pill">${s}</span>`).join("");

  document.getElementById("modalLiveLink").href = project.liveUrl;
  document.getElementById("modalCodeLink").href = project.codeUrl;
  document.getElementById("caseModal").hidden = false;
}

/* 7. Scroll Reveal & Nav Scroll-Spy */
function initScrollSpyAndReveal() {
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  });
}

/* 8. Copy Email & Contact Form */
function initContactForm() {
  document.getElementById("copyEmailBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
      showToast(`Copied: ${PORTFOLIO_CONFIG.email}`);
    } catch {
      showToast(`Email: ${PORTFOLIO_CONFIG.email}`);
    }
  });

  const form = document.getElementById("contactForm");
  const status = document.getElementById("cStatus");
  const btn = document.getElementById("cSubmitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    const name = document.getElementById("cName").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if (!name || !email.includes("@") || !message) {
      status.textContent = "Please complete all required fields with a valid email.";
      status.classList.add("err");
      return;
    }

    btn.disabled = true;
    btn.textContent = "Sending...";

    try {
      if (PORTFOLIO_CONFIG.gasWebAppUrl === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        await new Promise((r) => setTimeout(r, 700));
        status.textContent = "Thanks! Message validated (add your code.gs URL in script.js to save to Google Sheets).";
        status.classList.add("ok");
        form.reset();
        return;
      }

      const res = await fetch(PORTFOLIO_CONFIG.gasWebAppUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ name, email, plan: "Portfolio Inquiry", message })
      });
      const json = await res.json();
      if (json.status !== "success") throw new Error(json.message);

      status.textContent = "Message sent! I will get back to you soon.";
      status.classList.add("ok");
      form.reset();
    } catch {
      status.textContent = "Could not send right now—feel free to email me directly!";
      status.classList.add("err");
    } finally {
      btn.disabled = false;
      btn.textContent = "Send Message";
    }
  });
}

function showToast(msg) {
  const wrap = document.getElementById("toastWrap");
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}
