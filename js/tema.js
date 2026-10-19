// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Verificar si el usuario ya tenía una preferencia guardada
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = '☀️ Modo Claro';
    }
  }

  // Evento al hacer clic en el botón de cambio de tema
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      
      const isDark = document.body.classList.contains('dark-theme');
      
      // Actualizar el texto del botón
      themeToggleBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
      
      // Guardar la preferencia en localStorage
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
  }
});