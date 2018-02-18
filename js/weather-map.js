var myLatLng = {};
var lat = 29.4241219;
var lng = -98.49362819999999;


//Google Maps Scripting

var map;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.4259671, lng: -98.4861419},
        zoom: 10
    });
}

initMap();

//Google Maps Marker Event code

google.maps.event.addListener(map, "click", function(event) {

    lat = event.latLng.lat();
    lng = event.latLng.lng();
    // change the temp value based on click: lat, lng
    myLatLng = {
        lat: lat,
        lng: lng
    };

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
    map.setCenter(myLatLng);

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"location": myLatLng}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {

            map.setCenter(results[0].geometry.location);

        } else {

            alert('Geocoding was not successful - STATUS: ' + status);
        }

        $('h1').text(results[0].address_components[2].long_name);
    });


    ted();

    $('#clearmarker').click(function(){
        marker.setMap(null);
    });



});

//OpenWeather Scripting and parsing


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

        var dateTemp = [];
        var dateTomorrow = "";
        var dateNextDay = "";
        var dateNextNextDay = "";

        var maxTempsTemp = [];
        var maTempsTomorrow = 0;
        var maTempsNextDay = 0;
        var maTempsNextNextDay = 0;

        var minTempsTemp = [];
        var miTempsTomorrow = 0;
        var miTempsNextDay = 0;
        var miTempsNextNextDay = 0;

        var iconTemp = [];
        var iconTomorrow = "";
        var iconNextDay = "";
        var iconNextNextDay = "";

        var weatherTemp = [];
        var weTomorrow = "";
        var weNextDay = "";
        var weNextNextDay = "";

        var weatherdescripTemp = [];
        var wdescripTomorrow = "";
        var wdescripNextDay = "";
        var wdescripNextNextDay = "";

        var humidityTemp = [];
        var huTomorrow = "";
        var huNextDay = "";
        var huNextNextDay = "";

        var windTemp = [];
        var wiTomorrow = "";
        var wiNextDay = "";
        var wiNextNextDay = "";

        var pressureTemp = [];
        var prTomorrow = "";
        var prNextDay = "";
        var prNextNextDay = "";

        var counter = 0;

        var today = new Date();

        function parsing () {
            for (var i = 0; i < upToDateWeatherInfo.length; i++) {
                if (upToDateWeatherInfo[i].dt_txt.substring(0, 10) === upToDateWeatherInfo[i + 1].dt_txt.substring(0, 10)) {
                } else {
                    counter = i + 1;
                    break;
                }
            }
            for (var j = counter; j < upToDateWeatherInfo.length; j++) {
                if (upToDateWeatherInfo[j].dt_txt.substring(0, 10) === upToDateWeatherInfo[j + 1].dt_txt.substring(0, 10)) {
                    dateTemp.push(upToDateWeatherInfo[j].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[j].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[j].main.temp);
                    iconTemp.push(upToDateWeatherInfo[j].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[j].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[j].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[j].main.humidity);
                    windTemp.push(upToDateWeatherInfo[j].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[j].main.pressure);

                } else {
                    dateTemp.push(upToDateWeatherInfo[j].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[j].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[j].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[j].main.temp);
                    iconTemp.push(upToDateWeatherInfo[j].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[j].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[j].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[j].main.humidity);
                    windTemp.push(upToDateWeatherInfo[j].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[j].main.pressure);

                    dateTomorrow = dateTemp[3];
                    dateTemp = [];

                    maTempsTomorrow = Math.max.apply(null, maxTempsTemp);
                    maxTempsTemp = [];

                    miTempsTomorrow = Math.min.apply(null, minTempsTemp);
                    minTempsTemp =[];

                    console.log(today);

                    iconTomorrow = iconTemp[3];
                    iconTemp = [];

                    weTomorrow = weatherTemp[3];
                    weatherTemp = [];

                    wdescripTomorrow = weatherdescripTemp[3];
                    weatherdescripTemp = [];

                    huTomorrow = humidityTemp[3];
                    humidityTemp =[];

                    wiTomorrow = windTemp[3];
                    windTemp = [];

                    prTomorrow = pressureTemp[3];
                    pressureTemp = [];

                    counter = j + 1;
                    break;
                }
            }
            for (var k = counter; k < upToDateWeatherInfo.length; k++) {
                if (upToDateWeatherInfo[k].dt_txt.substring(0, 10) === upToDateWeatherInfo[k + 1].dt_txt.substring(0, 10)) {
                    dateTemp.push(upToDateWeatherInfo[k].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[k].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[k].main.temp);
                    iconTemp.push(upToDateWeatherInfo[k].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[k].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[k].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[k].main.humidity);
                    windTemp.push(upToDateWeatherInfo[k].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[k].main.pressure);
                } else {
                    dateTemp.push(upToDateWeatherInfo[k].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[k].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[k].main.temp);
                    iconTemp.push(upToDateWeatherInfo[k].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[k].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[k].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[k].main.humidity);
                    windTemp.push(upToDateWeatherInfo[k].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[k].main.pressure);

                    dateNextDay = dateTemp[3];
                    dateTemp = [];

                    maTempsNextDay = Math.max.apply(null, maxTempsTemp);
                    maxTempsTemp = [];

                    miTempsNextDay = Math.min.apply(null, minTempsTemp);
                    minTempsTemp =[];

                    iconNextDay = iconTemp[3];
                    iconTemp = [];

                    weNextDay = weatherTemp[3];
                    weatherTemp = [];

                    wdescripNextDay = weatherdescripTemp[3];
                    weatherdescripTemp = [];

                    huNextDay = humidityTemp[3];
                    humidityTemp =[];

                    wiNextDay = windTemp[3];
                    windTemp = [];

                    prNextDay = pressureTemp[3];
                    pressureTemp = [];

                    counter = k + 1;
                    break;
                }
            }
            for (var l = counter; l < upToDateWeatherInfo.length; l++) {
                if (upToDateWeatherInfo[l].dt_txt.substring(0, 10) === upToDateWeatherInfo[l + 1].dt_txt.substring(0, 10)) {
                    dateTemp.push(upToDateWeatherInfo[l].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[l].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[l].main.temp);
                    iconTemp.push(upToDateWeatherInfo[l].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[l].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[l].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[l].main.humidity);
                    windTemp.push(upToDateWeatherInfo[l].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[l].main.pressure);

                } else {
                    dateTemp.push(upToDateWeatherInfo[l].dt_txt.substring(5, 10));
                    maxTempsTemp.push(upToDateWeatherInfo[l].main.temp);
                    minTempsTemp.push(upToDateWeatherInfo[l].main.temp);
                    iconTemp.push(upToDateWeatherInfo[l].weather[0].icon);
                    weatherTemp.push(upToDateWeatherInfo[l].weather[0].main);
                    weatherdescripTemp.push(upToDateWeatherInfo[l].weather[0].description);
                    humidityTemp.push(upToDateWeatherInfo[l].main.humidity);
                    windTemp.push(upToDateWeatherInfo[l].wind.speed);
                    pressureTemp.push(upToDateWeatherInfo[l].main.pressure);

                    dateNextNextDay = dateTemp[3];
                    dateTemp = [];

                    maTempsNextNextDay = Math.max.apply(null, maxTempsTemp);
                    maxTempsTemp = [];

                    miTempsNextNextDay = Math.min.apply(null, minTempsTemp);
                    minTempsTemp =[];

                    iconNextNextDay = iconTemp[3];
                    iconTemp = [];

                    weNextNextDay = weatherTemp[3];
                    weatherTemp = [];

                    wdescripNextNextDay = weatherdescripTemp[3];
                    weatherdescripTemp = [];

                    huNextNextDay = humidityTemp[3];
                    humidityTemp =[];

                    wiNextNextDay = windTemp[3];
                    windTemp = [];

                    prNextNextDay = pressureTemp[3];
                    pressureTemp = [];

                    counter = l + 1;

                    break;
                }
            }
        }

        parsing();

        weatherData += '<div class="otherResults">' + '<strong>Date: </strong>' + dateTomorrow + '</div>';
        weatherData += '<div class="tempResults">' + parseInt(maTempsTomorrow) + '˚' + ' / ' + parseInt(miTempsTomorrow) + '˚' + '</div>';
        weatherData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconTomorrow + '.png' + '>';
        weatherData += '<div class="otherResults">' + '<strong>' + weTomorrow + ':' + ' </strong>' + wdescripTomorrow + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + huTomorrow + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Wind: </strong>' + wiTomorrow + '</div>';
        weatherData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + prTomorrow + '</div>';

        tomorrowData += '<div class="otherResults">' + '<strong>Date: </strong>' + dateNextDay + '</div>';
        tomorrowData += '<div class="tempResults">' + parseInt(maTempsNextDay) + '˚' + ' / ' + parseInt(miTempsNextDay) + '˚' + '</div>';
        tomorrowData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconNextDay + '.png' + '>';
        tomorrowData += '<div class="otherResults">' + '<strong>' + weNextDay + ':' + ' </strong>' + wdescripNextDay + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + huNextDay + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Wind: </strong>' + wiNextDay + '</div>';
        tomorrowData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + prNextDay + '</div>';

        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Date: </strong>' + dateNextNextDay + '</div>';
        dayAfterTomorrowData += '<div class="tempResults">' + parseInt(maTempsNextNextDay) + '˚' + ' / ' + parseInt(miTempsNextNextDay) + '˚' + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<img ' + 'src=' + 'http://openweathermap.org/img/w/' + iconNextNextDay + '.png' + '>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>' + weNextNextDay + ':' + ' </strong>' + wdescripNextNextDay + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Humidity: </strong>' + huNextNextDay + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Wind: </strong>' + wiNextNextDay + '</div>';
        dayAfterTomorrowData += '<div class="otherResults">' + '<strong>Pressure: </strong>' + prNextNextDay + '</div>';


        $('#today').html(weatherData);
        $('#tomorrow').html(tomorrowData);
        $('#dayAfterTomorrow').html(dayAfterTomorrowData);

    });

}
ted ();

$('#cityButton').click(function (){
    var address = document.getElementById("citySelect").value;
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

    console.log(lat);
    console.log(lng);
    setTimeout(ted, 1300);
});

$('#checkboxTwo').click(function(){
   $('#dayAfterTomorrow').hide();
    $('#tomorrow').show();
    $('#today').show();
});

$('#checkboxOne').click(function(){
    $('#dayAfterTomorrow').hide();
    $('#tomorrow').hide();
});

$('#checkboxThree').click(function(){
    $('#dayAfterTomorrow').show();
    $('#tomorrow').show();
    $('#today').show();
});