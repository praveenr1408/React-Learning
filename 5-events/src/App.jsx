import './App.css'

function App() {

  // onclicked function
  function clicked(){
    alert('button clicked')
  }

  // onchanged function
  function onchanged(event) {
    console.log(event.target.value);
  }

  return (
    <>
    {/* onclick event using button tag */}
    <button 
      style={{background:'red',padding:'10px 20px',border:'none',cursor:'pointer'}}
      onClick={clicked}
    >Count</button><br /><br />

    {/* onchanged function using input tag */}
    <input onChange={onchanged} type="text" />
    </>
  )
}

export default App
