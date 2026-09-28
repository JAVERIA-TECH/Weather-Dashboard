const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByCity(cityName) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  if (!apiKey) {
    throw new Error('OpenWeather API key is missing. Add it to your .env file.');
  }

  const params = new URLSearchParams({
    q: cityName,
    units: 'metric',
    appid: apiKey,
  });

  const response = await fetch(`${API_BASE_URL}?${params.toString()}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    }
    if (response.status === 401) {
      throw new Error('Invalid OpenWeather API key.');
    }
    if (response.status === 429) {
      throw new Error('API request limit reached. Please try again later.');
    }
    throw new Error('Unable to fetch weather data. Please try again.');
  }

  return response.json();
}
