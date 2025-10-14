import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrendingList from './Components/Home/TrendingList/TrendningList'
import RecommendationList from './Components/Home/Recommendation/RecommendationList'
import YearSongs from './Components/Home/YearList/YearSongs'
import NewArrival from './Components/Home/NewArrival/NewArrival'
import RecentList from './Components/Home/RecentList/RecentList'

function App() {


  return (
    <div style={{ width: "100%" }}>

      {/* <h2 style={{ textAlign: "start", fontSize: "30px", marginBottom: "20px" }}>Trending songs</h2>
      <TrendingList />

      <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "8px", paddingRight: "5px" }}>
        <a href="" style={{ color: "white", fontWeight: "300" }}>View all</a>
      </div>


      <h2 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" }}>Recommended to you</h2>
      <div className='recommendation-card-slider-container' style={{ overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none", }}>
        <div className='recommendation-card-wrapper' style={{ display: "flex", gap: "30px", paddingRight: "30px" }}>

          <RecommendationList />
          <RecommendationList />
          <RecommendationList />
          <RecommendationList />
        </div>
      </div>


      <div className='2025-songs'>
        <h3 style={{ textAlign: "start" }}>2025 year</h3>

        <div className='songs-slider-container' style={{ marginTop: "20px", overflow: 'hidden', width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
          <div className='songs-card-wrapper' style={{ display: "flex", gap: "30px" }}>
            <YearSongs />
            <YearSongs />
            <YearSongs />
            <YearSongs />

          </div>
        </div>

      </div>



      <div className='arrival-songs-container'>
        <h3 style={{ textAlign: "start" }}>New arrival songs</h3>

        <div className='new-arrival-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
          <div className='new-arrival-songs-card-wrapper' style={{ display: "flex", gap: "30px" }}>
            <NewArrival />
            <NewArrival />
            <NewArrival />
            <NewArrival />
          </div>
        </div>
      </div> */}

      <div className='Recents'>
        <h3 style={{textAlign:"start",fontSize: "25px"}}>Recents</h3>

        <div className='recent-slider-container' style={{marginTop: "20px",overflow: "hidden",width: "100%",overflowX: "scroll",overflowY: "hidden",overscrollBehavior: "smooth",scrollbarWidth: "none"}}>
          <div className='recent-card-slider' style={{display: "flex",gap: "30px"}}>
            <RecentList />
            <RecentList />
            <RecentList />
            <RecentList />
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
