import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Cart from "./page/Cart";
import Login from './page/Login';
import Navbar from './components/Navbar';
import PrivateRoute from "./route/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const authenticate = useSelector(state => state.userInfo.auth);

  return (
    <div>
      <Navbar authenticate={authenticate}/>
      <Routes>
          <Route path="/" element={<ProductAll/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
