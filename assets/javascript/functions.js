function random(array){
    return Math.floor(Math.random()*array.length);
    // return Math.floor(Math.random()*array.length)
}

var city;

function pickCity(){

    var queryURL = "https://api.teleport.org/api/urban_areas/"
  

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var cities = response._links["ua:item"];
        // for(var i = 0; i< cities.length; i++){
        //     console.log(cities[i].name);
            
        // }

       // console.log(cities[random(cities)].name);
         city = cities[random(cities)].name;
        $(".city-name").text(city);
        //   console.log("hi there");
          fourSquare(); 

    });
}        



$("body").on("click" , ".wunderlust-btn" , pickCity);

//API link with "city" varible plugged in between.  Parameter "near" takes the city name.

function fourSquare(){
var queryURL = "https://api.foursquare.com/v2/venues/explore?client_id=APG3IG5Z23XQFAHJ2OEIL315CCY4ZIYVNJHNNKSV4X5SIZPB&client_secret=BI42KWF4MSAGRFOYX1H0LO4ERS2GEFF3UL32VGIPQKLPLGW5&near=" + city + "&v=20180323&4d4b7104d754a06370d81259"


// var fourSheader = 
// var fourSlink = 
// var fourDescription = 
 

// var activyOption = [
//     "ArtsAndEntertainment: 4d4b7104d754a06370d81259",
//     "NightlifeSpot: 4d4b7105d754a06376d81259",
//     "OutdoorsRecreation: 4d4b7105d754a06377d81259",
//     "OtherEvent: 4d4b7105d754a06373d81259"
// ];

// Arts and Entertainment:  4d4b7104d754a06370d81259
// Nightlife Spot:  4d4b7105d754a06376d81259
// Outdoors & Recreation:  4d4b7105d754a06377d81259
// Event:  4d4b7105d754a06373d81259

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);
    console.log(response.response.groups["0"].items["0"].venue.name);
    console.log(response.response.groups["0"].items["0"].venue.categories["0"].name);
    for (var i = 0; i < response.response.groups["0"].items["0"].venue.location.formattedAddress.length; i++) {
        console.log(response.response.groups["0"].items["0"].venue.location.formattedAddress[i])
    
    }
    
});
}        



