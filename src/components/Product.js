import { Component } from 'react'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Nike Shoes',
      price: 119000,
    }
  }

  handleUpdate = () => {
    // this.state의 결과는 어떻게 될까?
    this.setState({
      price: 5000,
    })
  }

  render() {
    const { name, price } = this.state
    const { something } = this.props

    return (
      <div>
        <span>Name: {name}</span>
        <span>Price: {price}</span>
        <button onClick={this.handleUpdate}>Update Product</button>
      </div>
    )
  }
}

export default Product
