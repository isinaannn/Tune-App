import { createBrowserRouter,Outlet,RouterProvider } from 'react-router'
import './App.css'
import MusicPlayer from './COMPONENTS/MusicPlayer/MusicPlayer'
import AppMainLayout from './COMPONENTS/AppMainLayout/AppMainLayout'


function App() {

  const routes = createBrowserRouter(
    [
      {
        // App Main Layout
        path: "/",
        element: <Outlet />,
        //Components thats comes inside the Main Layout based on its route
        children: [
          ...AppMainLayout
        ]



      },
      {
        path: "/music-player",
        element: <MusicPlayer />
      }
    ]
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App
