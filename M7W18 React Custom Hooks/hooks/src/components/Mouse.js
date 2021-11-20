import useMouse from "../hooks/useMouse";



const Mouse = () => {
  
  const [position, setPosition] = useMouse();

  const style = {
    fontSize: `${position.y / 5}px`,
    textAlign: 'center',
    color: `rgb(0, ${position.x / 4}, ${position.y / 4})`,
    backgroundColor: `rgb(${position.x / 4}, ${position.y / 4}, 0)`,
    padding: '10px',
    border: `10px dotted rgb(${position.x / 4},0, ${position.y / 4}`
  }

  const message = position.y < 550 ? 'And Dr. Dre said...' : "Nothing you idiots! Dr. Dre is dead, he's locked in my basement! ";

  return (
    <div>
      <h1 style={style}>{message}</h1>
      <h2>Current lat: {position.x}</h2>
      <h2>Current lon: {position.y}</h2>
    </div>
  )
}

export default Mouse;