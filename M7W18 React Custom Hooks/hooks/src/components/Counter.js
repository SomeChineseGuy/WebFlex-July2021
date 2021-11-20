import { useState } from "react"
import useCounter from "../hooks/useCounter"


const Counter = () => {

  const [count, setCount, increment123, decrement, reset] = useCounter();
  // const count = useCounter[0]
  // const setCount = useCounter[1]

  return (
    <div>
      <h1>My Counter!</h1>
      <p>{count}</p>
      <button onClick={increment123}>+ 1</button>
      <button onClick={decrement}>- 1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter