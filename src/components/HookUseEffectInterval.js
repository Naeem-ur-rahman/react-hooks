import React, { useEffect, useState } from 'react'

function HookUseEffectInterval() {
     const [count, setCount] = useState(0)
     const tick = () => {
          setCount(count + 1)
     }
     useEffect(() => {
          const interval = setInterval(tick, 1000)

          return () => {
               clearInterval(interval);
          }
     }, [count])

     // Carefully use the array dependency in Arrays
     return (
          <div>
               <h1>{count}</h1>
          </div>
     )
}

export default HookUseEffectInterval
