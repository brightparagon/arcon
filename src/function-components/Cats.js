import '../components/Cats.scss'

import { useState, useCallback, useEffect } from 'react'

import LoadingIndicator from './LoadingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'

import { getCatBreeds } from '../utils/api'

const Cats = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [breeds, setBreeds] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [counter, setCounter] = useState(0)

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) {
      return
    }

    setCurrentPage((previousPage) => previousPage - 1)
  }, [])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
    setCounter(100)
  }, [])

  useEffect(() => {
    const fetchBreeds = async () => {
      setIsLoading(true)
      const breeds = await getCatBreeds(currentPage, 10)

      if (breeds.length === 0) {
        setIsLoading(false)
        return
      }

      setBreeds((prevBreeds) => prevBreeds.concat(breeds))
      setIsLoading(false)
    }

    fetchBreeds()
  }, [currentPage])

  useEffect(() => {
    if (counter === 100) {
      // 무슨 기능 ...
    }
  }, [counter])

  return (
    <div className="Cats">
      <p>현재 페이지: {currentPage}</p>
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
      <LoadingIndicator isLoading={isLoading} />
      <ul>
        {breeds.map((breed, index) => (
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
      <LoadingIndicator isLoading={isLoading} />
      <HeaderButtonGroup onPreviousPage={handlePreviousPage} onNextPage={handleNextPage} />
    </div>
  )
}

export default Cats
