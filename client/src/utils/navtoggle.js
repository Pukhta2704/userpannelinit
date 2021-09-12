const navToggle = () => {
  const navMenuToggler = document.querySelector('.nav-menu-toggler');
  const navList = document.querySelector('nav ul');
  let isNavOpen = false;
  const toggleNav = () => {
    navList.classList.toggle('open');
    navMenuToggler.classList.toggle('open');
    navMenuToggler.classList.toggle('fa-bars');
    navMenuToggler.classList.toggle('fa-times');
    isNavOpen = !isNavOpen;
  };
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu-toggler')) return toggleNav();
    if (e.target.parentElement.classList.contains('nav-link')) return toggleNav();
    if (!isNavOpen) return;
    let el = e.target;
    while (el.tagName !== 'BODY') {
      if (el.tagName === 'NAV') break;
      el = el.parentElement;
    }
    if (el.tagName === 'NAV') return;
    else toggleNav();
  });
};
export default navToggle;
