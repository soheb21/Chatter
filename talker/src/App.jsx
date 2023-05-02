
import axios from "axios"
import { UserContext, UserContextProvider } from './UserContext';
import { useContext } from 'react';
import Routes_ from './Routes_';

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
 
  return (
    <>
      <UserContextProvider>
        <Routes_ />
      </UserContextProvider>

    </>
  )
}

export default App
