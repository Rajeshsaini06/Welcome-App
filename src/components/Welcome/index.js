// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {button: false}

  onSubscribe = () => {
    this.setState(prevState => ({button: !prevState.button}))
  }

  clickButton = () => {
    const {button} = this.state

    return button ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.clickButton()
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning!</p>
        <button type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
