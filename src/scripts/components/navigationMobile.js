function navigationMobile() {

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    if (window.innerWidth <= 768) {
      console.log(scrollPos)
      var feed = document.getElementById('evenfeed')
      var navigation = document.querySelector('.navigations');
      if (scrollPos > 95) {
        navigation.classList.add('fixed-navigation');
        feed.classList.add('fixed-navigation');
      }
      if (scrollPos <= 95) {
        navigation.classList.remove('fixed-navigation');
        feed.classList.remove('fixed-navigation');
      }
    }
  }

  document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
}

export default navigationMobile;