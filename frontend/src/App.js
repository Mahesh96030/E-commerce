import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import  ShopCategory  from './Pages/ShopCategory';
import  Product  from './Pages/Product';
import  Cart  from './Pages/Cart';
import  LoginSignup  from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kids_banner from './Components/Assests/banner_kids.png'
function App() {
  return (
    <div >
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory category='men' banner = {men_banner}/>}/>
      <Route path='/womens' element={<ShopCategory category='women' banner={women_banner}/>}/>
      <Route path='/kids' element={<ShopCategory category='kid' banner ={kids_banner}/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/:productId/' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
