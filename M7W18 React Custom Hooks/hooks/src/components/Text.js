

const Text = (props) => {
  console.log(props)
  props.sayHello("Yo steve!")
  return (
    <div>
      The message is {props.message}
    </div>
  )
}

export default Text;