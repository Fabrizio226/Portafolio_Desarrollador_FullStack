document.addEventListener('DOMContentLoaded', () => {
  // --- 1. MENÚ HAMBURGUESA PARA MÓVILES ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  // --- 2. FILTRADO DINÁMICO DE PROYECTOS ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const filterStatus = document.getElementById('filter-status');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;
      let visibleCount = 0;

      filterButtons.forEach(filterButton => {
        const isActive = filterButton === button;
        filterButton.classList.toggle('active', isActive);
        filterButton.setAttribute('aria-pressed', String(isActive));
      });

      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(/\s+/);
        const isVisible = filterValue === 'all' || categories.includes(filterValue);
        card.hidden = !isVisible;
        visibleCount += Number(isVisible);
      });

      if (filterStatus) {
        filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'proyecto visible' : 'proyectos visibles'}`;
      }
    });
  });

  const initialFilter = document.querySelector('.filter-btn.active');
  if (initialFilter) {
    initialFilter.click();
  }
});