import React, { useState } from 'react'

function HookUseStateArray() {
     const [items, setItems] = useState([]);
     const addItem = () => {
          setItems([...items, {
               id: items.length,
               value: Math.floor(Math.random() * 50) + 1
          }])
     }
     return (
          <div>
               <h1>Hook useState Array</h1>
               <button onClick={addItem}>Add Array Items</button>
               <ul>
                    {
                         items.map(item => <li key={item.id}> {item.value} </li>)
                    }
               </ul>
          </div>
     )
}

export default HookUseStateArray
