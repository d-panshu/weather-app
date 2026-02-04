import { API_KEY, BASE_URL } from "./config.js";

export async function fetchWeather(city) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}
