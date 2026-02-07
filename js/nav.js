/* CalcDesk – Mobile nav toggle. Minimal JS for hamburger menu. */
(function () {
  function init() {
    var header = document.querySelector('.site-header');
    var btn = document.querySelector('.nav-toggle');
    if (!header || !btn) return;

    function setOpen(isOpen) {
      header.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
      btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', isOpen);
    }

    btn.addEventListener('click', function () {
      setOpen(!header.classList.contains('is-open'));
    });

    /* Close when tapping outside header (e.g. backdrop) or when a link is clicked */
    document.addEventListener('click', function (e) {
      if (!header.classList.contains('is-open')) return;
      if (e.target.closest('.site-header')) return;
      setOpen(false);
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
