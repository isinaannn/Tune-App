import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrendingList from './Components/Home/TrendingList/TrendningList'
import RecommendationList from './Components/Home/Recommendation/RecommendationList'
import YearSongs from './Components/Home/YearList/YearSongs'
import NewArrival from './Components/Home/NewArrival/NewArrival'
import RecentList from './Components/Home/RecentList/RecentList'
import Header from './Components/Home/Header/Header'
import HeaderLibrary from './Components/Library/Header/Header'
import Button from './Components/Library/Tabs/Button'
import LikedSongs from './Components/Library/LikedSongs/LikedSongs'
import LibraryCard from './Components/Library/LibraryPlaylist/LibraryCard'


function App() {


  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

      {/* <div className='header' style={{position: "sticky",top: "32px"}}>
      <Header />

      </div>

      <div className='Trending'>
      <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" }}>Trending songs</h3>
      <TrendingList />
      <TrendingList />
      <TrendingList />
      <TrendingList />

      <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "8px", paddingRight: "5px" }}>
        <a href="" style={{ color: "white", fontWeight: "300" }}>View all</a>
      </div>
      </div>

      <div className='Recommendation'>
      <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" }}>Recommended to you</h3>
      <div className='recommendation-card-slider-container' style={{ overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none", }}>
        <div className='recommendation-card-wrapper' style={{ display: "flex", gap: "30px", paddingRight: "30px" }}>

          <RecommendationList />
          <RecommendationList />
          <RecommendationList />
          <RecommendationList />
        </div>
      </div>
      </div>


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


      <div className='2025-songs'>
        <h3 style={{ textAlign: "start" }}>2025 songs</h3>

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


      <div className='library-header' style={{ width: "100%" }}>
        <HeaderLibrary />
      </div>

      <div className='tabs' style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "20px" }}>
        <Button name={"Artist"} />
        <Button name={"Playlist"} />
        <Button name={"Community"} />
        <div className='net-icon'>
          <img src="src/Components/Library/Tabs/swap.png" alt="" style={{ height: "20px", width: "20px", marginLeft: "40px" }} />
        </div>
      </div>

      <div className='liked-songs-container' style={{ marginTop: "20px" }}>
        <LikedSongs />
      </div>

      <div className='Library-playlist-container' style={{ marginTop: "20px" }}>
        <div className='playlist-slider-container' style={{ overflow: "hidden", height: "380px", overflowY: "scroll", overflowX: "hidden", scrollbarWidth: "none", scrollBehavior: "smooth" }}>
          <div className='playlist-card-wrapper' style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <LibraryCard name={"Feel good"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/94ae9f12-ffda-42c4-a49f-e252d7e2bff3.jpeg"} />
            <LibraryCard name={"Trip song"} caption={"20 songs. 2 person"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/download.jpeg"} />
            <LibraryCard name={"Dj song"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/download (1).jpeg"} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer"} src={"src/Components/Library/LibraryPlaylist/3739458a-d3c4-43b3-b46b-a7421eb12e66.jpeg"} />
            <LibraryCard name={"Feel good"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/94ae9f12-ffda-42c4-a49f-e252d7e2bff3.jpeg"} />
            <LibraryCard type={"artist"} name={"Billie eilish"} caption={"20 songs"} category={"Singer"} src={"src/Components/Library/LibraryPlaylist/b23b6f26-fd93-4413-ad79-e0458e83e33a.jpeg"} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer/music director"} src={"src/Components/Library/LibraryPlaylist/3739458a-d3c4-43b3-b46b-a7421eb12e66.jpeg"} />
            
          </div>
        </div>
      </div>


    </div>
  )
}

export default App
