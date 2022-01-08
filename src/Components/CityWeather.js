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
    <>
      <div className={props.className}>
        <div>
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </div>
        <div>
          <h2>Feels like: {feels_like}</h2>
          <h2>Min:{min}</h2>
          <h2>Max:{max}</h2>
        </div>
      </div>
    </>
  );
};

export default CityWeather;
