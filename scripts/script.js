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

//  document.getElementById("lat").innerHTML = "Latitude: " + crd.latitude;
//  document.getElementById("lon").innerHTML = "Longitude: " + crd.longitude;

    var proxy = 'https://cors-anywhere.herokuapp.com/';
    //var api_url = 'https://api.darksky.net/forecast/42d725ce9a553ab62b1e6f5a5c52de8d/' + crd.latitude + ',' + crd.longitude;
    var api_url = "https://fcc-weather-api.glitch.me/api/current?lat=" + crd.latitude + "&lon=" + crd.longitude;

    console.log(api_url);

        var myForecast =
        $.ajax({
            url: proxy + api_url,
            success:function(forecast)
            {
                console.log(forecast);
/*
                var i = forecast.timezone.indexOf("/") + 1;
                var l = forecast.timezone.length;

                var t = forecast.timezone.substring(i,l);

                t = t.replace(/_/g, ' ');

*/
                var t = parseInt(forecast.main.temp);

                var now = new Date();
                document.getElementById("hi").innerHTML = forecast.name;
                document.getElementById("weather-type").innerHTML = forecast.weather[0].main;
                document.getElementById("temperature").innerHTML = t  + "&#8451";
                document.getElementById("hiddenTemp").innerHTML = t;
                document.getElementById("time").innerHTML = now;

                var d = forecast.weather[0].description.replace(' ', '-');
                d = 'scripts/images/' + d;
                console.log(d);

                document.body.style.background = "#f3f3f3 url('" + d + "-bg.jpg') no-repeat right top";
                document.randimg.src = d + ".jpg";

            }
        });
    }

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

/*function pickImg(){
    var image = "scripts/images/rain.jpg";
    document.randimg.src = image;
}*/

function toggleButton(){
    var t = document.getElementById("hiddenTemp").innerHTML;
    console.log(t);

    var fTemp = (t * 1.8) + 32;
    fTemp = parseInt(fTemp);

    if(document.getElementById("myButton").innerHTML == "Celcius"){
    document.getElementById("myButton").innerHTML = "Fahrenheit"
    document.getElementById("temperature").innerHTML = t + "&#8451";
        }
    else{
    document.getElementById("myButton").innerHTML = "Celcius"
    document.getElementById("temperature").innerHTML  =  fTemp + "&#8457";
        }

}

/*
function pickImg(){

images = new Array
images = ["scripts/images/thunderstorm.jpg",
"scripts/images/clear-day.jpg", "scripts/images/tornado.jpg",
"scripts/images/clear-night.jpg", "scripts/images/rain.jpg"]

var imageNumber = images.length;
var randomNumber = Math.random() ;
var rand1 = Math.round( (imageNumber-1) * randomNumber);

var image = images[rand1];
document.randimg.src = image;
}
*/





