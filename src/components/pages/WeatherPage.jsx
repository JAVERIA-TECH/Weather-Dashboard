import { useState } from 'react';
import SearchForm from '../molecules/SearchForm';
import WeatherCard from '../molecules/WeatherCard';
import Loader from '../atoms/Loader';
import ErrorMessage from '../atoms/ErrorMessage';
import { getWeatherByCity } from '../../services/weatherService';

function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchedCity, setSearchedCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWeather(cityName) {
    const city = cityName.trim();

    if (!city) {
      setError('Please enter a city name.');
      setWeatherData(null);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await getWeatherByCity(city);
      setWeatherData(data);
      setSearchedCity(data.name);
    } catch (requestError) {
      setWeatherData(null);
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }

  const condition = weatherData?.weather?.[0];

  return (
    <main className="app-shell">
      <section className="dashboard" aria-label="Weather Dashboard">
        <header className="hero">
          <p className="eyebrow">REAL-TIME WEATHER</p>
          <h1>Weather Dashboard</h1>
          <p>Search for any city to view its current weather conditions.</p>
        </header>

        <SearchForm onSubmit={fetchWeather} disabled={loading} />

        {loading && <Loader />}
        {!loading && error && <ErrorMessage message={error} />}

        {!loading && !error && !weatherData && (
          <div className="empty-state">
            <div className="empty-icon" aria-hidden="true">🌤️</div>
            <h2>Check the weather anywhere</h2>
            <p>Enter a city above to get temperature, conditions, humidity, and wind speed.</p>
          </div>
        )}

        {weatherData && (
          <section className="weather-result" aria-live="polite">
            <div className="location">
              <div>
                <p className="eyebrow">CURRENT WEATHER</p>
                <h2>{searchedCity}</h2>
                <p>{weatherData.sys?.country}</p>
              </div>
              <div className="main-condition">
                <span className="condition-icon" aria-hidden="true">
                  {condition?.icon ? (
                    <img
                      src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
                      alt=""
                    />
                  ) : (
                    '🌤️'
                  )}
                </span>
                <strong>{Math.round(weatherData.main.temp)}°C</strong>
                <span>{condition?.description}</span>
              </div>
            </div>

            <div className="weather-grid">
              <WeatherCard
                label="Feels Like"
                value={`${Math.round(weatherData.main.feels_like)}°C`}
                icon="🌡️"
              />
              <WeatherCard
                label="Condition"
                value={condition?.description || 'N/A'}
                icon="☁️"
              />
              <WeatherCard
                label="Humidity"
                value={`${weatherData.main.humidity}%`}
                icon="💧"
              />
              <WeatherCard
                label="Wind Speed"
                value={`${weatherData.wind.speed} m/s`}
                icon="💨"
              />
            </div>

            <p className="updated">
              Updated {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </section>
        )}
      </section>
    </main>
  );
}

export default WeatherPage;
