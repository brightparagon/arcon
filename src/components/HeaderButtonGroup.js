import { Component } from 'react'

class HeaderButtonGroup extends Component {
  constructor(props) {
    super(props)

    if (
      typeof this.props.onPreviousPage !== 'function' ||
      typeof this.props.onNextPage !== 'function'
    ) {
      throw new Error('onPreviousPage 함수 또는 onNextPage 함수가 props로 전달되지 않았습니다.')
    }
  }

  render() {
    return (
      <>
        <button onClick={this.props.onPreviousPage}>이전 페이지</button>
        <button onClick={this.props.onNextPage}>다음 페이지</button>
      </>
    )
  }
}

export default HeaderButtonGroup
