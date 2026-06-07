(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('site-nav');
    if (!nav) {
      return;
    }

    var btn = nav.querySelector('button');
    var hidden = nav.querySelector('.hidden-links');

    if (btn) {
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', 'Toggle navigation menu');
      btn.setAttribute('aria-expanded', 'false');
    }

    if (btn && hidden) {
      btn.addEventListener('click', function () {
        window.setTimeout(function () {
          var open = !hidden.classList.contains('hidden');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        }, 0);
      });

      document.addEventListener('click', function (event) {
        if (nav.contains(event.target) || hidden.classList.contains('hidden')) {
          return;
        }
        hidden.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });

      hidden.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          hidden.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var authorWrap = document.querySelector('.author__urls-wrapper');
    if (authorWrap && window.jQuery) {
      var $ = window.jQuery;
      var $urls = $('.author__urls');
      var $followBtn = $('.author__urls-wrapper button');

      document.addEventListener('click', function (event) {
        if (authorWrap.contains(event.target) || !$urls.is(':visible')) {
          return;
        }
        $urls.hide();
        $followBtn.removeClass('open');
      });
    }
  });
})();
