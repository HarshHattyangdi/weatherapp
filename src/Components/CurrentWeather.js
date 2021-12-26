import { useState, useEffect } from "react";

function CurrentWeather() {
  const KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [city, setCity] = useState("Mumbai");
  const [data, setData] = useState(null);

  useEffect(() => {
    const generateRequestString = () => {
      let generatedString = BASE_URL + `q=${city}&appid=${KEY}`;
      return generatedString;
    };
    fetch(generateRequestString())
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [KEY, BASE_URL, city]); //This hook is only run when the value of city is updated, since KEY and BASEURL remain constants they can be removed as well from the dependency array

  return (
    <div>
      <h3>Current Weather of {city.toUpperCase()}</h3>
      {<pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default CurrentWeather;
