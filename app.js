function Main() {
  const d = document;
  d.addEventListener('click', (e) => {
    if (e.target.matches('.header__menu')) {
      $menu = e.target;
      $navbar = e.target.previousElementSibling;
      $navbar.classList.toggle('reveal');
      $menu.classList.toggle('reveal');
    }
  });
}
document.addEventListener('DOMContentLoaded', Main);
