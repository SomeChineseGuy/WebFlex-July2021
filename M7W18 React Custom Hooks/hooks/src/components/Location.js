
import useLocation from "../hooks/useLocation";


const Location = () => {
  // const [coords, setCoords] = useState({lat: 0, lon: 0});

  // useEffect(()=> {
  //   navigator.geolocation.getCurrentPosition((event) => {
  //     setCoords({
  //       lat: event.coords.latitude, 
  //       lon: event.coords.longitude
  //     })
  //   })

  // }, [])

  const [coords] = useLocation();

  const clickHandler = () => {
    alert(`You are currently at ${coords.lat}, ${coords.lon}`)
  }

  return (
    <div>
      <h1>See where you are! </h1>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default Location;

// export default function Location() {

// }