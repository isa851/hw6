import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Cart, Category, Detail, Home } from './pages';
import { Footer, Header } from './widgets';
import './app.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
