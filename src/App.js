 
import './App.css';
 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
 
import { Routes ,Route} from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Single from './components/Pages/Single/Single';
import Shop from './components/Pages/Shop/Shop';
import allProducts from './components/Faker/Faker';
import Notfound from './components/404page/Notfound';
const bag = allProducts.filter((word) => word.gat == 'bag');
const shoes = allProducts.filter((word) => word.gat == 'shoes');


 function App() {
  return (
    <div className="App">
 

  <Routes>
     
   <Route path='/' element={<Home/>} />
   <Route path='/*' element={<Notfound/>} />
   <Route path="/single/:id" element={<Single/>}></Route>
   <Route path="/shop" element={<Shop title='All Products'/>}></Route>
   <Route path="/shop/bag" element={<Shop title='All Bag in list' products={bag}/>}></Route>
   <Route path="/shop/shoes" element={<Shop title='All Shoes in list' products={shoes}/>}></Route>






 </Routes>

 

    </div>
  );
}

export default App;
