"use strict";
mapboxgl.accessToken = mapboxKey;
console.log(mapboxKey);

var map = new mapboxgl.Map({
    container: 'map',
    zoom: 5,
    style: 'mapbox://styles/mapbox/streets-v9',

    center: [-98.29, 29]
})