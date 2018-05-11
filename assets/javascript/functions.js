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
          console.log("hi there")

    });
}        



$("body").on("click" , ".wunderlust-btn" , pickCity);
