import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router";
import Styles from './routes.module.css'
import Routerinner from './RouterInner'
const Routes=createBrowserRouter([
    {
        path:"/",
        element:<>
        <Outlet></Outlet>
        <Link to={'/'}><h1>h</h1></Link>
        <Link to={'/m'}><h1>m</h1></Link>
        <Link to={'/k'}><h1>k</h1></Link>
        <Link to={'/s'}><h1>s</h1></Link>
        <Link to={'/p'}><h1>p</h1></Link>
        </>,
        children:[...Routerinner]
    },
    
    
])
export default function RouterExp(){
    
    return (
   <>
   <RouterProvider router={Routes}/>
    
   </>
    ) 
}