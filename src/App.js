import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
