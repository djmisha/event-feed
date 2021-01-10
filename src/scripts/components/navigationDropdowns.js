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
            if (openItem.length > 0) {
                for (let i = 0; i < openItem.length; i++) {
                    openItem[i].classList.remove('visible');
                }
            } 
            else {
                menu.classList.toggle("visible");
                menu.parentElement.classList.toggle("visible");
            }
        }
    }
    activateNavToggle(venueMenu);
    activateNavToggle(artistMenu);
    activateNavToggle(dateMenu);
    activateNavToggle(cityMenu);
}

export default navigationDropdowns;