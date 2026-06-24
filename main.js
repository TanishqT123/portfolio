/* ============================================================
   Tanishq Tiwari — Portfolio interactions
   ============================================================ */

// ---- Project data ----------------------------------------------------------
// link types: "pdf" -> opens in modal viewer; "html"/"download" -> new tab / download
const PROJECTS = [
  {
    featured: true,
    course: "Master's Capstone · MQE",
    badge: "Capstone",
    title: "Sticky Expectations in Durable Goods: Measurement & Consequences",
    desc: "My thesis (advisor Dr. Christopher Surro) tests whether sluggish consumer beliefs distort durable-goods spending. I train a rolling-window LASSO on 21 real-time macro predictors to build a rational benchmark, then compare it against the University of Michigan Index of Buying Conditions. Beliefs adjust only 44–60% of what fundamentals warrant, decisively rejecting rational expectations, with Newey-West inference, asymmetric specifications, and a non-durables placebo.",
    cats: ["ml", "econometrics", "finance"],
    tags: ["LASSO", "Macro-finance", "Real-time data", "Python", "FRED"],
    links: [
      { type: "pdf", label: "Read thesis", file: "files/capstone-sticky-expectations.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/capstone-analysis.html" },
      { type: "download", label: ".ipynb", file: "files/capstone-analysis.ipynb" }
    ]
  },
  {
    course: "ML Final Project",
    title: "Predicting High-Yield Credit Spreads: LASSO vs. XGBoost",
    desc: "A 20-year, 5,300-observation study of whether daily U.S. high-yield credit spreads are driven by linear relationships or regime-dependent interactions. I benchmark a regularized linear model (LASSO) against a tree ensemble (XGBoost) over features like VIX, S&P 500 returns, the yield-curve slope, and financial-conditions indices. Both explain ~55% of daily variance; LASSO wins on interpretability.",
    cats: ["ml", "finance"],
    tags: ["XGBoost", "LASSO", "GridSearchCV", "Credit risk", "Python"],
    links: [
      { type: "pdf", label: "Read report", file: "files/ml-credit-spreads.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/ml-credit-spreads.html" },
      { type: "download", label: ".ipynb", file: "files/ml-credit-spreads.ipynb" }
    ]
  },
  {
    course: "Econ 409 · Final",
    title: "A Contrarian Trading Strategy for Microsoft",
    desc: "A systematic strategy that trades MSFT on deviations of the P/E ratio and short-interest ratio from their moving averages, inspired by the Principle of Contrarian Opinion. Built on Bloomberg data (1991–2025) with walk-forward hyperparameter optimization and backtested against buy-and-hold across alpha, beta, Sortino, Sharpe, drawdown, and directional-accuracy tests.",
    cats: ["finance"],
    tags: ["Backtesting", "Walk-forward opt.", "Risk metrics", "Python"],
    links: [
      { type: "pdf", label: "Read report", file: "files/econ409-msft-trading.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/econ409-trading.html" },
      { type: "download", label: ".ipynb", file: "files/econ409-trading.ipynb" }
    ]
  },
  {
    course: "Econ 402 · Time Series",
    title: "Monetary Policy & the Phillips Curve: A VAR Analysis",
    desc: "A time-series study of U.S. inflation, unemployment, and the Fed Funds rate (FRED, 1960–2025). Optimal lags via PACF and ar_select_order, AR forecasts, and a vector autoregression with impulse-response functions, forecast-error variance decomposition, and Granger causality, replicating Stock & Watson (2001) and documenting the flattening of the Phillips curve in the modern era.",
    cats: ["econometrics"],
    tags: ["VAR", "Impulse response", "Granger causality", "Python"],
    links: [
      { type: "pdf", label: "Read report", file: "files/econ402-time-series-var.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/econ402-time-series.html" },
      { type: "download", label: ".ipynb", file: "files/econ402-time-series.ipynb" }
    ]
  },
  {
    course: "Econ 452 · Industrial Org",
    title: "Structural Demand Estimation with BLP Instruments",
    desc: "A structural IO assignment estimating a random-coefficients (BLP) demand-and-supply system on a pizza market. Covers the theory of why BLP instruments address price endogeneity, construction of same-firm and rival cost/characteristic instruments, and full estimation in pyblp via GMM moment conditions.",
    cats: ["econometrics"],
    tags: ["BLP", "GMM", "pyblp", "Instrumental variables"],
    links: [
      { type: "html", label: "View notebook", file: "files/econ452-blp-demand.html", solid: true },
      { type: "download", label: ".ipynb", file: "files/econ452-blp-demand.ipynb" }
    ]
  },
  {
    course: "Econ 430 · Panel Data",
    title: "The Effect of CO₂ on Agricultural Yield in India",
    desc: "A panel-data analysis of crop yield across 20 Indian states over 31 years, quantifying how CO₂ emissions, fertilizer, rainfall, and irrigation shape productivity. Includes Cullen-Frey distribution fitting (bridging Python and R via rpy2), Pooled / Fixed / Random Effects models, and a Hausman test selecting the random-effects specification (CO₂ elasticity ≈ +0.37%).",
    cats: ["econometrics"],
    tags: ["Panel data", "Fixed/Random effects", "Hausman", "Python + R"],
    links: [
      { type: "html", label: "View notebook", file: "files/econ430-co2-agriculture.html", solid: true },
      { type: "download", label: ".ipynb", file: "files/econ430-co2-agriculture.ipynb" }
    ]
  },
  {
    course: "Econ 430 · Project 1",
    title: "Trade Openness & Per-Capita Income",
    desc: "An OLS study using Wooldridge's Openness dataset (114 countries) testing whether economies more open to imports enjoy higher per-capita income. Walks through transformations, exhaustive and sequential feature selection, heteroskedasticity diagnostics, and model selection toward a best single-predictor specification.",
    cats: ["econometrics"],
    tags: ["OLS", "Feature selection", "Diagnostics", "Python"],
    links: [
      { type: "pdf", label: "Read report", file: "files/econ430-openness-income.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/econ430-openness.html" },
      { type: "download", label: ".ipynb", file: "files/econ430-openness.ipynb" }
    ]
  },
  {
    course: "Econ 421 · Markets",
    title: "Reverse Auctions: Driving India's Renewable Energy Expansion",
    desc: "A mechanism-design study of India's shift from feed-in tariffs to electronic reverse auctions (e-RA) for solar procurement. Models the single-stage two-envelope scoring auction, builds supply step-functions from official 2013 vs. 2016 data, and traces the winner's curse, where aggressive underbidding produced commissioning failures and project cancellations.",
    cats: ["research", "finance"],
    tags: ["Mechanism design", "Auction theory", "Energy economics"],
    links: [
      { type: "pdf", label: "Read paper", file: "files/reverse-auctions-india.pdf", solid: true }
    ]
  },
  {
    course: "Econ 444 · Equity Research",
    title: "Lululemon Investment Memo",
    desc: "An equity-research memo prepared in a buy-side value-investing workshop. Frames Lululemon's business and moat through Hamilton Helmer's 7 Powers, examines ROCE/ROIC history and capital allocation, and builds a base/bull/bear valuation with explicit assumptions, written to a portfolio manager's brief rather than a school rubric.",
    cats: ["finance"],
    tags: ["Equity research", "Valuation", "7 Powers", "Moat analysis"],
    links: [
      { type: "download", label: "Investment memo (.docx)", file: "files/lululemon-investment-memo.docx", solid: true }
    ]
  },
  {
    course: "Mini Project",
    title: "Retail Sales Analytics with SQL & Python",
    desc: "An end-to-end analytics project: a MySQL database modeled with an ER schema, queried from Python (pymysql), and visualized with Matplotlib, seaborn, and Plotly. Surfaces category profitability, regional sales treemaps, multi-year seasonality, and a first look at the discount–sales relationship, packaged into a presentation deck.",
    cats: ["data"],
    tags: ["SQL", "MySQL", "Plotly", "Data viz", "Python"],
    links: [
      { type: "pdf", label: "View slides", file: "files/sql-retail-slides.pdf", solid: true },
      { type: "html", label: "View notebook", file: "files/sql-retail-analysis.html" },
      { type: "download", label: ".ipynb", file: "files/sql-retail-analysis.ipynb" },
      { type: "download", label: "SQL script", file: "files/sql-script.sql" }
    ]
  }
];

// ---- Icons -----------------------------------------------------------------
const ICON = {
  view: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>'
};

// ---- Render cards ----------------------------------------------------------
const grid = document.getElementById("project-grid");

function actionHTML(link) {
  const cls = "linkbtn" + (link.solid ? " linkbtn--solid" : "");
  if (link.type === "pdf") {
    return `<button class="${cls}" data-pdf="${link.file}" data-title="${link.label}">${ICON.view}${link.label}</button>`;
  }
  if (link.type === "html") {
    return `<a class="${cls}" href="${link.file}" target="_blank" rel="noopener">${ICON.ext}${link.label}</a>`;
  }
  // download
  return `<a class="${cls}" href="${link.file}" download>${ICON.download}${link.label}</a>`;
}

function cardHTML(p) {
  const featured = p.featured ? " is-featured" : "";
  const badge = p.badge ? `<span class="card__badge">${p.badge}</span>` : "";
  return `
    <article class="card reveal${featured}" data-cats="${p.cats.join(" ")}">
      <div class="card__top">
        <span class="card__course">${p.course}</span>
        ${badge}
      </div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="card__actions">${p.links.map(actionHTML).join("")}</div>
    </article>`;
}

grid.innerHTML = PROJECTS.map(cardHTML).join("");

// ---- Filtering -------------------------------------------------------------
const filterBar = document.getElementById("filters");
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filterBar.querySelectorAll(".filter").forEach(b => b.classList.remove("is-active"));
  btn.classList.add("is-active");
  const f = btn.dataset.filter;
  grid.querySelectorAll(".card").forEach(card => {
    const match = f === "all" || card.dataset.cats.split(" ").includes(f);
    card.classList.toggle("is-hidden", !match);
  });
});

// ---- PDF modal -------------------------------------------------------------
const modal = document.getElementById("modal");
const frame = document.getElementById("modal-frame");
const modalTitle = document.getElementById("modal-title");
const modalOpen = document.getElementById("modal-open");

function openModal(file, title) {
  frame.src = file + "#view=FitH";
  modalTitle.textContent = title || "Document";
  modalOpen.href = file;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  frame.src = "";
  document.body.style.overflow = "";
}
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-pdf]");
  if (trigger) { openModal(trigger.dataset.pdf, trigger.dataset.title); return; }
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ---- Nav scroll state ------------------------------------------------------
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Reveal on scroll ------------------------------------------------------
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .card, .skillcard, .fact").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// ---- Footer year -----------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
