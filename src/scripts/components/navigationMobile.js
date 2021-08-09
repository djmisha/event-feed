function navigationMobile() {

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function stickNavigation(scrollPos) {
    if (window.innerWidth <= 768) {
      var feed = document.getElementById('evenfeed')
      var navigation = document.querySelector('.navigations');
      if (scrollPos > 96) {
        navigation.classList.add('fixed-navigation');
        feed.classList.add('fixed-navigation');
      }
      if (scrollPos <= 96) {
        navigation.classList.remove('fixed-navigation');
        feed.classList.remove('fixed-navigation');
      }
    }
  }

  document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        stickNavigation(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
}

export default navigationMobile;