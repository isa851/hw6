import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/homePage/Home';
import { Detail } from './pages/detailPage/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={}/>
        <Home />
        <Detail />
      </Routes>
    </Router>
  );
}

export default App;
