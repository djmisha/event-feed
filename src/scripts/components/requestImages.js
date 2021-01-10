
function requestImagesXHR() {
    var http = new XMLHttpRequest();
    var url = "images.json";
    http.open("GET", url);
    http.send();

    var imageData = [];

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var PostResponce = JSON.parse(http.responseText);
            /*Puts the Data into our array*/
            parseData(PostResponce);
            /*Attaches the data to the page*/
            // matchImageswithEvents(imageData);
        }
    };

    function parseData(result) {
        for (var g = 0; g < result.length; g++) {
            // Create Event Object
            var singleImageListing = {
                url: result[g].url,
                id: result[g].id,
            };

            imageData.push(singleImageListing);
        }
    }

    // console.log(imageData);
    return imageData;

}

export default requestImagesXHR;
