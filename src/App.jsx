import { Outlet } from "react-router-dom"
import Carousel from "./components/Carousel/Carousel"
import Navbar from "./components/Navbar/Navbar"
import Slide from "./components/Slide/Slide"

function App() {

  return (
    < >
       <Navbar /> 
       <Outlet />
       <Slide />
       <Carousel />
    </>
  )
}

export default App
