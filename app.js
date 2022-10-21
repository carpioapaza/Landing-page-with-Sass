function Main() {
  const d = document;
  d.addEventListener('click', (e) => {
    if (e.target.matches('.header__menu')) {
      $menu = e.target;
      $navbar = e.target.previousElementSibling;
      $navbar.classList.toggle('reveal');
      $menu.classList.toggle('reveal');
      console.log($menu, $navbar);
      if ($menu.classList.contains('reveal')) {
        $menu.textContent = 'close';
      } else {
        $menu.textContent = 'menu';
      }
    }
  });
}
document.addEventListener('DOMContentLoaded', Main);
