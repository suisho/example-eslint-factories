import React from "react"
import {Link} from "react-router"
export default class Index extends React.Component{
  render(){
    return <div>
      <div className="logo">
        Legend
      </div>
      <div className="start-button-container">
        <div className="start-button">
          <Link to="/question/1">
            +
          </Link>
        </div>
        <Link to="/timeline" className="skip">
          みんなのLegendを見る
        </Link>
      </div>
    </div>
  }
}
