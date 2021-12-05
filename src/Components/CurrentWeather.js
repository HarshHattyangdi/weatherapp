import { useState, useEffect } from "react";

function CurrentWeather() {
  const KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [city, setCity] = useState(null);
  const [cityInput, setCityInput] = useState(city);
  const [data, setData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    let finalEndpointCoord = `${BASE_URL}lat=${lat}&lon=${long}&units=metric&appid=${KEY}`;
    console.log(BASE_URL);
    fetch(finalEndpointCoord)
      .then((res) => res.json())
      .then((result) => {
        setData(result.main);
        setCity(result.name);
        console.log(city, data);
      })
      .catch((err) => console.log(err));
    // axios
    //   .get(finalEndpoint)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, long]);

  const getData = (e) => {
    e.preventDefault();
    let finalEndpointCity = `${BASE_URL}q=${city}&units=metric&appid=${KEY}`;
    console.log(finalEndpointCity);

    fetch(finalEndpointCity)
      .then((res) => res.json())
      .then((result) => {
        setData(result.main);
        setCity(cityInput);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={(e) => getData(e)}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter City"
          required
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <input type="submit" value="Get Details" />
      </form>
      {data && city && (
        <div>
          <h2>{city.toUpperCase()}</h2>
          {Object.keys(data).map((key, i) => (
            <li key={i}>
              <span>
                {key} : {data[key]}
              </span>
            </li>
          ))}
        </div>
      )}
      {/* {data && data.feels_like} */}
    </div>
  );
}

export default CurrentWeather;
