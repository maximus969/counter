import React, { useState } from 'react'


export function Counter() {
  const maxNumber = 5

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(c => c + 1)
  }

  const reset = () => setCount(0)

  const errorClass = (count === maxNumber ? 'error' : '')

  return (
    <div className='app'>
      <div className='counter'>
        <div className={errorClass}>
          {count}
        </div>
      </div>
      <div className='buttons'>
        <button onClick={increment}
          disabled={count === maxNumber}
          className={count !== maxNumber ? 'button' : 'button-error'}>
          inc
          </button>
        <button onClick={reset}
          disabled={count === 0}
          className={count !== 0 ? 'button' : 'button-error'}>
          reset
          </button>
      </div>
    </div>
  )
}

