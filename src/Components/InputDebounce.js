import { useState, useEffect } from "react";

const InputDebounce = (props) => {
  const { onChange, setCity, ...otherProps } = props;

  const [inputTimeout, setInputTimeout] = useState(null);

  useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);

  const inputOnChange = (value) => {
    //Takes the value in text-box
    if (inputTimeout) clearTimeout(inputTimeout); //If input timeout is set then clearTimeout with the id of inputTimeout
    setInputTimeout(
      //Else set the input timeout by setting the set timeout funtion, i.e introduce a delay
      setTimeout(() => {
        if (onChange) {
          setCity(value);
          onChange(value);
        }
      }, 1000)
    );
  };

  return (
    <input {...otherProps} onChange={(e) => inputOnChange(e.target.value)} /> //When event is triggered call function input on change
  );
};

export default InputDebounce;
