import Bst from "../components/Bst"
import Category from "../components/Category"
import Clients from "../components/Clients"
import Explore from "../components/Explore"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Promotion from "../components/Promotion"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Promotion/>
      <Category/>
      <Explore/>
      <Bst/>
      <Clients/>
      <Footer/>
    </div>
  )
}

export default Home
