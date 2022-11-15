// A variable to contain and breakdown the response obj from a request

const map = L.map('map').setView([40.712, -74.006], 12);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


export default map;