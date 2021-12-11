import { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      interval: null
    }
  }

  // Fetching data, establishing connection, set Intervals
  componentDidMount() {
    console.log("This Component has Mounted")
    this.state.interval = setInterval(() => {
      console.log("Hello This is a message")
    },  1000)
  }
  // Listening for updates or updates to state
  componentDidUpdate() {
    console.log("This Component has updated")
  }
  // Clean up, unconnect to socket
  componentWillUnmount() {
    console.log("This Component has disconnected")
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div>
        <h2>Life Cycle</h2>
        <input 
          type="text" 
          value={this.state.searchTerm}
          onChange={(event) => this.setState({searchTerm: event.target.value})}
        />
        <h2>Search Term: {this.state.searchTerm}</h2>

      </div>
    )
  }
}

export default LifeCycle