
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {


  return (
    <UserContextProvider>
      <h1>useContext API</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
