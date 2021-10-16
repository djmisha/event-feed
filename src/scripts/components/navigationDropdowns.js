function navigationDropdowns() {
    var venueMenu = document.getElementById("venue-list");
    var artistMenu = document.getElementById("artist-list");
    var dateMenu = document.getElementById("date-list");
    var cityMenu = document.getElementById("city-list");

    function activateNavToggle(menu) {
        var toggler = menu.previousElementSibling;
        toggler.addEventListener("click", showHideDropdown);

        function showHideDropdown() {
            let openItem = document.querySelectorAll('.visible');
            if (toggler.parentElement.classList.contains('visible')) {
              toggler.parentElement.classList.remove('visible');
              toggler.nextElementSibling.classList.remove('visible');
              return;
            }
            if (openItem.length > 0) {
                for (let i = 0; i < openItem.length; i++) {
                    openItem[i].classList.remove('visible');
                }
                menu.classList.toggle("visible");
                menu.parentElement.classList.toggle("visible");
            } else {
                menu.classList.toggle("visible");
                menu.parentElement.classList.toggle("visible");
            }
        }
    }

    activateNavToggle(venueMenu);
    activateNavToggle(artistMenu);
    activateNavToggle(dateMenu);
    activateNavToggle(cityMenu);
    
    function attachNavTitle(menu) {
      const text = menu.previousElementSibling.lastChild.innerHTML;
      console.log("🚀 ~ file: navigationDropdowns.js ~ line 32 ~ showHideDropdown ~ text", text)
      const navEl = menu.previousElementSibling.nextElementSibling;
      const title = document.createElement('h2');
      console.log("🚀 ~ file: navigationDropdowns.js ~ line 36 ~ attachNavTitle ~ title", title)
      title.innerHTML = text;
      navEl.prepend(title);
    }

    attachNavTitle(dateMenu);
    attachNavTitle(cityMenu);
    attachNavTitle(venueMenu);
    attachNavTitle(artistMenu);
}

export default navigationDropdowns;