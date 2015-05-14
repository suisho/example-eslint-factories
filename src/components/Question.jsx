import React from "react"

export class Question1 extends React.Component{
  render(){
    return <div className="page page-question">
      <h1>あなたの性別を教えて下さい</h1>
      <div className="osumes">
        <span className="osu">♂</span>
        <span className="mesu">♀</span>
      </div>
    </div>
  }
}
