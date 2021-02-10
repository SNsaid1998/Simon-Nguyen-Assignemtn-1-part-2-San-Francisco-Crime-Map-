 require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
        var map = new Map({
          basemap: "dark-gray"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90, 38.85] // longitude, latitude
        });
      });
