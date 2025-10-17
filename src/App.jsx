import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Library from './Components/Library/Library'
import PlayingAlbum from './Components/PlayingAlbum/PlayingAlbum'
import MusicPlaying from './Components/MusicPlaying/MusicPlaying'
function App() {


  return (
   <>
   {/* <Home />
   <Library /> */}
   <PlayingAlbum />
   <MusicPlaying />

   </>
  )
}

export default App
