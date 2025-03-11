import { useEffect, useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  const [msg,setMsg] = useState('')

  useEffect(() => {
    console.log('Use effect call');
    
  },[]);

  useEffect(() => {
    console.log('Use effect call1');
    setMsg(count);
  },[count]);

  return (
    <>
      {msg && <p>{msg}</p>}
      <button onClick={() => setCount(count => count + 1)}>Click</button>
    </>
  );
}

export default App;
