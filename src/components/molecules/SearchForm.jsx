import { useState } from 'react';

function SearchForm({ onSubmit, disabled = false }) {
  const [city, setCity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(city);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="city-search">
        City name
      </label>
      <input
        id="city-search"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Enter city name..."
        autoComplete="off"
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
