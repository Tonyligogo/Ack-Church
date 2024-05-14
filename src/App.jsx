import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/Ack-Church/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    },
  ],{ basename: "/Ack-Church" });

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App