import React, { useEffect, useState } from "react";

// return: [latitude, longitude]
const fetchCoordinates = (searchQuery) => {
  // https://docs.mapbox.com/api/search/geocoding/
  // https://docs.mapbox.com/playground/geocoding/

  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiamFtZXMtaGlsbC0wMSIsImEiOiJjbHI3bmp2aGoybnNoMmtwYTU0eTh2MGdjIn0.FTC8Traw9aGzUizDCfCSOw'
  const MAPBOX_SEARCH_URL   = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?limit=1&proximity=ip&access_token=${MAPBOX_ACCESS_TOKEN}`

  return fetch(MAPBOX_SEARCH_URL)
    .then(result => result.json())
    .then(result => result.features[0].center)
    .then(result => result.reverse())
}

const fetchWeatherData = (coordinates) => {
  // https://www.weather.gov/documentation/services-web-api

  const WEATHER_API_URL = `https://api.weather.gov/points/${coordinates[0]},${coordinates[1]}`

  return fetch(WEATHER_API_URL)
    .then(result => result.json())
    .then(result => result.properties.forecast)
    .then(fetch)
    .then(result => result.json())
    .then(result => result.properties.periods)
}

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setCoordinates(null)

    if (searchQuery) {
      fetchCoordinates(searchQuery)
      .then(setCoordinates)
      .catch(error => {})
    }
  }, [searchQuery]);

  useEffect(() => {
    setWeatherData(null)

    if (coordinates) {
      fetchWeatherData(coordinates)
      .then(setWeatherData)
      .catch(error => {})
    }
  }, [coordinates]);

  const runSearchQuery = (event) => {
    event.preventDefault();

    setSearchQuery(
      document.getElementById('search-query').value
    );
  }

  return (
    <>
      <label>Search Query:</label>
      <input type="text" id="search-query"></input>
      <input type="submit" value="Submit" onClick={runSearchQuery}></input>
      {
        (coordinates && coordinates.length)
          ? (
              <>
                <h4>
                  <a target="_blank" href={`https://maps.google.com/?q=${coordinates[0]},${coordinates[1]}`}>Google Map</a>
                </h4>
                <table>
                  <tbody>
                    <tr>
                      <th>latitude:</th>
                      <th>longitude:</th>
                      <th width="100%">weather:</th>
                    </tr>
                    <tr>
                      <td>{coordinates[0]}</td>
                      <td>{coordinates[1]}</td>
                      <td>
                      {
                        (weatherData && weatherData.length && weatherData[0].detailedForecast)
                          ? weatherData[0].detailedForecast
                          : ''
                      }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )
          : null
      }
    </>
  );
}

export default App;
