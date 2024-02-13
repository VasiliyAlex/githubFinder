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
     

if (user) {
  console.log(Object.keys(user).length)
  console.log(user);
}

  return (
    <>
  <Navbar/>
  <div className="container">
    <main className="main">
      <Search/>
       {/*  user.message !== "Not Found" && Object.keys(user).length > 2 && */}
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
