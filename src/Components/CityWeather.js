const CityWeather = (props) => {
  //   console.log(props);
  const main = props.main;
  //   console.log(main);

  const weather = props.weather;
  //   console.log(weather);
  return (
    <div>
      <ul>
        {Object.keys(main).map((el, idx) => {
          return (
            <li key={main[el] + idx}>
              {el}:{main[el]}
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {Object.keys(weather.0).map((el, idx) => {
          return (
            <li key={weather[el] + idx}>
              {el}:{weather[el]}
            </li>
          );
        })}
      </ul> */}
      {JSON.stringify(weather)}
    </div>
  );
};

export default CityWeather;
