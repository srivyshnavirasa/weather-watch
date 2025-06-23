const apiKey = '0b275829a373d3573b918134ba43d693'; 

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const weatherResult = document.getElementById('weatherResult');

  if (!city) {
    weatherResult.innerHTML = 'Please enter a city name.';
    return;
  }

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      const description = weather[0].description;
      weatherResult.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Forecast:</strong> ${description}</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = 'Error: ' + error.message;
    });
}
