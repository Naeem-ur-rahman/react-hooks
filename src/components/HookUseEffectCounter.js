import React, { useEffect, useState } from 'react'

function HookUseEffectCounter() {
     const [count, setCount] = useState(0);
     const [name, setName] = useState('');

     //useEffect called every time when the component renders

     useEffect(() => {
          document.title = `Clicked ${count} times`
          console.log('useEffect - updating document title')
     }, [count])

     //second parameter is to conditionaly render check on useEffect
     
     return (
          <div>
               <input type='text' value={name} onChange={e => setName(e.target.value)} />
               <button onClick={() => setCount(prevCount => prevCount + 1)}>Cliked {count} Times </button>
          </div>
     )
}

export default HookUseEffectCounter
