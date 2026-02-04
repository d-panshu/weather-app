const result = document.getElementById("result");
const loader = document.getElementById("loader");

export function showLoader() {
  loader.classList.remove("hidden");
  result.innerHTML = "";
}

export function hideLoader() {
  loader.classList.add("hidden");
}

export function showError(message) {
  hideLoader();
  result.innerHTML = `<p class="error">${message}</p>`;
}

export function showWeather(current, forecast) {
  hideLoader();

  const days = forecast.forecast.forecastday;

  result.innerHTML = `
    <h3>${current.location.name}, ${current.location.country}</h3>
    <p>${current.current.condition.text}</p>
    <img src="https:${current.current.condition.icon}" />

    <p>🌡 ${current.current.temp_c} °C</p>
    <p>💧 Humidity: ${current.current.humidity}%</p>
    <p>🌬 Wind: ${current.current.wind_kph} km/h</p>

    <h4>3-Day Forecast</h4>
    <div>
      ${days.map(day => `
        <div>
          <strong>${day.date}</strong>
          <p>${day.day.condition.text}</p>
          <p>🌡 ${day.day.avgtemp_c} °C</p>
        </div>
      `).join("")}
    </div>
  `;
}
