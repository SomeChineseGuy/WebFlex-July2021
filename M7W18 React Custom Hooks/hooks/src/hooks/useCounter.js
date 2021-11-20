import { useState } from "react";

const useCounter = (firstNum) => {
  const [count, setCount] = useState(firstNum);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return [count, setCount, increment, decrement, reset];
}

export default useCounter;