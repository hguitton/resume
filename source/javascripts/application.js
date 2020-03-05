document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('close-menu').addEventListener('click', toggleMenu)
  document.getElementById('open-menu').addEventListener('click', toggleMenu)

  function toggleMenu (){
    document.getElementById('menu-mobile').classList.toggle('menu-mobile-visible')
  }
});