function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 5,
        center: {lat: 55.7558, lng: 37.6173},
    };

    var myMap = new google.maps.Map(element, options);

    var markers = [
        {
            coordinates: {lat: 55.751956, lng: 37.622634},
            info: '<h3>Москва</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 59.940208, lng: 30.328092},
            info: '<h3>Санкт-Петербург</h3><br> <img src="https://placehold.it/200x150"><br><p>Описание</p>'
        },
        {
            coordinates: {lat: 50.449973, lng: 30.524911},
            info: '<h3>Киев</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
        }
    ];

    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: myMap
        });

        if(properties.image) {
            marker.setIcon(properties.image);
        }

        if(properties.info) {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
            });
        }
    }
}