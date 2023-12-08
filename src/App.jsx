import React, { useState } from 'react'
import "./index.css" 

const App = () => {

  const [value, setValue] = useState(0)

  const addClick = () => {
       setValue(value+1)
  }

  const reduceClick = () => [
     setValue(value-1)
  ]

  return (
   <div className='App'>
        <h1>Counter App</h1>
        <h3>Counter value : {value} 🔥🔥 </h3>

        <div className="buttons">
         <button onClick={addClick}>Add value</button> {" "}
         <button onClick={reduceClick}>Reduce value</button>
        </div>
   </div>
  )
}

export default App
