
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/men_banner.webp'
import women_banner from './Components/Assests/women.webp'
import kids_banner from './Components/Assests/kids_banner.webp'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
