import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const save = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, save]
}
