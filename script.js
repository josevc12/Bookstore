document.addEventListener('DOMContentLoaded', function(){
  const btnAlert = document.getElementById('btnAlert');
  const btnToggleDark = document.getElementById('btnToggleDark');
  const btnContacto = document.getElementById('btnContacto');
  const fechaFooter = document.getElementById('fechaFooter');
  const fechaFooterSmall = document.getElementById('fechaFooterSmall');

  const hoy = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  const fechaStr = hoy.toLocaleDateString('es-ES', opciones);
  if(fechaFooter) fechaFooter.textContent = fechaStr;
  if(fechaFooterSmall) fechaFooterSmall.textContent = fechaStr;

  if(btnAlert){
    btnAlert.addEventListener('click', () => {
      alert('¡Gracias por visitar Mi Galaxia de Libros! Disfruta explorando.');
    });
  }

  function setDarkMode(on){
    const root = document.documentElement;
    const body = document.body;
    if(on){
      root.classList.add('dark-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('modoOscuro', '1');
      if(btnToggleDark){
        btnToggleDark.textContent = 'Modo claro';
        btnToggleDark.setAttribute('aria-pressed','true');
        btnToggleDark.classList.remove('btn-outline-secondary');
        btnToggleDark.classList.add('btn-secondary');
      }
    } else {
      root.classList.remove('dark-mode');
      body.classList.remove('dark-mode');
      localStorage.removeItem('modoOscuro');
      if(btnToggleDark){
        btnToggleDark.textContent = 'Modo oscuro';
        btnToggleDark.setAttribute('aria-pressed','false');
        btnToggleDark.classList.remove('btn-secondary');
        btnToggleDark.classList.add('btn-outline-secondary');
      }
    }
  }

  if(btnToggleDark){
    btnToggleDark.addEventListener('click', () => {
      const enabled = document.documentElement.classList.contains('dark-mode');
      setDarkMode(!enabled);
    });
  }

  if(localStorage.getItem('modoOscuro')){
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }

  if(btnContacto){
    btnContacto.addEventListener('click', () => {
      alert('Mensaje enviado (simulado). Gracias por contactar.');
    });
  }
});