var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  document.getElementById("hi").innerHTML = "Here you are!";
  document.getElementById("lat").innerHTML = "Latitude: " + crd.latitude;
  document.getElementById("lon").innerHTML = "Longitude: " + crd.longitude;

    document.getElementById("myLat").placeholder = "e.g.: " + crd.latitude;
    document.getElementById("myLon").placeholder = "e.g.: " + crd.longitude;

    var api_url = 'https://api.darksky.net/forecast/42d725ce9a553ab62b1e6f5a5c52de8d/' + crd.latitude + ',' + crd.longitude;
    console.log(api_url);

    $.getJSON(api_url, function(forecast) {});

//    $.getJSON([api_url], function(forecast) {
//    console.log(forecast);
//});

}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);


function pickImg(){

images = new Array
images = ["scripts/images/thunderstorm.jpg",
"scripts/images/clear-day.jpg", "scripts/images/tornado.jpg",
"scripts/images/clear-night.jpg", "scripts/images/rain.jpg"]

var imageNumber = images.length;
var randomNumber = Math.random() ;
var rand1 = Math.round( (imageNumber-1) * randomNumber);

var image = images[rand1]
document.randimg.src = image
}





