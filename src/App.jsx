
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './COMPONENTS/Home/Home'
import Library from './COMPONENTS/Library/Library'
import PlayingAlbum from './COMPONENTS/PlayingAlbum/PlayingAlbum'
import MusicPlaying from './COMPONENTS/MusicPlaying/MusicPlaying'
import Search from './COMPONENTS/Search/Search'
import MusicPlayer from './COMPONENTS/MusicPlayer/MusicPlayer'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Draawer from './COMPONENTS/Drawer/Draawer'
import Avatar from './COMPONENTS/Avatar/Avataar'
import BottomNav from './COMPONENTS/BottomNav/BottomNav'
// import RoutesExp from './COMPONENTS/RouteExperiments/RoutesExp'


function App() {

  const routes = createBrowserRouter(
    [
      {
        // App Main Layout
        path: "/",
        element: <><Outlet />
          <MusicPlaying />
        </>,

        //Components thats comes inside the Main Layout based on its route
        children: [
          {
            // App Main Body inside the App main Layout where home,search and Library Render
            path: '/',
            element: <>
              <Avatar />
              <Outlet /></>,
            children: [{
              path: "/",
              element: <Home />,
              index: true,
            },
            {
              path: "/search",
              element: <Search />
            },
            {
              path: "/library",
              element: <Library />
            },

            ]

          },
          {
            //Album which comes inside the Main Layout
            path: 'playing-album', element: <>
              <PlayingAlbum />
              <BottomNav/>

            </>
          }
        ]
      },
      {
        path:"/music-player",
        element:<MusicPlayer/>
      }
    ]
  )

  return (
  <RouterProvider router={routes}/>
  )
}

export default App
