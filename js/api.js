import { API_KEY, CURRENT_URL, FORECAST_URL } from "./config.js";

export async function fetchCurrentWeather(city) {
  const res = await fetch(
    `${CURRENT_URL}?key=${API_KEY}&q=${city}&aqi=no`
  );

  if (!res.ok) throw new Error("City not found");
  return res.json();
}

export async function fetchForecast(city) {
  const res = await fetch(
    `${FORECAST_URL}?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
  );

  if (!res.ok) throw new Error("Forecast not available");
  return res.json();
}
