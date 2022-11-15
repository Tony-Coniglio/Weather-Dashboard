// var requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=17704f7771dd1f3e4ced930e7a42c1cd';


// Get city on click and send to get

function getCity() {
    let cityName = document.getElementById("cityName").value;
    console.log(cityName);
    coordinates(cityName);
    // clearCards();

};

// to get coordinates

let coordinates = function (cityName) {
    let apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=17704f7771dd1f3e4ced930e7a42c1cd';
    fetch(apiUrl)
        .then((response) => response.json())
        .then(function (data) {
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
        // .then((data) => console.log(data));
        .then(function (data) {

            for (var i = 0; i < data.list.length; i += 8) {

                var temperature = (data.list[i].main.temp)
                var humity = (data.list[i].main.humidity)
                var windSpeed = (data.list[i].wind.speed)
                var date = (data.list[i].dt_txt)

                // console.log(temperature, humity, windSpeed)
                
                createCard (date, temperature, humity, windSpeed)
            }
        }
        )
};

function createCard(date, temperature, humidity, windSpeed) {

    var cardContainer = document.querySelector('#cards');
    var card1 = document.createElement('div');
    card1.setAttribute ("class", "col-2");
    cardContainer.append(card1);

    var card2 = document.createElement('div');
    card2.setAttribute ("class", "card");
    card1.append(card2);

    var card3 = document.createElement('div');
    card3.setAttribute ("class", "card-body");
    card2.append(card3);

    var dateRead = document.createElement('h5');
    dateRead.setAttribute ("class", "card-title");
    dateRead.innerHTML = date;
    card3.append(dateRead);

    var tempRead = document.createElement('p');
    tempRead.setAttribute ("class", "card-text");
    tempRead.innerHTML = "Temperature: " + temperature;
    card3.append(tempRead);

    var humidRead = document.createElement('p');
    humidRead.setAttribute ("class", "card-text");
    humidRead.innerHTML = "Humidity: " + humidity;
    card3.append(humidRead);

    var windRead = document.createElement('p');
    windRead.setAttribute ("class", "card-text");
    windRead.innerHTML = "Wind Speed: " + windSpeed;
    card3.append(windRead);




    // <div class="col-2">
    //     <div class="card">
    //         <div class="card-body">
    //             <h5 class="card-title">Date</h5>
    //             <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //             <p class="card-text" id="temp">Temperature: </p>
    //             <p id="humidity">Humidity: </p>
    //             <p id="wind">Wind Speed: </p>
    //         </div>
    //     </div>
    // </div>


}

// function clearCards () {
//     var cardClearer = document.querySelector("#cards");
//     if (cardClearer.children.length > 0) {
//       while (cardClearer.firstChild) {
//         cardClearer.removeChild(cardClearer.lastChild);
//       }
//     }
//   }




