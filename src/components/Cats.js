import './Cats.scss'

import { Component } from 'react'

import LoadingIndicator from './LoadingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'

import { getCatBreeds } from '../utils/api'

class Cats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      breeds: [],
      isLoading: false,
    }
  }

  handlePreviousPage = () => {
    if (this.state.currentPage <= 1) {
      return
    }

    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }))
  }

  handleNextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }))
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    })
    const breeds = await getCatBreeds(this.state.currentPage, 10)
    this.setState({
      breeds,
      isLoading: false,
    })
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage === this.state.currentPage) {
      return
    }

    this.setState({
      isLoading: true,
    })
    const nextBreeds = await getCatBreeds(this.state.currentPage, 10)
    this.setState({
      breeds: prevState.breeds.concat(nextBreeds),
      isLoading: false,
    })
  }

  render() {
    return (
      <div className="Cats">
        <p>현재 페이지: {this.state.currentPage}</p>
        <HeaderButtonGroup onPreviousPage={this.handlePreviousPage} onNextPage={this.handleNextPage} />
        <LoadingIndicator isLoading={this.state.isLoading} />
        <ul>
          {this.state.breeds.map((breed, index) => (
            <li className="Cat" key={`${breed.id}-${index}`}>
              <span>Name: {breed.name}</span>
              <span>Origin: {breed.origin}</span>
              <span>Description: {breed.description}</span>
              <span>
                Wiki:{' '}
                <a href={breed.wikipedia_url} target="_blank">
                  {breed.wikipedia_url}
                </a>
              </span>
              <img className="Image" src={breed.image ? breed.image.url : null} />
            </li>
          ))}
        </ul>
        <LoadingIndicator isLoading={this.state.isLoading} />
        <HeaderButtonGroup onPreviousPage={this.handlePreviousPage} onNextPage={this.handleNextPage} />
      </div>
    )
  }
}

export default Cats
