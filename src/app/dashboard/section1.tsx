'use client'

import { useState } from 'react'
import { List } from './list'

export const Section1 = () => {
  const [hasClicked, setHasClicked] = useState(false)

  const getRequestParams = () => {
    const timestamp = Date.now()
    return timestamp
  }

  return (
    <div>
      {hasClicked ? (
        <List />
      ) : (
        <button
          type="button"
          onClick={() => {
            const params = getRequestParams()
            console.log({ params })
            setHasClicked(true)
          }}>
          show list
        </button>
      )}
    </div>
  )
}
