import { useState, useCallback } from "react";

const useInput = (initialValue) => {
  const [text, setText] = useState(initialValue);

  const changeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return [text, changeText, setText];
};

export default useInput;
