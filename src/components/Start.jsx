import React from "react"
import {Link} from "react-router"
export default class Start extends React.Component{
  render(){
    return <div className="page page-start">
      <div className="logo">
        Legend
      </div>
      <div className="start-button-container">
        <div className="start-button">
          <Link to="/question/1">
            +
          </Link>
        </div>
      </div>
      <div className="skip">
        <Link to="/bar">
          みんなのLegendを見る
        </Link>
      </div>
    </div>
  }
}
