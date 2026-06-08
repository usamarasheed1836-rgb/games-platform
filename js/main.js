// ── NAVIGATION ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Highlight active nav link
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── HERO PARTICLES ──
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const symbols = ['🃏','♠','♥','♦','♣','🎰','💰','🪙','⭐','🎲'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.cssText = `
      left:${Math.random()*100}%;
      font-size:${Math.random()*20+10}px;
      animation-duration:${Math.random()*10+8}s;
      animation-delay:${Math.random()*5}s;
      opacity:0.4;
    `;
    container.appendChild(p);
  }
}
createParticles();

// ── COUNTER ANIMATION ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 30);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-target]').forEach(animateCounter);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stats-row, .hero-stats').forEach(el => counterObserver.observe(el));

// ── GAME CARDS RENDERER ──
function renderStars(rating) {
  const full = Math.floor(rating);
  return '★'.repeat(full) + (rating % 1 >= 0.5 ? '½' : '') + ' ' + rating;
}

function getCardImg(game) {
  if (game.image) {
    return `<img class="game-card-img" src="${game.image}" alt="${game.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="game-card-placeholder" style="background:${game.color||'#1a1a2e'};display:none;">🎰</div>`;
  }
  const emoji = {arcade:'🐟',slots:'🎰',casino:'🃏'}[game.category] || '🎲';
  return `<div class="game-card-placeholder" style="background:${game.color||'#1a1a2e'}">${emoji}</div>`;
}

function renderGameCards(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = games.map(game => `
    <div class="game-card fade-in" data-category="${game.category}">
      <div class="game-card-img-wrap">
        ${getCardImg(game)}
        <div class="game-card-badge">${game.badge}</div>
      </div>
      <div class="game-card-body">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <div class="game-card-rating">${renderStars(game.rating)}</div>
        <div class="game-card-btns">
          <a href="${game.playLink}" class="btn-play" target="_blank">▶ Play Now</a>
          <a href="${game.downloadLink}" class="btn-download" target="_blank">⬇ Download</a>
        </div>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function renderHotStrip(games, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const hotGames = games.filter(g => g.hot);
  container.innerHTML = hotGames.map(game => `
    <div class="hot-card" onclick="window.open('${game.playLink}','_blank')">
      ${game.image
        ? `<img class="hot-card-img" src="${game.image}" alt="${game.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
           <div class="hot-card-img-placeholder" style="background:${game.color||'#1a1a2e'};display:none;">🎰</div>`
        : `<div class="hot-card-img-placeholder" style="background:${game.color||'#1a1a2e'}">${{arcade:'🐟',slots:'🎰',casino:'🃏'}[game.category]||'🎲'}</div>`
      }
      <div class="hot-badge">🔥 HOT</div>
      <div class="hot-card-info">
        <h4>${game.name}</h4>
        <p>${renderStars(game.rating)}</p>
      </div>
    </div>
  `).join('');
}

// ── FILTER TABS ──
function initFilters() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.filter;
      const filtered = cat === 'all' ? GAMES : GAMES.filter(g => g.category === cat);
      renderGameCards(filtered, 'gamesGrid');
    });
  });
}



// ── SHARE BUTTONS ──
function initShareButtons() {
  const url = encodeURIComponent(window.location.origin);
  const text = encodeURIComponent('🎰 Join Games Platform - USA\'s #1 Gaming Destination! Play top games & win big!');
  const fbBtn = document.getElementById('shareFB');
  const waBtn = document.getElementById('shareWA');
  const twBtn = document.getElementById('shareTW');
  const copyBtn = document.getElementById('copyLink');
  if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  if (waBtn) waBtn.href = `https://wa.me/?text=${text}%20${url}`;
  if (twBtn) twBtn.href = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.origin);
      copyBtn.textContent = '✅ Copied!';
      setTimeout(() => copyBtn.textContent = '🔗 Copy Link', 2000);
    });
  }
}

// ── INIT ON DOM READY ──
document.addEventListener('DOMContentLoaded', () => {
  if (typeof GAMES !== 'undefined') {
    renderHotStrip(GAMES, 'hotStrip');
    renderGameCards(GAMES.slice(0, 6), 'featuredGrid');
    renderGameCards(GAMES, 'gamesGrid');

    initFilters();
  }
  initShareButtons();
});
