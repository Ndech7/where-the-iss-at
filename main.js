// initialize a map
let map = L.map("map").setView([0, 0], 1);

//add a base tile layers
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy: OpenStreetMap",
}).addTo(map);

// fetch an external API - https://api.wheretheiss.at/v1/satellites/25544
const url = "https://api.wheretheiss.at/v1/satellites/25544";
const marker = L.marker();
getISSPos();

async function getISSPos() {
  const response = await fetch(url);
  const data = await response.json();
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]).addTo(map);
  document.getElementById("lat").textContent = `Latitude: ${latitude.toFixed(
    2
  )}°`;
  document.getElementById("lon").textContent = `Longitude: ${longitude.toFixed(
    2
  )}°`;
}

setInterval(getISSPos, 5000);
