import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue?: T) {
  const [stored, setStored] = useState<T | undefined>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const removeStored = () => {
    localStorage.removeItem(key)
    setStored(undefined)
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stored))
  }, [key, stored])

  return { stored, setStored, removeStored }
}
