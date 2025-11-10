import { Outlet } from "react-router";

const RouterInner = [{
  element: <><h1>Router Element</h1><Outlet></Outlet></>,
  path: "/",
  children: [{
    path: "/",
    element: <h1>Router Inner</h1>
  },
  {
    path: "/m",
    element: <h1>Router Inner 2</h1>
  }]

},

{
  path: "/k",
  element: <><h1>Router Element 2</h1><Outlet /></>,
  children: [{
    path: "/k/",
    element: <h1>Router Inner</h1>
  },
  {
    path: "k/m",
    element: <h1>Router Inner 2</h1>
  }]
}]

export default RouterInner;