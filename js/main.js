import { fetchWeather } from "./api.js";
import { showLoading, showError, showWeather } from "./ui.js";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function handleSearch() {
  const city = cityInput.value.trim();
  if (!city) return;

  try {
    showLoading();
    const data = await fetchWeather(city);
    showWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

searchBtn.addEventListener("click", handleSearch);

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});
