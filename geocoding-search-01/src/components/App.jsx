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

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetchCoordinates(searchQuery)
      .then(setCoordinates)
      .catch(error => {
        setCoordinates(null)
      })
    }
    else {
      setCoordinates(null)
    }
  }, [searchQuery]);

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
        coordinates
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
                    </tr>
                    <tr>
                      <td>{coordinates[0]}</td>
                      <td>{coordinates[1]}</td>
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
