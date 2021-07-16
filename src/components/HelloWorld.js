import { Component } from 'react'

export const now = new Date()
export const helloToday = `오늘은 ${now.getFullYear()}년 ${now.getMonth()}월 ${now.getDate()}일 입니다.`

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  handlePlusClick = () => {
    this.setState({ count: this.state.count + 1})
    // 이렇게 두번 호출하면 어떻게 될까?
    // this.setState({ count: this.state.count + 1})
    // this.setState({ count: this.state.count + 1})
  }
  
  render() {
    return (
      <div>
        Hello {this.props.name}!
        <span>{this.state.count}</span>
        <button onClick={this.handlePlusClick}>+1</button>
      </div>
    )
  }
}

export default HelloWorld
