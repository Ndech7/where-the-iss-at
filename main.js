// initialize a map
let map = L.map("map").setView([0, 0], 1);

//add a base tile layers
let osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy: OpenStreetMap",
}).addTo(map);
