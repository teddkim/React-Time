import React from 'react'
import ReactDOM from 'react-dom'
import TimeDisplay from './TimeDisplay'

class App extends React.Component {
  state = {time: new Date().toLocaleTimeString(), hour: new Date().getHours() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

  renderContent() {
    return <TimeDisplay hour={this.state.hour} />;
  }
  
  render () {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))