var locations = [
    ['Dhaka', 23.810940, 90.412244, 4],
    ['Sydney', -33.874201, 151.228551, 5],
    ['Sun Frabcisco', 37.776406, -122.389882, 3],
    ['Shanghai, China', 31.218436, 121.468322, 2],
    ['Karachi', 24.836765, 67.006976, 6],
    ['Abu Dhabi', 24.438246, 54.385123, 1],
    ['new Dilhi', 28.613452, 77.209660, 7]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: new google.maps.LatLng(24.43, 54.38), 
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}