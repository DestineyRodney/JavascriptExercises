"use strict";
mapboxgl.accessToken = mapboxKey;
console.log(mapboxKey);

var map = new mapboxgl.Map({
    container: 'map',
    zoom: 5,
    style: 'mapbox://styles/mapbox/streets-v9',

    center: [-98.29, 29]
})

var popup = new mapboxgl.Popup()
    .setLngLat([-98.489615, 29.426827])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map)

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data: {
        APPID: OPEN_WEATHER_APPID,
        q:     "San Antonio, US"
    }
}).done(function(data){
    console.log(data);
});