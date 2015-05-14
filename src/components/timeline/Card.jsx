import React from "react"

class Question extends React.Component{
  render(){
    return <div>
      Q: {this.props.question}
    </div>
  }
}

class Answer extends React.Component{
  render(){
    return <div>
      A: {this.props.answer}
    </div>
  }
}
export class Card extends React.Component{
  render(){
    const {title, qa} = this.props
  }
}
