import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import './style.scss'


const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      }
    ]
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path:"/login",
    element:<Login/>
  },
])



function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router = {router}/>
      </div>
    </div>
  )
}

export default App
