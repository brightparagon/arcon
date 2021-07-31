import '../components/Cats.scss'

import { useState, useCallback, useEffect } from 'react'

import LoadingIndicator from './LoadingIndicator'
import HeaderButtonGroup from './HeaderButtonGroup'

import { getCatBreeds } from '../utils/api'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Cats = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [time, setTime] = useState(0)
  const [storedBreeds, storeBreeds] = useLocalStorage('breeds', [])
  const [storedPages, storePages] = useLocalStorage('fetchedPages', [])
  const [breeds, setBreeds] = useState(storedBreeds)
  const [currentPage, setCurrentPage] = useState(storedPages.length !== 0 ? storedPages[storedPages.length - 1] : 1)

  const handlePreviousPage = useCallback(() => {
    if (currentPage <= 1) {
      return
    }

    setCurrentPage((previousPage) => previousPage - 1)
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    setCurrentPage((previousPage) => previousPage + 1)
  }, [])

  useEffect(() => {
    const fetchBreeds = async () => {
      setIsLoading(true)
      const breeds = await getCatBreeds(currentPage, 10)

      if (breeds.length === 0) {
        setIsLoading(false)
        return
      }

      setBreeds((prevBreeds) => {
        const updatedBreeds = prevBreeds.concat(breeds)
        storeBreeds(updatedBreeds)

        return updatedBreeds
      })
      setIsLoading(false)
    }

    if (storedPages.includes(currentPage)) {
      return
    }

    storePages(storedPages.concat(currentPage))
    fetchBreeds()
  }, [currentPage])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((previousTime) => previousTime + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="Cats">
      <p>타이머: {time}</p>
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
