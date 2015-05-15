import React from "react/addons"
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

var mockUser = {
  hat: "IT企業勤務 エンジニア 20代",
  name: "ブルテリア"
}

class UserHeader extends React.Component{
  render(){
    const {user} = this.props;
    return <div className="user-header">
      <div className="user-hat">{user.hat}</div>
      <div className="user-name">
        {user.name}さんにご質問
      </div>
    </div>
  }
}
var qustionsStore = [
  {
    "id": 1,
    "question": "ちゃんとご飯食べてる",
    "querist": {
      hat: "弁当販売業 48歳 女性",
      avater: "http://stat.ameba.jp/user_images/20100805/05/illustrator-yagi/1c/d4/j/t02200222_0355035910676031062.jpg"
    },
    "answer": null
  },
  {
    "id": 2,
    "question": "残業どんくらい？",
    "querist": {
      hat: "35人のユーザーが知りたがっています",
      avater: "http://static1.wikia.nocookie.net/__cb20120201061924/althistory/images/a/a2/B-384157-group_of_people-1-.jpg"
    },
    "answer": null
  }
]
var mockAnswerdQuestion = [
  {
    "id": 3,
    "question": "年収どのぐらい？",
    "querist": {
      hat: "美容師 19歳 女性",
      avater: "https://pbs.twimg.com/profile_images/2942980791/7cde2fa8e744ea8768214637a8081fe8_400x400.jpeg"
    },
    "answer": "平均よりもらってる"
  },
  {
    "id": 4,
    "question": "シゴトで使ってる言語って何？",
    "querist": {
      hat: "IT企業勤務 28歳 男性",
      avater: "http://suisho.github.io/scratches/2.jpg"

    },
    "answer": "PHPが主かな。"
  }
]

class Question extends React.Component{
  render(){
    const {question, answer, querist} = this.props
    return (
      <div className="qa-question clearfix">
        <img className="avater querist-avater" src={querist.avater} />
        <div className="qa-item">
          <div className="question-text">{question}</div>
          <div className="querist-hat">{querist.hat}</div>
        </div>
      </div>
    )
  }
}

class Answerd extends React.Component{
  render(){
    const { answer} = this.props
    return (
      <div className="qa-answer">
        <span>{answer}</span>
      </div>
    )
  }
}
class AnswerForm{
  sendAnswer(e){
    var text = React.findDOMNode(this.refs.answerText)
    this.props.onAnswer(text.value)
  }
  render(){
    return (
      <div className="answer-form">
        <div className="textarea-demi">
          <textarea ref="answerText"></textarea>
        </div>
          <div className="doyakun" onClick={this.sendAnswer.bind(this)}>
            <img src="./assets/doyakun.png"/>
            <div className="answer-text">
              こたえる
            </div>
          </div>
        <div className="answer-skip" onClick={this.props.onAnswerSkip}>
          &gt;&gt;答えない
        </div>
      </div>
    )
  }
}

class QACard extends React.Component{
  render(){
    const {question, answer, querist} = this.props
    return <div className="qa-card">
      <Question question={question} querist={querist} />
      <Answerd answer={answer} />
    </div>
  }
}

class AnswerCard extends React.Component{
  render(){
    const {question, querist, id} = this.props
    return (
      <div className="qa-card card-answer" key={id} >
        <Question question={question} querist={querist} />
        <AnswerForm {...this.props} />
      </div>
    )
  }
}
class QACardList extends React.Component{
  render(){
    var cards = this.props.answerdQuestion.map((qa, i) => {
      return (
        <ReactCSSTransitionGroup transitionName="question" >
          <QACard {...qa} key={i} />
        </ReactCSSTransitionGroup>
      )
    })
    return <div>
      {cards}
    </div>
  }
}
export class Doja extends React.Component{
  constructor(){
    super()
    this.state = {
      questions: qustionsStore,
      answerd: mockAnswerdQuestion
    }
  }
  onAnswerSkip(){
    var q = this.state.questions
    q.shift()
    this.setState({
      questions: q
    })
  }
  onAnswer(answer){
    var q = this.state.questions
    var a = this.state.answerd
    var currentQ = q.shift()
    currentQ.answer = answer
    a.unshift(currentQ)
    this.setState({
      questions: q,
      answerd: a
    })
  }
  render(){
    var qs = this.state.questions[0]
    return (
      <div className="page-doja">
        <UserHeader user={mockUser}></UserHeader>
        <ReactCSSTransitionGroup transitionName="fade" transitionLeave={false}>
          <AnswerCard {...qs} key={qs.id}
            onAnswer={this.onAnswer.bind(this)}
            onAnswerSkip={this.onAnswerSkip.bind(this)}
          />
        </ReactCSSTransitionGroup>
        <QACardList answerdQuestion={this.state.answerd}/>
      </div>
    )
  }
}
