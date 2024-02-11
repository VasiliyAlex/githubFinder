import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Card from './components/Card'
import Repos from './components/Repos'
import { useSelector } from "react-redux";
import { userSelector } from "./redux/userSlice";

function App() {
  const { user } = useSelector(userSelector);

  return (
    <>
  <Navbar/>
  <div className="container">
    <main className="main">
      <Search/>
      {user && 
      <>
       <Card/>
      <Repos/>
      </>
      }
     
    </main>
  </div>
  
  
    </>
  )
}

export default App
