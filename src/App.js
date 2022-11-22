import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Share/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Manage from './Pages/Manage/Manage';
import MyOrders from './Pages/MyOrders';
import Footer from './Pages/Share/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
        <Route path='/myorder' element={<MyOrders></MyOrders>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
