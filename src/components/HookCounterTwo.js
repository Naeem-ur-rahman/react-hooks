import React, { useState } from 'react'

function HookCounterTwo() {
     const initialValue = 0
     const [count, setCount] = useState(initialValue)

     const incrementFive = () => {
          for (let i = 0; i < 5; i++) {
               setCount(prevCount => prevCount + 1)
          }
     }
     return (
          <div>
               <p>Count: {count}</p>
               <button onClick={() => setCount(initialValue)}>Reset</button>
               <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
               <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
               <button onClick={incrementFive}>Increment 5</button>
          </div>
     )
}

export default HookCounterTwo
