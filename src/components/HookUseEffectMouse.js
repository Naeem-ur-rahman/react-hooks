import React, { useEffect, useState } from 'react'

function HookUseEffectMouse() {
     const [x, setX] = useState(0)
     const [y, setY] = useState(0)

     const mouseMoveHandler = (e) => {
          console.log('Mouse Moved')
          setX(e.clientX)
          setY(e.clientY)
     }

     useEffect(() => {
          console.log('UseEffect Called')
          window.addEventListener('mousemove', mouseMoveHandler)

          return () => {
               console.log('ComponentDidUnmount')
               window.removeEventListener('mousemove', mouseMoveHandler)
          }
          // Cleanup code 
          // like the function componentDidUnmount
     }, [])

     // empty array as second parameter means only call when its first renders
     // Its like the life cycle method componentDidMount
     return (
          <div>
               <h1>Mouse X-{x} Y-{y} </h1>
          </div>
     )
}

export default HookUseEffectMouse
