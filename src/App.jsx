import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Library from './Components/Library/Library'
import PlayingAlbum from './Components/PlayingAlbum/PlayingAlbum'
import MusicPlaying from './Components/MusicPlaying/MusicPlaying'
import Search from './Components/Search/Search'


function App() {


  return (
    <>
      <Home />
      <Library />
      <PlayingAlbum />
      <MusicPlaying />
      <Search />
    </>
  )
}

export default App
