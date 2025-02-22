import './App.css'

function Greet(){
  return <>
    <h1>Hello</h1>
  </>
}

function Bye(){
  return <>
    <h1>Bye</h1>
  </>
}

function App() {
  const loginStatus = true
  return (
    <>
      {/* using && operator */}
      {loginStatus && <Greet />}
      
      {/* using ternary operator */}
      {loginStatus?<Greet />:<Bye />}
    </>
  )
}

export default App
