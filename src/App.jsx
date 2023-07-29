import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Features from "./components/Features"

const App = () => {

  return (
    <>
      <div className="bg-off-white mx-4 md:mx-44">
        <Navbar />
        <Banner />
        <Features />
      </div>
    </>
  )
}

export default App
