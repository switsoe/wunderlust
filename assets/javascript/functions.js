function random(array){
    Math.foor(Math.random()*array);
}

var city;

function pickCity(){

    var queryURL = "https://api.teleport.org/api/urban_areas/"
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var cities = response._links["ua:item"];
        for(var i = 0; i< cities.length; i++){
            console.log(cities[i].name);
            
        }

        console.log(cities);
    });
}        

pickCity();
