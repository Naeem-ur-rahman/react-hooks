import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HookUseEffectDataFetch() {
     const [post, setPost] = useState({})
     const [id, setId] = useState(1)
     const [buttonClick, setButtonClick] = useState(false)
     useEffect(() => {
          axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
               .then(response => {
                    console.log(response)
                    setPost(response.data)
               })
               .catch(err => {
                    console.log(err)
               })
          setButtonClick(false)
     }, [buttonClick])
     // second array is compulsaroy because it re renders the data in loop if second empty array is not passed

     return (
          <div>
               <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
               <button onClick={() => setButtonClick(true)} >Send Request</button>
               <ul>
                    {
                         // posts.map(post => <li key={post.id}> {post.title} </li>)    
                    }
                    {post && <li> {post.title} </li>}
               </ul>
          </div>
     )
}

export default HookUseEffectDataFetch
