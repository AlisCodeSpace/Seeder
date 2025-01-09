import { Outlet } from "react-router-dom"

import Navbar from "../components/global/Navbar"
import { useGlobalContext } from "../contexts/GlobalContexts"


const Home = () => {
  const { isMobile } = useGlobalContext
  return (
    <div className="relative w-full">
      {!isMobile && <Navbar />}
      <div className="pb-24 min-h-screen lg:pb-0">
        <Outlet />
      </div>
      {isMobile && <Navbar />}
    </div>
  )
}

export default Home
