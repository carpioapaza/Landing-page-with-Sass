function Main() {
  const d = document;
  d.addEventListener('click', (e) => {
    if (e.target.matches('.header__menu')) {
      $menu = e.target;
      $navbar = e.target.previousElementSibling;
      $navbar.classList.toggle('header__navbar--reveal');
      $menu.classList.toggle('header__menu--reveal');
      console.log($menu, $navbar);
      if ($menu.classList.contains('header__menu--reveal')) {
        $menu.textContent = 'close';
      } else {
        $menu.textContent = 'menu';
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', Main);
