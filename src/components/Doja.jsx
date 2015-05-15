import React from "react"

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
var qas = [
  {
    "question": "年収どのぐらい？",
    "querist": {
      hat: "美容師 19歳 女性",
      avater: "http://stat.ameba.jp/user_images/20100805/05/illustrator-yagi/1c/d4/j/t02200222_0355035910676031062.jpg"
    },
    "answer": "平均よりもらってる"
  },
  {
    "question": "シゴトで使ってる言語って何？",
    "querist": {
      hat: "IT企業勤務 28歳 男性",
      avater: "http://suisho.github.io/scratches/2.jpg"

    },
    "answer": "PHPが主かなー。"
  }
]

class QACard extends React.Component{
  render(){
    const {question, answer, querist} = this.props
    return <div className="qa-card">
      <div className="qa-question clearfix">
        <img className="avater querist-avater" src={querist.avater} />
        <div className="qa-item">
          <div className="question-text">{question}</div>
          <div className="querist-hat">{querist.hat}</div>
        </div>
      </div>
      <div className="qa-answer">
        <span>{answer}</span>
      </div>
    </div>
  }
}
class QACardList extends React.Component{
  render(){
    var cards = qas.map((qa) => {
      return <QACard {...qa} />
    })
    return <div>
      {cards}
    </div>
  }
}
export class Doja extends React.Component{
  render(){
    return <div className="page-doja">
      <UserHeader user={mockUser}></UserHeader>
      <QACardList />
    </div>
  }
}
