import React, { useState } from 'react'
import HookUseEffectMouse from './HookUseEffectMouse'
function HookUseEffectMouseContainer() {
     const [display, setDisplay] = useState(true)
     return (
          <div>
               <button onClick={() => setDisplay(prev => !prev)} >Toggle Display</button>
               {display && <HookUseEffectMouse />}
          </div>
     )
}

export default HookUseEffectMouseContainer
