import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Offers from './Pages/Offers'
import Menu from './Pages/Menu'
import Navbar from './components/Navbar'
import ErrorPages from './Pages/ErrorPages'
import Landing from './Pages/Landing'
import Order from './Pages/Order';
import Delivery from './Pages/Delivery';
// import Footer from "./components/Footer";




function App() {
  // if you want to create multiple pages in react, u will first in stall router: npm i react-router-dom@6
  return (
    
    <main>
      <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path='/'  element={<Landing />} />
        <Route path='offers'  element={<Offers />} />
        <Route  path='offers/:id' element={<Offers />}/>
        <Route path='menu'  element={<Menu />} />
        <Route path='order' element={<Order />}/>
        <Route path='delivery' element ={<Delivery />}/>
        <Route path='*'  element={<ErrorPages />} />
       </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
