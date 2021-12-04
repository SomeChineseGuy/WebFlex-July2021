import { useState } from "react";
import Text from "./Text"


const style = {
  padding: '100px',
  width: '900px',
  margin: '0 auto',
  backgroundColor: 'tomato'
}

const message = "Did you get this?";

const sayHello = (name) => {
  console.log(name)
}

const Container = () => {
  const [day, setDay] = useState('Monday');
  const [days, setDays] = useState([]);
  // you may not have the appointments state, its ok if you dont
  const [appointments, setAppointments] = useState({});

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  setDay("Tuesday")
  setDays([...days, "Extra stuff"])

  setState.day("Tuesday")
  setState.days([...state.days, "Extra stuff"])


  return (
    <div style={style}>      
      <Text 
        message={message} 
        sayHello={sayHello}
        onClick={()=> sayHello("Hey!")}
      />
    </div>
  )
}

export default Container