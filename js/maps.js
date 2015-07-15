		function init(){
			var location = new google.maps.LatLng(41.856825,-87.639225,17);

			var mapOptions = {
  				center: location,
  				zoom: 16,
  				mapTypeControl: false
			};

			var mapElement = document.getElementById("map-canvas");
			var map = new google.maps.Map(mapElement, mapOptions);

			var marker = new google.maps.Marker({
				position: location,
				map: map,
				//animation: google.maps.Animation.BOUNCE
			});
		}

		google.maps.event.addDomListener(window, 'load', init);