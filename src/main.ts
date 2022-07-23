const toggleButtonMenu = document.getElementById(
  'toggle-button-menu'
) as HTMLButtonElement;
const navbarOverlay = document.getElementById(
  'navbar-overlay'
) as HTMLDivElement;
const navbarMenulist = document.getElementById(
  'navbar-menulist'
) as HTMLUListElement;

const tabletBP = 768;
let menuIsOpen = false;

// Toggle Menu on Mobile
const toggleMenu = () => {
  navbarOverlay.style.display = menuIsOpen ? 'block' : 'none';
  navbarMenulist.style.display = menuIsOpen ? 'block' : 'none';

  toggleButtonMenu.setAttribute('aria-expanded', menuIsOpen.toString());
  toggleButtonMenu.className = menuIsOpen
    ? 'navbar__toggleMenu--close'
    : 'navbar__toggleMenu--open';
};

// On load
window.onload = () => {
  //   When toggle button menu is clicked
  toggleButtonMenu?.addEventListener('click', () => {
    const windowWidth = window.innerWidth;

    // Check screen size
    if (windowWidth < tabletBP) {
      menuIsOpen = !menuIsOpen;
      toggleMenu();
    }
  });
};
