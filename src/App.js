import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import { Footer, Header } from './widgets';
import './app.css';
import { useState } from 'react';

function App() {

  const [cartData, setCartData] = useState();

  const addCart = (obj) => {
    const idx = cartData.findIndex((item) =>{
      return item.id === obj.id;
    })
    
    if(idx > 0){
      setCartData([{
        ...obj,
        count: 1
      }, ...cartData])
    }else{
      cartData[idx].count += 1;
      setCartData([...cartData])
    }
  }
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail addCart={addCart} />} />
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
