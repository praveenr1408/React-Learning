import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [toggle,setToggle] = useState(false)

  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount((count)=>count+=1)}>Counter</button>

      <button onClick={() => setToggle(!toggle)}>{toggle ? "On" : "Off"}</button>

    </>
  )
}

export default App
