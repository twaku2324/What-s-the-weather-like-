    function getWeather() {

    var apiKey = '6cc1f5535b31e95ecae0b4a51a716b99' ;
    var city = document.getElementById('city').ariaValueMax;
    
    if(!city) {
        alert('please eneter a city');
        return;   
    }

    var currentWeatherUrl ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&apiid=${apiKey}';
    
    function getWeather() {

        fetch(currentWeatherUrl)
        .then (response => response.json())
        .then (data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching  current weather data:',error);
            alert ('Error fetching current weather data. Please try again.');
        });
        }

        function getWeather() {

            fetch(forecastUrl)
            .then(response => response.json ())
            .then(data => {
                displayHourlyForecast(data.list) ;
            })
            .catch(error => {
                console.error('Error fetching hourly forecast data:', error);
                alert ('Error fetching hourly forecast data. Please try again.');
        });

        }
    }
    function displayWeather(data) {
        var temDivInfo = document.getElementById('temp-div');
        var weatherInfoDiv = document.getElementById ('weather-info');
        var weatherIcon = document.getElementById ('weather-icon');
        var displayHourlyForecastDiv = document.getElementById ('hourly-forecast');
    
    weatherInfoDiv.innerHTML = '';
    displayHourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
    }
    function displayWeather(data) {
        if (data.cod == '404') {
            weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
        } else {
            var cityName = data.cityName;
            var temperature = Math.round(data.main.temp - 273.15);
            var iconCode = data.weather [0].icon;
            var iconUrl = 'https://openweathermap.org/img/wn/$(iconCode)@4x.png';

            var temperatureHTML = '<p>${temperature}°С</p>';
            var weatherHtml = '<p>${cityName}</p> <p>${description}</p>';
            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfoDiv.innerHTML = weatherHtml;
            weatherIcon.src = iconUrl;
            weatherIcon.alt = description;

            showImage();
        }

        function displayHourlyForecast (hourlyData) {

            var displayHourlyForecast = document.getElementById('hourly-forecast');
            var next24Hours = hourlyData.slice(0, 8);

            next24Hours.forEach(item => {
                var dateTime = new Date (item.dt * 1000);
                var hour = dateTime.getHours();
                var temperature = Math.round(item.main.temp - 273.15);
                var iconCode = item.weather[0].icon;
                var iconUrl = 'https://openwethermap.org/img/wn/${iconCode}.png';

                var hourlyItemHtml = '<div class= "hourly-item"> <span>${hour}: 00</span> <img src="${iconUrl}" alt="Hourly Weather Icon"> <span>${tempreature}°С</span> </div>';
                displayHourlyForecastDiv.innerHTML += hourlyItemHtml;
            });
        }

        function showImage() {

            var weatherIcon = document.getElementById('weather-icon');
            weatherIcon.style.display = 'block';

        }
    }
