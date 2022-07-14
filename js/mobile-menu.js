(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    menu: document.querySelector('[data-menu]'),
    bodyHide: document.querySelector('[data-menu-body]'),
    mobileMenu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.mobileMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
    refs.bodyHide.classList.toggle('body-hide');
  }
})();
