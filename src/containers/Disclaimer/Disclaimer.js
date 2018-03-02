import React, {Component} from "react"
import Nav from "../Nav/Nav"
import "./Disclaimer.sass"


class Disclaimer extends Component {
  render(){
    return (
      <div>
        <Nav />
        <div className="Disclaimer">
        <div className="Disclaimer__left">
          <h3>Disclaimer</h3>
          <Dp/>
          <Dp/>
          <Dp/>
          <Dp/>
          <Dp/>
        </div>
        <div className="Disclaimer__right" />
        </div>
      </div>
    )
  }
}

const Dp = ({}) => (
  <div className="Disclaimer__item">
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris elit, quis egestas libero aliquet id. Cras non eros sit amet ex semper semper. Mauris nec aliquam ex. Fusce sit amet quam euismod, posuere magna non, semper nisl. Nulla in tellus dapibus, fermentum sem non, pellentesque nulla. Etiam eget purus neque.
</p>
  </div>
)

export default Disclaimer 