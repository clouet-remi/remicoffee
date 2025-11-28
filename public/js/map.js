function initMap() {
    const map = L.map('map').setView([25.166667, 121.564444], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([25.166667, 121.564444]).addTo(map);

    return map;
}

const map = initMap(); 