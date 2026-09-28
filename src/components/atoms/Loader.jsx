function Loader() {
  return (
    <div className="status-card loading" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span>Fetching weather data...</span>
    </div>
  );
}

export default Loader;
