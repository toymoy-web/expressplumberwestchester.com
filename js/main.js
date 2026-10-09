(function () {
  var t = document.getElementById('mob-toggle');
  var d = document.getElementById('mob-drawer');
  var o = document.getElementById('mob-overlay');
  var c = document.getElementById('drawer-close');
  if (t && d && o) {
    var openMenu = function () {
      d.removeAttribute('hidden');
      o.classList.add('ws-visible');
      t.setAttribute('aria-expanded', 'true');
      t.setAttribute('aria-label', 'Close navigation menu');
      document.documentElement.style.overflow = 'hidden';
    };
    var closeMenu = function () {
      d.setAttribute('hidden', '');
      o.classList.remove('ws-visible');
      t.setAttribute('aria-expanded', 'false');
      t.setAttribute('aria-label', 'Open navigation menu');
      document.documentElement.style.overflow = '';
    };
    t.addEventListener('click', function () {
      if (t.getAttribute('aria-expanded') === 'true') { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener('click', closeMenu); }
    o.addEventListener('click', closeMenu);
    d.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 768) { closeMenu(); } });
  }
  document.querySelectorAll('.ws-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var open = item.classList.toggle('ws-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
