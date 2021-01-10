// import Blazy from 'Blazy'

// var lazy = new Blazy({
//      selector: 'img' // all images
// });
// console.log(lazy);
function requestPostsAndAttachtoPage(category, numberofposts) {
    const http = new XMLHttpRequest();
    const url =
        "https://sandiegohousemusic.com/wp-json/wp/v2/posts?category=" +
        category +
        "&per_page=" +
        numberofposts;
    http.open("GET", url);
    http.send();

    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var PostResponce = JSON.parse(http.responseText);
            musicFeed.innerHTML = '';
            parseData(PostResponce);
        }
    };

    var musicFeed = document.getElementById("musicfeed");

    function parseData(data) {
        for (let i = 0; i < data.length; i++) {
            let postID = data[i].id;
            let postTitle = data[i].title.rendered;
            let postURL = data[i].link;
            let postIMG = data[i].jetpack_featured_media_url;

            var pageElement = document.createElement("div");
            pageElement.classList.add("single-music");

            pageElement.innerHTML =
                '<a target="_blank" href="' +
                postURL +
                '"><img src="' +
                postIMG +
                // need to add blazy
                // '" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="icon"><span>' +
                '" ><span>' +
                postTitle +
                "</span></a>";

            musicFeed.appendChild(pageElement);
        }
    }
}

export default requestPostsAndAttachtoPage;