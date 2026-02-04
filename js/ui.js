const result = document.getElementById("result");

export function showLoading() {
  result.innerHTML = "<p>Loading...</p>";
}

export function showError(message) {
  result.innerHTML = `<p>${message}</p>`;
}

export function showWeather(data) {
  const city = data.location.name;
  const country = data.location.country;
  const time = data.location.localtime;

  const temp = data.current.temp_c;
  const humidity = data.current.humidity;
  const wind = data.current.wind_kph;
  const condition = data.current.condition.text;
  const icon = data.current.condition.icon;

  result.innerHTML = `
    <h3>${city}, ${country}</h3>
    <p>${condition}</p>
    <img src="https:${icon}" alt="${condition}">
    <p>🌡 ${temp} °C</p>
    <p>💧 Humidity: ${humidity}%</p>
    <p>🌬 Wind: ${wind} km/h</p>
    <small>${time}</small>
  `;
}
