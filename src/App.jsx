
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'
import Library from './Components/Library/Library'
import PlayingAlbum from './Components/PlayingAlbum/PlayingAlbum'
import MusicPlaying from './Components/MusicPlaying/MusicPlaying'
import Search from './Components/Search/Search'
import MusicPlayer from './Components/MusicPlayer/MusicPlayer'
import { createBrowserRouter, RouterProvider } from 'react-router'

import Slider from './COMPONENTS/Slider'
import Draawer from './COMPONENTS/Drawer/Draawer'
import Avataar from './COMPONENTS/Avatar/Avataar'
import BottomNav from './COMPONENTS/BottomNav/BottomNav'


function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/', element: <>
          <Home />
          <MusicPlaying />
          <Avataar /></>

      }, {
        path: '/search', element: <>
          <MusicPlaying />
          <Search />
          <BottomNav /></>
      },
      {
        path: '/library', element: <>
          <Library />
          <MusicPlaying />
          <BottomNav />
        </>
      },
      {
        path: '/music-player', element: <>
          <MusicPlayer /></>
      },
      {
        path: 'playing-album', element: <>
          <PlayingAlbum />
          <MusicPlaying />
          <BottomNav />
        </>
      }
    ]
  )

  return (
    <>
      <RouterProvider router={router} />



    </>
  )
}

export default App
