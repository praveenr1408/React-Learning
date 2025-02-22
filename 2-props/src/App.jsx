import './App.css'
import User from './components/user'

function App() {
  const userData = {
    name:'Praveen',
    age:22
  }
  return <>
      <User userData={userData}/>
    </>
  
}

export default App
