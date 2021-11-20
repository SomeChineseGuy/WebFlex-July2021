import { useEffect,useState } from "react";

const useMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  
  const mouseHandle = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(()=>{
    document.addEventListener('mousemove', mouseHandle)
  },[]);

  document.removeEventListener('mousemove', mouseHandle)

  return [position, setPosition];
}

export default useMouse;