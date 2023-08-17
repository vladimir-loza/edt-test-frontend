import {useState} from "react";

export const useForm = (initState = {}) => {
  const [inputValue, setInputValue] = useState(initState);

  const onInputChange = (e) => {
    setInputValue(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  return {
    inputValue,
    onInputChange,
  }
}