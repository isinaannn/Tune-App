import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrendingList from './TrendningList'


function App() {


  return (
    <div>

      <h2 style={{ textAlign: "start", fontSize: "30px", marginBottom: "20px" }}>Trending songs</h2>
      <TrendingList />

      <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "8px", paddingRight: "5px" }}>
        <a href="" style={{ color: "white", fontWeight: "300" }}>View all</a>
      </div>
    </div>
  )
}

export default App
