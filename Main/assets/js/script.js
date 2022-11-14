// var requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=17704f7771dd1f3e4ced930e7a42c1cd';


// Get city on click and send to get

function getCity() {
    let cityName = document.getElementById("cityName").value;
    console.log(cityName);
    coordinates(cityName);

};

// to get coordinates

let coordinates = function (cityName) {
    let apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=17704f7771dd1f3e4ced930e7a42c1cd';
    fetch(apiUrl)
        .then((response) => response.json())
        .then(function(data) {
            let cityLat = (data[0].lat)
            let cityLon = (data[0].lon)
            getWeather(cityLat, cityLon)
        });
    };

// run coordinates through api

var getWeather = function (cityLat, cityLon) {

        let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLon + '&appid=17704f7771dd1f3e4ced930e7a42c1cd';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log(data));
};





// use cordinates to search for weather





// }

// console.log(cityLat);


// Pass into search URL


// fetch('http://api.openweathermap.org/geo/1.0/direct?q=Austin&limit=5&appid=17704f7771dd1f3e4ced930e7a42c1cd')
// .then((response) => response.json())





// .then(response => {
// var cityLat = data[0].lat;
// console.log(cityLat);
// })

// var cityLon = 

