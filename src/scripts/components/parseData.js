function parseData(result) {
    var eventData = [];
    for (var g = 0; g < result.data.length; g++) {
        /*get date converted to numerical value*/
        var eventDateParsed = Date.parse(result.data[g].date);

        /*convert date to ISO for Schema and Readble Formats*/
        var eventDateISO = new Date(result.data[g].date);
        var readableDate = new Date(result.data[g].date).toDateString();

        // Create Event Object
        var singleEventListing = {
            id: result.data[g].id,
            name: result.data[g].name,
            date: readableDate,
            link: result.data[g].link,
            venuename: result.data[g].venue.name,
            venueaddress: result.data[g].venue.address,
            venuecity: result.data[g].venue.location,
            venuestate: result.data[g].venue.state,
            artist: [result.data[g].artistList],
            image: "",
            schemadate: eventDateISO,
            // image: data[g].eventImage,
            // age: data[g].ageLabel,
        };

        /*Push To Array*/
        eventData.push(singleEventListing);
    }
    return eventData;
}

export default parseData;