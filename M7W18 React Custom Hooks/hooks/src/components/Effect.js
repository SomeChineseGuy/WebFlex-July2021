import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useCounter from "../hooks/useCounter";

const Effect = () => {
  // const [input, setInput] = useState('');
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1)
  // }
  
  // useEffect(() => {
  //   axios.get('https://catfact.ninja/fact')
  //     .then(data => {
  //       setInput(data.data.fact)
  //     })
  //     .catch(err=> {
  //       console.log(err)
  //     })
  //   console.log("Hello");
  // }, [count])

  const [input, setInput, count, setCount, increment] = useAxios();
  const [count1, setCount1, increment1] = useCounter(0);
  const [count2, setCount2, increment2] = useCounter(0);
  const [count3, setCount3, increment3] = useCounter(0);
  const [count4, setCount4, increment4] = useCounter(0);

  const style = {
    padding: '100px',
    backgroundColor: 'tomato',
  }

  return (
    <div style={style}>
      <input 
        onChange={(event) => setInput(event.target.value)}
      />

      <h1>{input}</h1>
      <div>
        <h1>My Counter!</h1>
        <p>Number of Cat facts: {count + 1}</p>
        <button onClick={increment}>+ 1</button>

      </div>
      <div>
        <h1>My Counter!</h1>
        <p>Number of students with dogs : {count1}</p>
        <button onClick={increment1}>+ 1</button>

      </div>

      <div>
        <h1>My Counter!</h1>
        <p>Number of students with cats: {count2}</p>
        <button onClick={increment2}>+ 1</button>

      </div>
      <div>
        <h1>My Counter!</h1>
        <p>Number of things that don't matter: {count3}</p>
        <button onClick={increment3}>+ 1</button>

      </div>
      <div>
        <h1>My Counter!</h1>
        <p>Number of things that don't matter: {count4}</p>
        <button onClick={increment4}>+ 1</button>

      </div>
    </div>
  )
}

export default Effect;