import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Footer from './Footer/Footer';
import Category from './Categories/Category';
import Cart from './Cart/Cart';
function App() {
  return (
    
    <div className="App">
      

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/category' Component={Category}></Route>
      </Routes>
      <Cart></Cart>
      
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
