var address = "";
var myLatLng = {};
var lat = 29.4259671;
var lng = -98.4861419;


//Google Maps Scripting

var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.4259671, lng: -98.4861419},
        zoom: 10
    });

}

initMap();

google.maps.event.addListener(map, "click", function(event) {



    var lat = event.latLng.lat();
    var lng = event.latLng.lng();
    // change the temp value based on click: lat, lng
    var myLatLng = {
        lat: lat,
        lng: lng
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });

    console.log(latInput);
    console.log(lonInput);

    ted();

    $('#clearmarker').click(function(){
        marker.setMap(null);
    });

    // latInput = document.getElementById('latInput').value;
    // lonInput = document.getElementById('lonInput').value;


});

//OpenWeather Scripting


function ted () {

    var weatherData = "";
    var tomorrowData = "";
    var dayAfterTomorrowData = "";


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "03924764fe8c1dc6f21d496c9fed9776",
        units: "imperial",
        lat: lat,
        lon: lng

    }).done(function (data) {


        console.log(data.list);


        var upToDateWeatherInfo = data.list;
        var iconToday = data.list[0].weather[0].icon;
        var iconTomorrow = data.list[8].weather[0].icon;
        var iconDayAfterTomorrow = data.list[16].weather[0].icon;


        var maxTempsToday = [];
        var maxTempsTomorrow = [];
        var maxTempsNextDay = [];
        var maxTempsNextNextDay = [];
        var maTempsTomorrow = 0;
        var maTempsNextDay = 0;
        var maTempsNextNextDay = 0;


        var minTempsToday = [];
        var minTempsTomorrow = [];
        var minTempsNextDay = [];
        var minTempsNextNextDay = [];
        var miTempsTomorrow = 0;
        var miTempsNextDay = 0;
        var miTempsNextNextDay = 0;

        var counter = 0;

        function Temper () {
            for (var i = 0; i < 40; i++) {
                if (upToDateWeatherInfo[i].dt_txt.substring(0, 10) === upToDateWeatherInfo[i + 1].dt_txt.substring(0, 10)) {
                    maxTempsToday.push(upToDateWeatherInfo[i].main.temp);
                    minTempsToday.push(upToDateWeatherInfo[i].main.temp);
                } else {
                    maxTempsToday.push(upToDateWeatherInfo[i].main.temp);
                    minTempsToday.push(upToDateWeatherInfo[i].main.temp);
                    counter = i + 1;
                    break;
                }
            }
            for (var j = counter; j < 40; j++) {
                if (upToDateWeatherInfo[j].dt_txt.substring(0, 10) === upToDateWeatherInfo[j + 1].dt_txt.substring(0, 10)) {
                    maxTempsTomorrow.push(upToDateWeatherInfo[j].main.temp);
                    minTempsTomorrow.push(upToDateWeatherInfo[j].main.temp);
                } else {
                    maxTempsTomorrow.push(upToDateWeatherInfo[j].main.temp);
                    minTempsTomorrow.push(upToDateWeatherInfo[j].main.temp);
                    counter = j + 1;
                    break;
                }
            }
            for (var k = counter; k < 40; k++) {
                if (upToDateWeatherInfo[k].dt_txt.substring(0, 10) === upToDateWeatherInfo[k + 1].dt_txt.substring(0, 10)) {
                    maxTempsNextDay.push(upToDateWeatherInfo[k].main.temp);
                    minTempsNextDay.push(upToDateWeatherInfo[k].main.temp);
                } else {
                    maxTempsNextDay.push(upToDateWeatherInfo[k].main.temp);
                    minTempsNextDay.push(upToDateWeatherInfo[k].main.temp);
                    counter = k + 1;
                    break;
                }
            }
            for (var l = counter; l < 40; l++) {
                if (upToDateWeatherInfo[l].dt_txt.substring(0, 10) === upToDateWeatherInfo[l + 1].dt_txt.substring(0, 10)) {
                    maxTempsNextNextDay.push(upToDateWeatherInfo[l].main.temp);
                    minTempsNextNextDay.push(upToDateWeatherInfo[l].main.temp);
                } else {
                    maxTempsNextNextDay.push(upToDateWeatherInfo[l].main.temp);
                    minTempsNextNextDay.push(upToDateWeatherInfo[l].main.temp);
                    counter = l + 1;
                    break;
                }
            }

            maTempsTomorrow = Math.max.apply(null, maxTempsTomorrow);
            maTempsNextDay = Math.max.apply(null, maxTempsNextDay);
            maTempsNextNextDay = Math.max.apply(null, maxTempsNextNextDay);
            miTempsTomorrow = Math.min.apply(null, minTempsTomorrow);
            miTempsNextDay = Math.min.apply(null, minTempsNextDay);
            miTempsNextNextDay = Math.min.apply(null, minTempsNextNextDay);

        }

        Temper();


        weatherData += '<div class="tempResults">' + parseInt(maTempsTomorrow) + '˚' + ' / ' + parseInt(miTempsTomorrow) + '˚' + '</div>';
        weatherData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconToday + '.png' + '>';
        weatherData += '<div class="otherResults">' + '<strong>' + data.list[0].weather[0].main + ':' + ' </strong>' + data.list[0].weather[0].description + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + data.list[0].main.humidity + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Wind: </strong>' + data.list[0].wind.speed + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + data.list[0].main.pressure + '</div>';


        tomorrowData += '<div class="tempResults">' + parseInt(maTempsNextDay) + '˚' + ' / ' + parseInt(miTempsNextDay) + '˚' + '</div>';
        tomorrowData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconTomorrow + '.png' + '>';
        tomorrowData += '<div class="otherResults">' + '<strong>' + data.list[8].weather[0].main + ':' + ' </strong>' + data.list[8].weather[0].description + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + data.list[8].main.humidity + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Wind: </strong>' + data.list[8].wind.speed + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + data.list[8].main.pressure + '</div>';


        dayAfterTomorrowData += '<div class="tempResults">' + parseInt(maTempsNextNextDay) + '˚' + ' / ' + parseInt(miTempsNextNextDay) + '˚' + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconDayAfterTomorrow + '.png' + '>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>' + data.list[16].weather[0].main + ':' + ' </strong>' + data.list[16].weather[0].description + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + data.list[16].main.humidity + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Wind: </strong>' + data.list[16].wind.speed + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + data.list[16].main.pressure + '</div>';


        $('#today').html(weatherData);
        $('#tomorrow').html(tomorrowData);
        $('#dayAfterTomorrow').html(dayAfterTomorrowData);

    });

}
ted ();

$('#mapLocate').click(ted);
$('#cityButton').click(function (){
    address = document.getElementById("citySelect").value;
    $('h1').text(address);
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address": address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            map.setCenter(results[0].geometry.location);
        } else {

            alert('Geocoding was not successful - STATUS: ' + status);
        }
        lat = results[0].geometry.location.lat();
        lng = results[0].geometry.location.lng();
        myLatLng = { lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()};
        $('h1').text(results[0].address_components[0].long_name);
    });
    ted();
});