import { Component } from "react";

class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      interviewer: "steve" || null,
      message: null
    }
    this.increment = this.increment.bind(this)
  }

 increment() {
  //  this.state.counter += 1
  //  const [counter, setCounter] = useState(0)
  
  this.setState({counter: this.state.counter + 1, message: "Do you see this?"})
 }

  render() {
    const {someProps} = this.props;
    const {props} = this;
    return (
      <div>
        <h2>This is my Class Component!</h2>
        <h2>{this.props.someProps}</h2>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.increment}>Click me!</button>
      </div>
    )
  }
}

export default ClassBased;

