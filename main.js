// initialize a map
let map = L.map("map").setView([0, 0], 2);
let firstTimeLoading = true;

//add a base tile layers
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy: OpenStreetMap",
}).addTo(map);

// fetch an external API - https://api.wheretheiss.at/v1/satellites/25544
const url = "https://api.wheretheiss.at/v1/satellites/25544";
const issIcon = L.icon({
  //define a custom marker icon
  iconUrl: "images/iss200.png",
  iconSize: [38, 95],
  iconAnchor: [19, 47],
});
const marker = L.marker();
getISSPos();

async function getISSPos() {
  const response = await fetch(url);
  const data = await response.json();
  const { latitude, longitude } = data;
  marker.setLatLng([latitude, longitude]).setIcon(issIcon).addTo(map);
  if (firstTimeLoading) {
    map.setView([latitude, longitude], 5);
    firstTimeLoading = false;
  }
  document.getElementById("lat").textContent = `Latitude: ${latitude.toFixed(
    2
  )}°`;
  document.getElementById("lon").textContent = `Longitude: ${longitude.toFixed(
    2
  )}°`;
}

setInterval(getISSPos, 5000);
