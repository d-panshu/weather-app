import { fetchCurrentWeather, fetchForecast } from "./api.js";
import { showLoader, showError, showWeather } from "./ui.js";
import { saveLastCity, getLastCity } from "./storage.js";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function loadWeather(city) {
  if (!city) return;

  try {
    showLoader();

    const current = await fetchCurrentWeather(city);
    const forecast = await fetchForecast(city);

    showWeather(current, forecast);
    saveLastCity(city);

  } catch (err) {
    showError(err.message);
  }
}

searchBtn.addEventListener("click", () => {
  loadWeather(cityInput.value.trim());
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadWeather(cityInput.value.trim());
});

const lastCity = getLastCity();
if (lastCity) {
  cityInput.value = lastCity;
  loadWeather(lastCity);
}
