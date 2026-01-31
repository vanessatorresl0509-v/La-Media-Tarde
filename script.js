function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(div => {
    div.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}
