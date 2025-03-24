import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Distinct from "./Pages/Distinct"
import About from "./Pages/About";
import Call from "./Pages/Call";
import Article from "./Pages/Article";
import Amazing from "./Pages/Amazing";
// import Category from './components/Category'
// import Explore from './components/Explore'
// import Header from './components/Header'
// import Promotion from './components/Promotion'
// import Bst from './components/Bst'
// import Clients from './components/Clients'
// import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/distinct" element={<Distinct/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/call" element={<Call/>}/>
      <Route path="/article" element={<Article/>}/>
      <Route path="/amazing" element={<Amazing/>}/>
      </Routes>
      
   
      </BrowserRouter>
      {/* <Header/>
      <Promotion/>
      <Category/>
      <Explore/>
      <Bst/>
      <Clients/>
      <Footer/> */}
    </div>
  )
}

export default App
