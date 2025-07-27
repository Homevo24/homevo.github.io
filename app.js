

function setActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function showPage(page) {
  const main = document.getElementById('main-content');
  main.innerHTML = pages[page] || pages.home;
  setActiveNav(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  animateSection();
  bindInternalNav();
}

function animateSection() {
  const section = document.querySelector('section');
  if (section) {
    section.classList.add('fade-in');
    setTimeout(() => section.classList.remove('fade-in'), 700);
  }
}

function bindInternalNav() {
  // Pour les boutons Resume/Portfolio sur la home
  document.querySelectorAll('.btn[data-page]').forEach(btn => {
    btn.onclick = e => {
      const page = btn.dataset.page;
      showPage(page);
    };
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Navigation principale
  document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = e => {
      const page = link.dataset.page;
      showPage(page);
    };
  });
  // Affiche la page home au chargement
  showPage('home');
});

// Animation fade-in CSS
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
  animation: fadeIn 0.7s cubic-bezier(.77,0,.18,1);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style); 