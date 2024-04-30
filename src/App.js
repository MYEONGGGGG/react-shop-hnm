import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';
import {useEffect, useState} from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
      console.log('login status = ', authenticate);
  },[authenticate]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
