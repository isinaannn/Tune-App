import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrendingList from './TrendningList'
import RecommendationList from './RecommendationList'


function App() {


  return (
    <div>

      <h2 style={{ textAlign: "start", fontSize: "30px", marginBottom: "20px" }}>Trending songs</h2>
      <TrendingList />

      <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "8px", paddingRight: "5px" }}>
        <a href="" style={{ color: "white", fontWeight: "300" }}>View all</a>
      </div>

      <h2 style={{textAlign: "start",fontSize: "25px",marginBottom: "20px"}}>Recommended to you</h2>
      <div className='recommendation-card-slider-container' style={{overflow: "hidden",width: "100%",overflowX: "scroll",overflowY: "hidden",scrollBehavior: "smooth",scrollbarWidth: "none",}}>
      <div className='recommendation-card-wrapper' style={{display: "flex",gap: "30px",paddingRight: "30px"}}>

     <RecommendationList />
     <RecommendationList />
     <RecommendationList />
     <RecommendationList />
   
     </div>
     </div>
    </div>
  )
}

export default App
