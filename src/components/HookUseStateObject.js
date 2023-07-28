import React, { useState } from 'react'

function HookUseStateObject() {
     const [name, setName] = useState({ firstName: '', lastName: '' })
     return (
          <form>
               <div>
                    <label htmlFor='firstname'>First Name: </label>
                    <input type='text'
                         id='firstname'
                         value={name.firstName}
                         onChange={(e) => setName({ ...name, firstName: e.target.value })}
                    />
               </div>
               <div>
                    <label htmlFor='lastname'>Last Name: </label>
                    <input type='text'
                         id='lastname'
                         value={name.lastName}
                         onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    />
               </div>

               <h2>First name is - {name.firstName} </h2>
               <h2>Last name is - {name.lastName} </h2>
               <h2>{JSON.stringify(name)}</h2>
          </form>
     )
}
export default HookUseStateObject