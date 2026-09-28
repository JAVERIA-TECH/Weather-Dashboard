function WeatherCard({ label, value, icon }) {
  return (
    <article className="weather-card">
      <span className="weather-icon" aria-hidden="true">{icon}</span>
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </article>
  );
}

export default WeatherCard;
