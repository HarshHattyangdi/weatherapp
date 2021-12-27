import { useState, useEffect } from "react";

const InputDebounce = (props) => {
  const { onChange, setCity, ...otherProps } = props;

  const [inputTimeout, setInputTimeout] = useState(null);

  useEffect(() => () => clearTimeout(inputTimeout), [inputTimeout]);

  const inputOnChange = (value) => {
    if (inputTimeout) clearTimeout(inputTimeout);
    setInputTimeout(
      setTimeout(() => {
        if (onChange) onChange(value);
      }, 500)
    );
  };

  return (
    <input {...otherProps} onChange={(e) => inputOnChange(e.target.value)} />
  );
};

export default InputDebounce;
