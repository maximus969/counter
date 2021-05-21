import React, { useState } from 'react'


export function Counter() {
  const maxNumber = 5
  
  const [count, setCount] = useState(0)

  const increment = () => { 
    setCount(c => c + 1)
  }
  
  const reset = () => setCount(0)

  const errorClass = ( count === maxNumber ? 'error' : '' )

  return (
    <div>
      <div className='counter'>
        <div className={errorClass}>
          {count}
        </div>        
      </div>
      <div>
        <button disabled={ count === maxNumber } onClick={ increment }>inc</button>
        <button disabled={ count === 0 } onClick={reset}>reset</button> 
      </div>
    </div>
  )
}

