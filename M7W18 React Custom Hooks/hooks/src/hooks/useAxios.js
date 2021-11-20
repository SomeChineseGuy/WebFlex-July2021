import axios from "axios";
import {  useEffect, useState } from "react";
import useCounter from "./useCounter";

const useAxios = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useCounter(0);

  const increment = () => {
    setCount(count + 1)
  }  
  
  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(data => {
        setInput(data.data.fact)
      })
      .catch(err=> {
        console.log(err)
      })
    console.log("Hello");
  }, [count])

  return [input, setInput, count, setCount, increment];

}

export default useAxios;