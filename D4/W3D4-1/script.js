let map;
function initMap() {
    const createMarker = (coords) => {
        const marker = new google.maps.Marker({position: coords, map: map}); 
        return marker;   
    };
    const wincHQ = {lat: 52.378361, lng: 4.854710};
    const studentMarkers = [
        {lat: -25.344, lng: 131.036},
        {lat: 51.586722, lng: 4.771331},
        {lat: 51.587169, lng: 4.635921},
        {lat: 51.451336, lng: 5.483359},
        {lat: 52.086573, lng: 5.116686},
        {lat: 52.995904, lng: 6.566923},
        {lat: 52.153551, lng: 5.389907}
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.132633, lng: 5.291266},
        zoom: 8
    });

    studentMarkers.forEach((student) => {
        createMarker(student);
    })

    const marker = new google.maps.Marker({position: wincHQ, map: map, icon: "./img/winc-round.png"});
}