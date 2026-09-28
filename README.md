# Weather Dashboard

A responsive React weather dashboard that lets users search for any city and view current weather information using the OpenWeatherMap API.

## Overview

Weather Dashboard is a frontend web application built with React and Vite. It provides a simple interface for searching a city and displaying its current temperature, weather condition, humidity, wind speed, and feels-like temperature.

The project has been reorganized into a clean component-based structure so that UI components, pages, API services, and styling are separated and easier to maintain.

## Introduction

The application demonstrates how a React frontend can consume a REST API and present live data through a responsive user interface.

When a user enters a city name, the app validates the input, requests current weather data from OpenWeatherMap, handles loading and API errors, and then displays the returned information in a dashboard.

> **API-key note:** The OpenWeatherMap key is loaded through `VITE_OPENWEATHER_API_KEY` so it is not hard-coded in the repository. Because Vite `VITE_*` variables are included in the browser bundle, this is not a server-side secret. Keep the key out of Git history and use any API-key restrictions available in your OpenWeatherMap account.

## Features

- Search weather by city name
- Real-time current weather data from OpenWeatherMap
- Temperature in Celsius
- Feels-like temperature
- Weather condition and icon
- Humidity percentage
- Wind speed
- Loading indicator while fetching data
- User-friendly error handling
- Empty state before the first search
- Responsive design for desktop, tablet, and mobile
- Component-based React architecture
- Environment-variable based API configuration

## Tools and Technologies

| Technology | Purpose |
|---|---|
| React | Building reusable UI components |
| Vite | Development server and production build tool |
| JavaScript (ES6+) | Application logic |
| CSS3 | Responsive styling and UI design |
| OpenWeatherMap API | Live weather data |
| npm | Dependency and project management |
| Git / GitHub | Version control and project hosting |

## Project Architecture

```text
Weather-Dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── Loader.jsx
│   │   ├── molecules/
│   │   │   ├── SearchForm.jsx
│   │   │   └── WeatherCard.jsx
│   │   └── pages/
│   │       └── WeatherPage.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Architecture Flow

```text
User
  │
  ▼
SearchForm
  │
  ▼
WeatherPage
  │
  ▼
weatherService.js
  │
  ▼
OpenWeatherMap API
  │
  ▼
Weather Data
  │
  ├── WeatherCard
  ├── Temperature
  ├── Condition
  ├── Humidity
  └── Wind Speed
```

## Setup and Installation

```bash
cd Weather-Dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get the API Key

You can obtain an API key from the OpenWeatherMap website:

https://openweathermap.org/api

### 4. Start the development server

```bash
npm run dev
```

Vite will show the local development URL in the terminal, normally:

```text
http://localhost:5173/
```


## API

This project uses the OpenWeatherMap Current Weather Data API.

Endpoint used by the application:

```text
https://api.openweathermap.org/data/2.5/weather
```

The request sends:

- City name
- Metric units
- API key

## Error Handling

The application provides separate messages for common failures:

- Empty city input
- City not found
- Invalid API key
- API rate limit
- General network/API errors


## License

This project is intended for educational and portfolio use.
