const CityWeather = (props) => {
  console.log(props);
  const main = props.main;
  // console.log(main);
  let min = main.temp_min;
  let max = main.temp_max;
  let feels_like = main.feels_like;
  let icon = props.weather[0].icon;
  console.log(icon);

  // const weather = props.weather;
  //   console.log(weather);
  return (
    <div>
      <h2>
        <img
          src={`http://http://openweathermap.org/img/w/${icon}.png`}
          alt=""
        />
      </h2>
      <h2>Feels like: {feels_like}</h2>
      <h2>Min:{min}</h2>
      <h2>Max:{max}</h2>

      {/* <ul>
        {Object.keys(main).map((el, idx) => {
          return (
            <li key={main[el] + idx}>
              {el}:{main[el]}
            </li>
          );
        })}
      </ul> */}
      {/* <ul>
        {Object.keys(weather.0).map((el, idx) => {
          return (
            <li key={weather[el] + idx}>
              {el}:{weather[el]}
            </li>
          );
        })}
      </ul> */}
      {/* {JSON.stringify(weather)} */}
    </div>
  );
};

export default CityWeather;
